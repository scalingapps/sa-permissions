import { expect } from 'chai'
import { PermissionTypeInterface, PermissionType, Permissions, PermissionsBuilder } from '@/sa-permissions'

// save some types to better enforce TypeScript type checks within the unit tests
type PermissionTypeInterfaceKeyType = keyof PermissionTypeInterface

describe('Permissions', () => {
  const builder = new PermissionsBuilder(PermissionType)

  describe('hasPermission', () => {
    it('should return true when permissions include View', () => {
      const permissions = builder.fromRange(PermissionType.View, PermissionType.Delete)
      let result = Permissions.hasPermission(PermissionType.View, permissions)
      expect(true).to.equal(result)
    })

    it('should return false when permissions do NOT include View', () => {
      const permissions = builder.byExclusion(['View'])
      const result = Permissions.hasPermission(PermissionType.View, permissions)
      expect(false).to.equal(result)
    })

    it('should return false when permissions do NOT include Delete', () => {
      const permissions = builder.byExclusion(['Delete'])
      const result = Permissions.hasPermission(PermissionType.Delete, permissions)
      expect(false).to.equal(result)
    })
  })
})
