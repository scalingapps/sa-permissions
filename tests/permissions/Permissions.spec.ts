import { expect } from 'chai'
// import { 
// 	IPermissionDomains
// } from '@/permissions/IPermissionDomains'
import { 
	IPermissionType,
	PermissionType
} from '@/permissions/IPermissionType'
import { permissions } from '@/permissions/Permissions'

// save some types to better enforce TypeSCript type checks here
//type IPermissionDomainsKeyType = keyof IPermissionDomains
type IPermissionTypeKeyType = keyof IPermissionType


// begin: unit tests helpers:
const buildUserPermissionsFromKeys = (keys: IPermissionTypeKeyType[]): number => {
    let userPermissions: number = 0
    keys.forEach((key) => {
        const value = PermissionType[key]
        userPermissions = userPermissions | value
    })
    return userPermissions
}

const buildUserPermissionsByExclusion = (keysToExclude: IPermissionTypeKeyType[]): number => {
    const keys: IPermissionTypeKeyType[] = Object.getOwnPropertyNames(PermissionType)
        .filter(key => keysToExclude.indexOf(key as IPermissionTypeKeyType) === -1) as IPermissionTypeKeyType[]
    console.info('buildUserPermissionsByExclusion', keys)
    return buildUserPermissionsFromKeys(keys);
}

const buildUserPermissionsFromRange = (fromValue: number, toValue: number): number => {
    const keys: IPermissionTypeKeyType[] = Object.getOwnPropertyNames(PermissionType) as IPermissionTypeKeyType[]
    let userPermissions: number = 0;
    
    keys.forEach((key) => {
        const value = PermissionType[key]
        if (value >= fromValue && value <= toValue) {
            //console.info(`${key} value`, value)
            userPermissions = userPermissions | value
        }
    })

    return userPermissions;
}
// end: unit tests helpers:

describe('Permissions', () => {

    // begin: unit tests helper
    describe('buildUserPermissionsFromKeys (unit test helper)', () => {
        it('should return expected value when includes [View, Add] only ', () => {
            // testing the unit test helper buildUserPermissionsFromKeys here
            const userPermissions = buildUserPermissionsFromKeys(['View', 'Add'])
			const expected = PermissionType.View | PermissionType.Add;
            console.info('userPermissions', userPermissions, 'expected', expected)
            expect(userPermissions).to.equal(expected)
        })
    })

    describe('buildUserPermissionsByExclusion (unit test helper)', () => {
        it('should return expected value when excludes [Update, Delete]', () => {
            // testing the unit test helper buildUserPermissionsByExclusion here
            const userPermissions = buildUserPermissionsByExclusion(['Update', 'Delete'])
			const expected = PermissionType.View | PermissionType.Add;
            console.info('userPermissions', userPermissions, 'expected', expected)
            expect(userPermissions).to.equal(expected)
        })
    })

    describe('buildUserPermissionsFromRange (unit test helper)', () => {
        it('should return expected value when includes from View to Delete', () => {
            // testing the unit test helper buildUserPermissionsFromRange here
            const userPermissions = buildUserPermissionsFromRange(PermissionType.View, PermissionType.Update)
			const expected = PermissionType.View | PermissionType.Add | PermissionType.Update;
            console.info('userPermissions', userPermissions, 'expected', expected)
            expect(userPermissions).to.equal(expected)
        })
    })
    // end: unit tests helper
    
    describe('hasPermission', () => {      

        it('should return true when user userPermissions include View', () => {

            const userPermissions = buildUserPermissionsFromRange(PermissionType.View, PermissionType.Delete)
            console.info('userPermissions', userPermissions)

            let result = permissions.hasPermission(
                PermissionType.View,
                userPermissions
            )
            expect(true).to.equal(result)
        })

        it('should return false when user userPermissions do NOT include View', () => {

            const userPermissions = buildUserPermissionsByExclusion(['View'])
            console.info('userPermissions', userPermissions)

            const result = permissions.hasPermission(
                PermissionType.View,
                userPermissions
            )

            expect(false).to.equal(result)
        })

        it('should return false when user userPermissions do NOT include Delete', () => {

            const userPermissions = buildUserPermissionsByExclusion(['Delete'])
            console.info('userPermissions', userPermissions)

            const result = permissions.hasPermission(
                PermissionType.Delete,
                userPermissions
            )

            expect(false).to.equal(result)
        })

    })

})
