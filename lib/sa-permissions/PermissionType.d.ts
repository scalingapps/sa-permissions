/**
 * @name PermissionTypeInterface
 * @description
 * Permission Types interface
 */
export interface PermissionTypeInterface {
    readonly None: number;
    readonly View: number;
    readonly Add: number;
    readonly Update: number;
    readonly Delete: number;
}
/**
 * @name PermissionType
 * @description
 * Permission Types constants. This contains the basic None, View, Add, Update, and Delete.
 * You can then extend this by creating a new interface (i.e. YourAppPermissionTypeInterface)
 * and extending its istance with Permissions.extendTypes (see yourapp/YourAppPermissionType.ts for sample code)
 */
export declare const PermissionType: PermissionTypeInterface;
