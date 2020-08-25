# sa-permissions

[![npm version](https://badge.fury.io/js/sa-permissions.svg)](https://badge.fury.io/js/sa-permissions)

Utilities to add permissions check to your TypeScript/JavaScript app.

### examples
[in progress, see examples folder]

```
const params: HasPermissionsArgs = {
	id: id,
	domain: 'Items',
	permissionType: PermissionType.View,
}
const result = appSecurity.hasPermissions(params)
```

##### Unit tests results
<img src="readme-images/unit-tests.png" width="80%" />



