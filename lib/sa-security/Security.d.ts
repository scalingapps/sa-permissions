export interface HasPermissionsArgs {
    id: string;
    domain: string;
    permissionType: number;
}
export interface PermissionsInfo {
    id: string;
    permissions: {
        [key: string]: number;
    };
}
export interface SecurityInterface {
    addPermissionsInfo(params: PermissionsInfo): void;
    hasPermissions(params: HasPermissionsArgs): boolean;
}
/**
 * @name Security
 * @description
 * Implements the SecurityInterface. This will hold a lookup to each user permissions by domain.
 * The data has to be added through the addPermissionsInfo after the user logs in your app.
 * You can then use the hasPermissions method to check if a user has a specific permission on a specific domain.
 */
export declare class Security implements SecurityInterface {
    private dataMap;
    constructor();
    addPermissionsInfo(params: PermissionsInfo): void;
    hasPermissions(params: HasPermissionsArgs): boolean;
}
