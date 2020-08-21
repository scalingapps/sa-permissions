import { expect } from 'chai'
import { YourAppPermissionTypeInterface, YourAppPermissionType } from '@/yourapp/YourAppPermissionType'
import { PermissionTypeInterface, PermissionType, PermissionsBuilder } from '@/permissions'

describe('PermissionsBuilder (of YourAppPermissionType)', () => {
  const builder = new PermissionsBuilder(YourAppPermissionType)

  describe('fromKeys', () => {
    it('should return expected value when includes [View, Add, Share] only ', () => {
      const userPermissions = builder.fromKeys(['View', 'Add', 'Share'])
      const expected = 
				YourAppPermissionType.View 
				| YourAppPermissionType.Add 
				| YourAppPermissionType.Share
			
      expect(userPermissions).to.equal(expected)
    })
  })

  describe('byExclusion', () => {
    it('should return expected value when excludes [Update, Delete]', () => {
      const userPermissions = builder.byExclusion(['Update', 'Delete'])
      const expected =
        YourAppPermissionType.View |
        YourAppPermissionType.Add |
        YourAppPermissionType.Publish |
        YourAppPermissionType.Share

      expect(userPermissions).to.equal(expected)
    })
  })

  describe('fromRange', () => {
    it('should return expected value when includes from View to Share', () => {
      const userPermissions = builder.fromRange(YourAppPermissionType.View, YourAppPermissionType.Share)
      const expected =
        YourAppPermissionType.View |
        YourAppPermissionType.Add |
        YourAppPermissionType.Update |
        YourAppPermissionType.Delete |
        YourAppPermissionType.Publish |
        YourAppPermissionType.Share

      expect(userPermissions).to.equal(expected)
    })
  })
})
