import {
    SecurityItems
} from './areas/SecurityItems'
import { 
	ISecurity, 
	ISecurityHasPermissionsArgs 
} from './ISecurity'

/**
 * @name Security
 * @description 
 * Implements ISecurity
 * @remarks
 */
export class Security implements ISecurity {

    constructor() {
        this.Items = new SecurityItems(this)
    }

    hasPermissions(args: ISecurityHasPermissionsArgs): boolean {
        // TODO: check if they have permissions
        return true
    }

    Items!: SecurityItems
}
