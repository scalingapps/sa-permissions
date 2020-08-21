import { expect } from 'chai'
import { YourAppPermissionTypeInterface, YourAppPermissionType } from '@/yourapp/YourAppPermissionType'
import { Permissions, PermissionsBuilder } from '@/permissions'

// save some types to better enforce TypeScript type checks within the unit tests
type YourAppPermissionTypeKeyType = keyof YourAppPermissionTypeInterface

describe('YourAppPermissionTypeKeyType', () => {
  const builder = new PermissionsBuilder(YourAppPermissionType)

  describe('hasPermission', () => {
    it('should return true when user userPermissions include View', () => {
      const userPermissions = builder.fromRange(YourAppPermissionType.View, YourAppPermissionType.Share)
      let result = Permissions.hasPermission(YourAppPermissionType.View, userPermissions)
      expect(true).to.equal(result)
    })

    it('should return false when user userPermissions do NOT include View', () => {
      const userPermissions = builder.byExclusion(['View'])
      const result = Permissions.hasPermission(YourAppPermissionType.View, userPermissions)
      expect(false).to.equal(result)
    })

    it('should return false when user userPermissions do NOT include Delete', () => {
      const userPermissions = builder.byExclusion(['Delete'])
      const result = Permissions.hasPermission(YourAppPermissionType.Delete, userPermissions)
      expect(false).to.equal(result)
    })

    it('should return false when user userPermissions do NOT include Share', () => {
      const userPermissions = builder.byExclusion(['Share'])
      const result = Permissions.hasPermission(YourAppPermissionType.Share, userPermissions)
      expect(false).to.equal(result)
    })

    it('should return false when user userPermissions do NOT include Publish', () => {
      const userPermissions = builder.byExclusion(['Publish'])
      const result = Permissions.hasPermission(YourAppPermissionType.Publish, userPermissions)
      expect(false).to.equal(result)
    })
  })
})
