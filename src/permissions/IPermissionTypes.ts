/**
 * @name IPermissionTypes
 * @description 
 * Permission Types interface
 */
export interface IPermissionTypes {
	readonly Reserved: number
	readonly View: number
	readonly Add: number
	readonly Update: number
	readonly Delete: number
}

/**
 * @description
 * Type of IPermissionTypes key
 */
export type IPermissionTypesKeyType = keyof IPermissionTypes


/**
 * @name PermissionTypes
 * @description 
 * Permission Types constants
 */
export const PermissionTypes: IPermissionTypes = Object.freeze({
	Reserved: 0,
	View: 1,
	Add: 2,
	Update: 4,
	Delete: 8
})
