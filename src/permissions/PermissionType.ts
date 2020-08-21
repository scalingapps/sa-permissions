/**
 * @name PermissionTypeInterface
 * @description 
 * Permission Types interface
 */
export interface PermissionTypeInterface {
	readonly None: number
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
export const PermissionType: PermissionTypeInterface = Object.freeze({
	None: 0,
	View: 1,
	Add: 2,
	Update: 4,
	Delete: 8
})
