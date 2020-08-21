import { expect } from 'chai'
import { PermissionTypeInterface, PermissionType, SaPermissions, PermissionsBuilder } from '@/sa-permissions'

// save some types to better enforce TypeScript type checks within the unit tests
type PermissionTypeInterfaceKeyType = keyof PermissionTypeInterface

describe('SaPermissions', () => {
  const builder = new PermissionsBuilder(PermissionType)

  describe('hasPermission', () => {
    it('should return true when user userPermissions include View', () => {
      const userPermissions = builder.fromRange(PermissionType.View, PermissionType.Delete)
      let result = SaPermissions.hasPermission(PermissionType.View, userPermissions)
      expect(true).to.equal(result)
    })

    it('should return false when user userPermissions do NOT include View', () => {
      const userPermissions = builder.byExclusion(['View'])
      const result = SaPermissions.hasPermission(PermissionType.View, userPermissions)
      expect(false).to.equal(result)
    })

    it('should return false when user userPermissions do NOT include Delete', () => {
      const userPermissions = builder.byExclusion(['Delete'])
      const result = SaPermissions.hasPermission(PermissionType.Delete, userPermissions)
      expect(false).to.equal(result)
    })
  })
})
