"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Security = void 0;
const Permissions_1 = require("../sa-permissions/Permissions");
/**
 * @name Security
 * @description
 * Implements the SecurityInterface. This will hold a lookup to each user permissions by domain.
 * The data has to be added through the addPermissionsInfo after the user logs in your app.
 * You can then use the hasPermissions method to check if a user has a specific permission on a specific domain.
 */
class Security {
    constructor() {
        this.dataMap = new Map();
    }
    addPermissionsInfo(params) {
        this.dataMap.set(params.id, params.permissions);
    }
    hasPermissions(params) {
        const { id, domain, permissionType } = params;
        // if our lookup contains data for this user
        if (this.dataMap.has(id)) {
            // get the user permissions for all domains
            const domainsPermissions = this.dataMap.get(id);
            // if has permissions on this domain
            if (domainsPermissions && domainsPermissions[domain]) {
                // check permissions for the specific domain
                const value = domainsPermissions[domain];
                return Permissions_1.Permissions.hasPermission(permissionType, value);
            }
        }
        return false;
    }
}
exports.Security = Security;
