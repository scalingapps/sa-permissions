import { PermissionType } from './PermissionType';
/**
 * @name Permissions
 * @description
 * Export our static Permissions instance
 */
export const Permissions = class {
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
        // get keys
        const keys = Object.keys(PermissionType);
        // check if base zero
        const firstValue = PermissionType[keys[0]];
        let factor = Object.keys(PermissionType).length;
        if (firstValue === 0) {
            factor -= 1;
        }
        // assign values to each new permission type
        names.forEach((name) => [
            // double previous value
            (additionalPermissions[name] = Math.pow(2, factor++)),
        ]);
        // create union of both current PermissionType and the additionalPermissions
        const unionPermissionType = Object.freeze(Object.assign(Object.assign({}, PermissionType), additionalPermissions));
        return unionPermissionType;
    }
};
