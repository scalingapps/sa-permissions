import { PermissionTypeInterface } from './PermissionType';
/**
 * @name PermissionsStaticInterface
 * @description
 * TypeScript trick to declare methods for static classes through interface
 */
export interface PermissionsStaticInterface {
    hasPermission(permissionType: number, userPermissions: number): boolean;
    extendTypes(newTypes: string[]): PermissionTypeInterface;
}
export interface PermissionsInterface {
}
/**
 * @name PermissionsStaticInterface
 * @description
 * Export our static Permissions instance
 */
export declare const Permissions: PermissionsStaticInterface;
