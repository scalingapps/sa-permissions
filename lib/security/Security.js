"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Security = void 0;
const permissions_1 = require("@/permissions");
/**
 * @name Security
 * @description
 * Implements the SecurityInterface. This will hold a lookup to each user permissions by domain.
 * The data has to be added through the addUserpermissions after the user logs in your app.
 * You can then use the hasPermissions method to check if a user has a specific permission on a specific domain.
 */
class Security {
    constructor() {
        this.permissionsByUser = new Map();
    }
    addUserPermissions(params) {
        this.permissionsByUser.set(params.userId, params.permissions);
    }
    hasPermissions(params) {
        const { userId, domain, permissionType } = params;
        // if our lookup contains data for this user
        if (this.permissionsByUser.has(userId)) {
            // get the user permissions for all domains
            const domainsPermissions = this.permissionsByUser.get(userId);
            // if has permissions on this domain
            if (domainsPermissions && domainsPermissions[domain]) {
                // check permissions for the specific domain
                const value = domainsPermissions[domain];
                return permissions_1.Permissions.hasPermission(permissionType, value);
            }
        }
        return false;
    }
}
exports.Security = Security;
//# sourceMappingURL=Security.js.map