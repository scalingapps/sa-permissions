import {
	IPermissionType,
	PermissionType
} from '../permissions'

/**
 * @name IAppPermissionType
 * @description 
 */
export interface IAppPermissionType extends IPermissionType {
	readonly Publish: number
}

const additionalPermissions = {
	Publish: 16
}

/**
 * @name AppPermissionType
 * @description 
 * App Permission Types constants
 */
export const AppPermissionType: IAppPermissionType = Object.freeze({
	...PermissionType,
	...additionalPermissions
})
