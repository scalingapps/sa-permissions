/**
 * @name IPermissionGroups
 * @description 
 * Permission group interface
 */
export interface IPermissionGroups {
    readonly Account: string
	readonly Transaction: string
}

/**
 * @description
 * The type of the IPermissionGroups key
 */
export type IPermissionGroupsKeyType = keyof IPermissionGroups

/**
 * @name PermissionGroups
 * @description 
 * Permission groups constants
 */
export const PermissionGroups: IPermissionGroups = Object.freeze({
    Account: 'Account',
    Transaction: 'Transaction'
})
