import { expect } from 'chai'
import {
	HasPermissionsArgs,
	Security
} from '@/security'
import { 
	PermissionsBuilder
} from '@/permissions'
import {
	YourAppPermissionType
} from '@/yourapp/YourAppPermissionType'

describe('appSecurity', () => {

	// setup Security
	const appSecurity = new Security()

	// this is to help tests, but you would have the value stored in a db or alike
	const builder = new PermissionsBuilder(YourAppPermissionType)
	const userId = 'your-app-user'
	// our user permissions
	appSecurity.addUserPermissions({
		userId: userId,
		permissions: {
			'Items': builder.fromKeys(['View', 'Publish', 'Share']),
			'Accounts': builder.fromKeys(['View', 'Publish'])
		}
	})

  describe('Domain: Items:', () => {
		const params: HasPermissionsArgs = {
			userId: userId,
			domain: 'Items',
			permissionType: YourAppPermissionType.View
		}

    describe('hasPermissions', () => {
      it('should return true for View', () => {
        params.permissionType = YourAppPermissionType.View
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(true)
      })

			it('should return true for Publish', () => {
        params.permissionType = YourAppPermissionType.Publish
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(true)
      })

			it('should return true for Share', () => {
        params.permissionType = YourAppPermissionType.Share
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(true)
      })

			it('should return false for Update', () => {
        params.permissionType = YourAppPermissionType.Update
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(false)
      })

			it('should return false for Delete', () => {
        params.permissionType = YourAppPermissionType.Delete
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(false)
      })
    })
  })

	describe('Domain: Accounts:', () => {
		const params: HasPermissionsArgs = {
			userId: userId,
			domain: 'Accounts',
			permissionType: YourAppPermissionType.View
		}

    describe('hasPermissions', () => {
      it('should return true for View', () => {
        params.permissionType = YourAppPermissionType.View
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(true)
      })

			it('should return true for Publish', () => {
        params.permissionType = YourAppPermissionType.Publish
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(true)
      })

			it('should return false for Share', () => {
        params.permissionType = YourAppPermissionType.Share
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(false)
      })

			it('should return false for Update', () => {
        params.permissionType = YourAppPermissionType.Update
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(false)
      })

			it('should return false for Delete', () => {
        params.permissionType = YourAppPermissionType.Delete
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(false)
      })
    })
  })
})
