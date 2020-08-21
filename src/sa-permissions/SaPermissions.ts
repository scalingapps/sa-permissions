import { PermissionTypeInterface, PermissionType } from './PermissionType'

/**
 * @name SaPermissionsStaticInterface
 * @description
 * TypeScript trick to declare methods for static classes through interface
 */
export interface SaPermissionsStaticInterface {
  hasPermission(permissionType: number, userPermissions: number): boolean
  extendTypes(newTypes: string[]): PermissionTypeInterface
}

export interface SaPermissionsInterface {}

/**
 * @name SaPermissions
 * @description
 * Export our static SaPermissions instance
 */
export const SaPermissions: SaPermissionsStaticInterface = class implements SaPermissionsInterface {
  public static hasPermission(permissionType: number, userPermissions: number): boolean {
    return permissionType === (userPermissions & permissionType)
  }

  /**
   * @name extendTypes
   * @description
   * Extends PermissionTypeInterface with additional properties with the correct values
   */
  public static extendTypes(newTypes: string[]): PermissionTypeInterface {
    // create an empty dictionary where to add additional custom permissions
    const additionalPermissions: { [key: string]: number } = {}

    let factor = Object.keys(PermissionType).length - 1
    // assign values to each new permission type
    newTypes.forEach((type) => [
      // double previous value
      (additionalPermissions[type] = Math.pow(2, factor++)),
    ])

    // create union of both current PermissionType and the additionalPermissions
    const unionPermissionType: PermissionTypeInterface = Object.freeze({
      ...PermissionType,
      ...additionalPermissions,
    } as PermissionTypeInterface)

    return unionPermissionType
  }
}
