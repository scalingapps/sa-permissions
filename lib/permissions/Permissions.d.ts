export interface IPermissions {
    hasPermission(permissionType: number, userPermissions: number): boolean;
}
export declare class Permissions implements IPermissions {
    hasPermission(permissionType: number, userPermissions: number): boolean;
}
export declare const permissions: IPermissions;
