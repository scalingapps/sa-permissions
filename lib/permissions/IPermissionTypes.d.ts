/**
 * @name IPermissionTypes
 * @description
 * Permission Types interface
 */
export interface IPermissionTypes {
    readonly Reserved: number;
    readonly View: number;
    readonly Add: number;
    readonly Update: number;
    readonly Delete: number;
}
/**
 * @description
 * Type of IPermissionTypes key
 */
export declare type IPermissionTypesKeyType = keyof IPermissionTypes;
/**
 * @name PermissionTypes
 * @description
 * Permission Types constants
 */
export declare const PermissionTypes: IPermissionTypes;
