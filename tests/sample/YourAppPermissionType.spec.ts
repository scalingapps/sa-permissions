import { expect } from 'chai'
import { 
	YourAppPermissionTypeInterface,
	YourAppPermissionType
} from '@/sample/YourAppPermissionType'
import { 
	Permissions
} from '@/permissions'

// save some types to better enforce TypeScript type checks within the unit tests
type YourAppPermissionTypeKeyType = keyof YourAppPermissionTypeInterface


// begin: unit tests helpers:
const buildUserPermissionsFromKeys = (keys: YourAppPermissionTypeKeyType[]): number => {
    let userPermissions: number = 0
    keys.forEach((key) => {
        const value = YourAppPermissionType[key]
        userPermissions = userPermissions | value
    })
    return userPermissions
}

const buildUserPermissionsByExclusion = (keysToExclude: YourAppPermissionTypeKeyType[]): number => {
    const keys: YourAppPermissionTypeKeyType[] = Object.getOwnPropertyNames(YourAppPermissionType)
        .filter(key => keysToExclude.indexOf(key as YourAppPermissionTypeKeyType) === -1) as YourAppPermissionTypeKeyType[]
    console.info('buildUserPermissionsByExclusion', keys)
    return buildUserPermissionsFromKeys(keys);
}

const buildUserPermissionsFromRange = (fromValue: number, toValue: number): number => {
    const keys: YourAppPermissionTypeKeyType[] = Object.getOwnPropertyNames(YourAppPermissionType) as YourAppPermissionTypeKeyType[]
    let userPermissions: number = 0;
    
    keys.forEach((key) => {
        const value = YourAppPermissionType[key]
        if (value >= fromValue && value <= toValue) {
            //console.info(`${key} value`, value)
            userPermissions = userPermissions | value
        }
    })

    return userPermissions;
}
// end: unit tests helpers:

describe('YourAppPermissionTypeKeyType', () => {

    // begin: unit tests helper
    describe('buildUserPermissionsFromKeys (unit test helper)', () => {
        it('should return expected value when includes [View, Add] only ', () => {
            // testing the unit test helper buildUserPermissionsFromKeys here
            const userPermissions = buildUserPermissionsFromKeys(['View', 'Add', 'Share'])
						const expected = 
							YourAppPermissionType.View 
							| YourAppPermissionType.Add
							| YourAppPermissionType.Share;
            console.info('userPermissions', userPermissions, 'expected', expected)
            expect(userPermissions).to.equal(expected)
        })
    })

    describe('buildUserPermissionsByExclusion (unit test helper)', () => {
			it('should return expected value when excludes [Update, Delete]', () => {
				// testing the unit test helper buildUserPermissionsByExclusion here
				const userPermissions = buildUserPermissionsByExclusion(['Update', 'Delete'])
				const expected = 
					YourAppPermissionType.View 
					| YourAppPermissionType.Add 
					| YourAppPermissionType.Publish 
					| YourAppPermissionType.Share;
				console.info('userPermissions', userPermissions, 'expected', expected)
				expect(userPermissions).to.equal(expected)
			})
    })

    describe('buildUserPermissionsFromRange (unit test helper)', () => {
        it('should return expected value when includes from View to Delete', () => {
            // testing the unit test helper buildUserPermissionsFromRange here
            const userPermissions = buildUserPermissionsFromRange(YourAppPermissionType.View, YourAppPermissionType.Share)
						const expected = 
							YourAppPermissionType.View 
							| YourAppPermissionType.Add 
							| YourAppPermissionType.Update
							| YourAppPermissionType.Delete
							| YourAppPermissionType.Publish 
							| YourAppPermissionType.Share;
            //console.info('userPermissions', userPermissions, 'expected', expected)
            expect(userPermissions).to.equal(expected)
        })
    })
    // end: unit tests helper
    
    describe('hasPermission', () => {      

        it('should return true when user userPermissions include View', () => {

            const userPermissions = buildUserPermissionsFromRange(YourAppPermissionType.View, YourAppPermissionType.Share)
            console.info('userPermissions', userPermissions)

            let result = Permissions.hasPermission(
                YourAppPermissionType.View,
                userPermissions
            )
            expect(true).to.equal(result)
        })

        it('should return false when user userPermissions do NOT include View', () => {

            const userPermissions = buildUserPermissionsByExclusion(['View'])
            console.info('userPermissions', userPermissions)

            const result = Permissions.hasPermission(
                YourAppPermissionType.View,
                userPermissions
            )

            expect(false).to.equal(result)
        })

        it('should return false when user userPermissions do NOT include Delete', () => {

            const userPermissions = buildUserPermissionsByExclusion(['Delete'])
            console.info('userPermissions', userPermissions)

            const result = Permissions.hasPermission(
                YourAppPermissionType.Delete,
                userPermissions
            )

            expect(false).to.equal(result)
        })

        it('should return false when user userPermissions do NOT include Share', () => {

            const userPermissions = buildUserPermissionsByExclusion(['Share'])
            console.info('userPermissions', userPermissions)

            const result = Permissions.hasPermission(
                YourAppPermissionType.Share,
                userPermissions
            )

            expect(false).to.equal(result)
        })

        it('should return false when user userPermissions do NOT include Publish', () => {

            const userPermissions = buildUserPermissionsByExclusion(['Publish'])
            console.info('userPermissions', userPermissions)

            const result = Permissions.hasPermission(
                YourAppPermissionType.Publish,
                userPermissions
            )

            expect(false).to.equal(result)
        })

    })

})
