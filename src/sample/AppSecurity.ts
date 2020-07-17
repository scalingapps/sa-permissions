import {
	ISecurity,
	ISecurityHasPermissionsArgs
} from '../security'

import {
    ItemsDomain
} from './domains'

export interface IAppSecurity extends ISecurity {
    Items: ItemsDomain
}

/**
 * @name AppSecurity
 * @description 
 * Implements IAppSecurity
 * @remarks
 */
export class AppSecurity implements IAppSecurity {

    constructor() {
        this.Items = new ItemsDomain(this)
    }

    hasPermissions(args: ISecurityHasPermissionsArgs): boolean {
        // TODO: check if they have permissions
        return true
    }

    Items!: ItemsDomain
}

export const appSecurity: AppSecurity = new AppSecurity()
