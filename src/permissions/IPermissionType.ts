/**
 * @name IPermissionType
 * @description 
 * Permission Types interface
 */
export interface IPermissionType {
	readonly Reserved: number
	readonly View: number
	readonly Add: number
	readonly Update: number
	readonly Delete: number
}

/**
 * @name PermissionType
 * @description 
 * Permission Types constants
 */
export const PermissionType: IPermissionType = Object.freeze({
	Reserved: 0,
	View: 1,
	Add: 2,
	Update: 4,
	Delete: 8
})
