"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permissions = void 0;
const PermissionType_1 = require("./PermissionType");
/**
 * @name PermissionsStaticInterface
 * @description
 * Export our static Permissions instance
 */
exports.Permissions = class {
    static hasPermission(permissionType, userPermissions) {
        return permissionType === (userPermissions & permissionType);
    }
    /**
     * @name extendTypes
     * @description
     * Extends PermissionTypeInterface with additional properties with the correct values
     */
    static extendTypes(newTypes) {
        // create an empty dictionary where to add additional custom permissions
        const additionalPermissions = {};
        let factor = Object.keys(PermissionType_1.PermissionType).length - 1;
        // assign values to each new permission type
        newTypes.forEach((type) => [
            // double previous value
            (additionalPermissions[type] = Math.pow(2, factor++)),
        ]);
        // create union of both current PermissionType and the additionalPermissions
        const unionPermissionType = Object.freeze({
            ...PermissionType_1.PermissionType,
            ...additionalPermissions,
        });
        return unionPermissionType;
    }
};
//# sourceMappingURL=Permissions.js.map