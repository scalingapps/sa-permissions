import { expect } from 'chai'
import { 
	IPermissionDomains
} from '@/permissions/IPermissionDomains'
import { 
	IPermissionTypes,
	PermissionTypes
} from '@/permissions/IPermissionTypes'
import { permissions } from '@/permissions/Permissions'

// save some types to better enforce TypeSCript type checks here
type IPermissionDomainsKeyType = keyof IPermissionDomains
type IPermissionTypesKeyType = keyof IPermissionTypes


// begin: unit tests helpers:
const buildUserPermissionsFromKeys = (keys: IPermissionTypesKeyType[]): number => {
    let userPermissions: number = 0
    keys.forEach((key) => {
        const value = PermissionTypes[key]
        userPermissions = userPermissions | value
    })
    return userPermissions
}

const buildUserPermissionsByExclusion = (keysToExclude: IPermissionTypesKeyType[]): number => {
    const keys: IPermissionTypesKeyType[] = Object.getOwnPropertyNames(PermissionTypes)
        .filter(key => keysToExclude.indexOf(key as IPermissionTypesKeyType) === -1) as IPermissionTypesKeyType[]
    console.info('buildUserPermissionsByExclusion', keys)
    return buildUserPermissionsFromKeys(keys);
}

const buildUserPermissionsFromRange = (fromValue: number, toValue: number): number => {
    const keys: IPermissionTypesKeyType[] = Object.getOwnPropertyNames(PermissionTypes) as IPermissionTypesKeyType[]
    let userPermissions: number = 0;
    
    keys.forEach((key) => {
        const value = PermissionTypes[key]
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
			const expected = PermissionTypes.View | PermissionTypes.Add;
            console.info('userPermissions', userPermissions, 'expected', expected)
            expect(userPermissions).to.equal(expected)
        })
    })

    describe('buildUserPermissionsByExclusion (unit test helper)', () => {
        it('should return expected value when excludes [Update, Delete]', () => {
            // testing the unit test helper buildUserPermissionsByExclusion here
            const userPermissions = buildUserPermissionsByExclusion(['Update', 'Delete'])
			const expected = PermissionTypes.View | PermissionTypes.Add;
            console.info('userPermissions', userPermissions, 'expected', expected)
            expect(userPermissions).to.equal(expected)
        })
    })

    describe('buildUserPermissionsFromRange (unit test helper)', () => {
        it('should return expected value when includes from View to Delete', () => {
            // testing the unit test helper buildUserPermissionsFromRange here
            const userPermissions = buildUserPermissionsFromRange(PermissionTypes.View, PermissionTypes.Update)
			const expected = PermissionTypes.View | PermissionTypes.Add | PermissionTypes.Update;
            console.info('userPermissions', userPermissions, 'expected', expected)
            expect(userPermissions).to.equal(expected)
        })
    })
    // end: unit tests helper
    
    describe('hasPermission', () => {      

        it('should return true when user userPermissions include View', () => {

            const userPermissions = buildUserPermissionsFromRange(PermissionTypes.View, PermissionTypes.Delete)
            console.info('userPermissions', userPermissions)

            let result = permissions.hasPermission(
                PermissionTypes.View,
                userPermissions
            )
            expect(true).to.equal(result)
        })

        it('should return false when user userPermissions do NOT include View', () => {

            const userPermissions = buildUserPermissionsByExclusion(['View'])
            console.info('userPermissions', userPermissions)

            const result = permissions.hasPermission(
                PermissionTypes.View,
                userPermissions
            )

            expect(false).to.equal(result)
        })

        it('should return false when user userPermissions do NOT include Delete', () => {

            const userPermissions = buildUserPermissionsByExclusion(['Delete'])
            console.info('userPermissions', userPermissions)

            const result = permissions.hasPermission(
                PermissionTypes.Delete,
                userPermissions
            )

            expect(false).to.equal(result)
        })

    })

})
