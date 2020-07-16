/**
 * @name IPermissionGroups
 * @description
 * Permission group interface
 */
export interface IPermissionGroups {
    readonly Account: string;
    readonly Transaction: string;
}
/**
 * @description
 * The type of the IPermissionGroups key
 */
export declare type IPermissionGroupsKeyType = keyof IPermissionGroups;
/**
 * @name PermissionGroups
 * @description
 * Permission groups constants
 */
export declare const PermissionGroups: IPermissionGroups;
