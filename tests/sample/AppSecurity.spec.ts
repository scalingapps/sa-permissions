import { expect } from 'chai'
import { 
	AppSecurityDomains
} from '@/sample/AppSecurityDomains'
import { 
	AppPermissionType
} from '@/sample/AppPermissionType'
import { 
	ISecurityHasPermissionsArgs
} from '@/security'
import { 
	appSecurity
} from '@/sample/AppSecurity'

describe('appSecurity', () => {

  describe('ItemsDomain', () => {

    describe('hasPermissions', () => {

      it('should return true', () => {

        // testing the unit test helper buildUserPermissionsFromKeys here
        // const userPermissions = buildUserPermissionsFromKeys(['View', 'Add'])
        // const expected = PermissionType.View | PermissionType.Add;
        // console.info('userPermissions', userPermissions, 'expected', expected)
        // expect(userPermissions).to.equal(expected)

        const args: ISecurityHasPermissionsArgs = {
          domain: AppSecurityDomains.Items,
          permissionType: AppPermissionType.View
        }

        const result = appSecurity.hasPermissions(args)
        expect(result).to.equal(true)

      })
      
    })

  })

})
