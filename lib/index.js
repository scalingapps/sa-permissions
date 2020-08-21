"use strict";
// export * from './sa-permissions'
// export * from './sa-security'
// export * from './yourapp/YourAppPermissionType'
Object.defineProperty(exports, "__esModule", { value: true });
const sa_permissions_1 = require("@/sa-permissions");
const sa_security_1 = require("@/sa-security");
exports.default = {
    PermissionType: sa_permissions_1.PermissionType,
    PermissionsBuilder: sa_permissions_1.PermissionsBuilder,
    SaPermissions: sa_permissions_1.SaPermissions,
    SaSecurity: sa_security_1.SaSecurity
};
