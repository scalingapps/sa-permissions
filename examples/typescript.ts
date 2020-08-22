import { PermissionType, PermissionsBuilder } from '@/sa-permissions'
import { HasPermissionsArgs, AddUserPermissionsArgs, Security } from '@/sa-security'

// setup
const appSecurity = new Security()
// this is to help tests, but you would have the value stored in a db or alike
const builder = new PermissionsBuilder(PermissionType)

// add user permissions
appSecurity.addUserPermissions({
  // argument is of type AddUserPermissionsArgs
  userId: userId,
  permissions: {
    Items: builder.fromKeys(['View', 'Add']),
    Accounts: builder.fromKeys(['View']),
  },
})

// check for permissions
appSecurity.hasPermissions({
  // argument is of type HasPermissionsArgs
  userId: 'test-user',
  domain: 'Items',
  permissionType: PermissionType.View,
})
