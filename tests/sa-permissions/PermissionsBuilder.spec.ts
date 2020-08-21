import { expect } from 'chai'
import { PermissionTypeInterface, PermissionType, PermissionsBuilder } from '@/sa-permissions'

describe('PermissionsBuilder (of PermissionType)', () => {
  const builder = new PermissionsBuilder(PermissionType)

  describe('fromKeys', () => {
    it('should return expected value when includes [View, Add] only ', () => {
      const userPermissions = builder.fromKeys(['View', 'Add'])
      const expected = PermissionType.View | PermissionType.Add
      expect(userPermissions).to.equal(expected)
    })
  })

  describe('byExclusion', () => {
    it('should return expected value when excludes [Update, Delete]', () => {
      const userPermissions = builder.byExclusion(['Update', 'Delete'])
      const expected = PermissionType.View | PermissionType.Add
      expect(userPermissions).to.equal(expected)
    })
  })

  describe('fromRange', () => {
    it('should return expected value when includes from View to Delete', () => {
      const userPermissions = builder.fromRange(PermissionType.View, PermissionType.Update)
      const expected = PermissionType.View | PermissionType.Add | PermissionType.Update
      expect(userPermissions).to.equal(expected)
    })
  })
})
