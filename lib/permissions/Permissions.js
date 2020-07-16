"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.Permissions = void 0;
class Permissions {
    hasPermission(permissionType, userPermissions) {
        return (permissionType === (userPermissions & permissionType));
    }
}
exports.Permissions = Permissions;
exports.permissions = new Permissions();
//# sourceMappingURL=Permissions.js.map