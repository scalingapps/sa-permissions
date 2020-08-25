"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permissions = void 0;
const PermissionType_1 = require("./PermissionType");
/**
 * @name Permissions
 * @description
 * Export our static Permissions instance
 */
exports.Permissions = class {
    static hasPermission(permissionType, permissions) {
        return permissionType === (permissions & permissionType);
    }
    /**
     * @name extendTypes
     * @description
     * Extends PermissionTypeInterface with additional properties with the correct values
     * @param names The names of the new permission types to add
     */
    static extendTypes(names) {
        // create an empty dictionary where to add additional custom permissions
        const additionalPermissions = {};
        let factor = Object.keys(PermissionType_1.PermissionType).length - 1;
        // assign values to each new permission type
        names.forEach((name) => [
            // double previous value
            (additionalPermissions[name] = Math.pow(2, factor++)),
        ]);
        // create union of both current PermissionType and the additionalPermissions
        const unionPermissionType = Object.freeze(Object.assign(Object.assign({}, PermissionType_1.PermissionType), additionalPermissions));
        return unionPermissionType;
    }
};
