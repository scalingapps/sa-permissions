# sa-permissions

[![npm version](https://badge.fury.io/js/sa-permissions.svg)](https://badge.fury.io/js/sa-permissions)

Utilities to add permissions check to your TypeSCript/JavaScript app.

### example
[in progress]

```
const params: HasPermissionsArgs = {
	userId: userId,
	domain: 'Items',
	permissionType: PermissionType.View,
}
const result = appSecurity.hasPermissions(params)
```

##### Unit tests results
<img src="readme-images/unit-tests.png" width="80%" />



