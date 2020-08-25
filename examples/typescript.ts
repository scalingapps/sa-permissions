import { PermissionType, PermissionsBuilder } from '@/sa-permissions'
import { HasPermissionsArgs, PermissionsInfo, Security } from '@/sa-security'

// setup
const appSecurity = new Security()
// this is to help tests, but you would have the value stored in a db or alike
const builder = new PermissionsBuilder(PermissionType)

// add user or role permissions
appSecurity.addPermissionsInfo({
  // argument is of type PermissionsInfo
  id: id,
  permissions: {
    Items: builder.fromKeys(['View', 'Add']),
    Accounts: builder.fromKeys(['View']),
  },
})

// check for permissions
appSecurity.hasPermissions({
  // argument is of type HasPermissionsArgs
  id: 'test-user',
  domain: 'Items',
  permissionType: PermissionType.View,
})
