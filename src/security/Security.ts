import {
  SecurityDomainBase
} from './SecurityDomainBase'

export interface HasPermissionsArgs {
  domain: string
  permissionType: number
}

export interface SecurityInterface {
  hasPermissions(args: HasPermissionsArgs): boolean
}

/**
 * @name Security
 * @description 
 * Implements SecurityInterface
 * @remarks
 */
export class Security implements SecurityInterface {
  private domains: Map<string, SecurityDomainBase> = new Map<string, SecurityDomainBase>();

  constructor() {
    //this.Items = new ItemsDomain(this)
  }

  hasPermissions(args: HasPermissionsArgs): boolean {
    // TODO: check if they have permissions
    return true
  }
}