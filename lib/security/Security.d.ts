export interface HasPermissionsArgs {
    userId: string;
    domain: string;
    permissionType: number;
}
export interface SecurityInterface {
    addUserPermissions(params: {
        userId: string;
        permissions: {
            [key: string]: number;
        };
    }): void;
    hasPermissions(params: HasPermissionsArgs): boolean;
}
/**
 * @name Security
 * @description
 * Implements the SecurityInterface. This will hold a lookup to each user permissions by domain.
 * The data has to be added through the addUserpermissions after the user logs in your app.
 * You can then use the hasPermissions method to check if a user has a specific permission on a specific domain.
 */
export declare class Security implements SecurityInterface {
    private permissionsByUser;
    constructor();
    addUserPermissions(params: {
        userId: string;
        permissions: {
            [key: string]: number;
        };
    }): void;
    hasPermissions(params: HasPermissionsArgs): boolean;
}
