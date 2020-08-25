import { expect } from 'chai'
import { YourAppPermissionTypeInterface, YourAppPermissionType } from '@/yourapp/YourAppPermissionType'
import { Permissions, PermissionsBuilder } from '@/sa-permissions'

// save some types to better enforce TypeScript type checks within the unit tests
type YourAppPermissionTypeKeyType = keyof YourAppPermissionTypeInterface

describe('YourAppPermissionTypeKeyType', () => {
  const builder = new PermissionsBuilder(YourAppPermissionType)

  describe('hasPermission', () => {
    it('should return true when permissions include View', () => {
      const permissions = builder.fromRange(YourAppPermissionType.View, YourAppPermissionType.Share)
      let result = Permissions.hasPermission(YourAppPermissionType.View, permissions)
      expect(true).to.equal(result)
    })

    it('should return false when permissions do NOT include View', () => {
      const permissions = builder.byExclusion(['View'])
      const result = Permissions.hasPermission(YourAppPermissionType.View, permissions)
      expect(false).to.equal(result)
    })

    it('should return false when permissions do NOT include Delete', () => {
      const permissions = builder.byExclusion(['Delete'])
      const result = Permissions.hasPermission(YourAppPermissionType.Delete, permissions)
      expect(false).to.equal(result)
    })

    it('should return false when permissions do NOT include Share', () => {
      const permissions = builder.byExclusion(['Share'])
      const result = Permissions.hasPermission(YourAppPermissionType.Share, permissions)
      expect(false).to.equal(result)
    })

    it('should return false when permissions do NOT include Publish', () => {
      const permissions = builder.byExclusion(['Publish'])
      const result = Permissions.hasPermission(YourAppPermissionType.Publish, permissions)
      expect(false).to.equal(result)
    })
  })
})
