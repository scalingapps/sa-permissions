import { Permissions } from '@/permissions'

export interface HasPermissionsArgs {
  userId: string
  domain: string
  permissionType: number
}

export interface SecurityInterface {
  addUserPermissions(params: { userId: string; permissions: { [key: string]: number } }): void
  hasPermissions(params: HasPermissionsArgs): boolean
}

/**
 * @name Security
 * @description
 * Implements the SecurityInterface. This will hold a lookup to each user permissions by domain.
 * The data has to be added through the addUserpermissions after the user logs in your app.
 * You can then use the hasPermissions method to check if a user has a specific permission on a specific domain.
 */
export class Security implements SecurityInterface {
  private permissionsByUser: Map<string, { [key: string]: number }> = new Map<
    string,
    { [key: string]: number }
  >()

  constructor() {}

  addUserPermissions(params: { userId: string; permissions: { [key: string]: number } }) {
    this.permissionsByUser.set(params.userId, params.permissions)
  }

  hasPermissions(params: HasPermissionsArgs): boolean {
    const { userId, domain, permissionType } = params

    // if our lookup contains data for this user
    if (this.permissionsByUser.has(userId)) {
      // get the user permissions for all domains
      const domainsPermissions = this.permissionsByUser.get(userId)
      // if has permissions on this domain
      if (domainsPermissions && domainsPermissions[domain]) {
        // check permissions for the specific domain
        const value: number = domainsPermissions[domain]
        return Permissions.hasPermission(permissionType, value)
      }
    }

    return false
  }
}
