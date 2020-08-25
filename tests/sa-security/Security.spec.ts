import { expect } from 'chai'
import { PermissionType, PermissionsBuilder } from '@/sa-permissions'
import { HasPermissionsArgs, PermissionsInfo, Security } from '@/sa-security'

describe('Security', () => {
  // setup
  const appSecurity = new Security()
  // this is to help tests, but you would have the value stored in a db or alike
  const builder = new PermissionsBuilder(PermissionType)

  const id = 'test-user'

  // our user or role permissions
  appSecurity.addPermissionsInfo({
    id: id,
    permissions: {
      Items: builder.fromKeys(['View', 'Add']),
      Accounts: builder.fromKeys(['View']),
    },
  } as PermissionsInfo)

  describe('Domain: Items:', () => {
    const params: HasPermissionsArgs = {
      id: id,
      domain: 'Items',
      permissionType: PermissionType.View,
    }

    describe('hasPermissions', () => {
      it('should return true for View', () => {
        params.permissionType = PermissionType.View
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(true)
      })

      it('should return true for Add', () => {
        params.permissionType = PermissionType.Add
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(true)
      })

      it('should return false for Update', () => {
        params.permissionType = PermissionType.Update
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(false)
      })
    })
  })

  describe('Domain: Accounts:', () => {
    const params: HasPermissionsArgs = {
      id: id,
      domain: 'Accounts',
      permissionType: PermissionType.View,
    }

    describe('hasPermissions', () => {
      it('should return true for View', () => {
        params.permissionType = PermissionType.View
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(true)
      })

      it('should return false for Add', () => {
        params.permissionType = PermissionType.Add
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(false)
      })

      it('should return false for Update', () => {
        params.permissionType = PermissionType.Update
        const result = appSecurity.hasPermissions(params)
        expect(result).to.equal(false)
      })
    })
  })
})
