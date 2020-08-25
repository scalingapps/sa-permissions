import { PermissionTypeInterface, PermissionType } from './PermissionType'

/**
 * @name PermissionsStaticInterface
 * @description
 * TypeScript trick to declare methods for static classes through interface
 */
export interface PermissionsStaticInterface {
  hasPermission(permissionType: number, permissions: number): boolean
  extendTypes(names: string[]): PermissionTypeInterface
}

export interface PermissionsInterface {}

/**
 * @name Permissions
 * @description
 * Export our static Permissions instance
 */
export const Permissions: PermissionsStaticInterface = class implements PermissionsInterface {
  public static hasPermission(permissionType: number, permissions: number): boolean {
    return permissionType === (permissions & permissionType)
  }

  /**
   * @name extendTypes
   * @description
   * Extends PermissionTypeInterface with additional properties with the correct values
   * @param names The names of the new permission types to add
   */
  public static extendTypes(names: string[]): PermissionTypeInterface {
    // create an empty dictionary where to add additional custom permissions
    const additionalPermissions: { [key: string]: number } = {}

    let factor = Object.keys(PermissionType).length - 1
    // assign values to each new permission type
    names.forEach((name) => [
      // double previous value
      (additionalPermissions[name] = Math.pow(2, factor++)),
    ])

    // create union of both current PermissionType and the additionalPermissions
    const unionPermissionType: PermissionTypeInterface = Object.freeze({
      ...PermissionType,
      ...additionalPermissions,
    } as PermissionTypeInterface)

    return unionPermissionType
  }
}
