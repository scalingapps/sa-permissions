import { PermissionTypeInterface } from './PermissionType';
/**
 * @name PermissionsStaticInterface
 * @description
 * TypeScript trick to declare methods for static classes through interface
 */
export interface PermissionsStaticInterface {
    hasPermission(permissionType: number, permissions: number): boolean;
    extendTypes(names: string[]): PermissionTypeInterface;
}
export interface PermissionsInterface {
}
/**
 * @name Permissions
 * @description
 * Export our static Permissions instance
 */
export declare const Permissions: PermissionsStaticInterface;
