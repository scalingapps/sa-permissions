import { PermissionTypeInterface, PermissionType, SaPermissions } from '../sa-permissions'

/*
	In your application, you will be extending the PermissionTypeInterface with 
	additional custom permission types. You will create an interface that
	defines the new types, i.e. YourAppPermissionTypeInterface
	as in the code below
*/

/**
 * @name YourAppPermissionTypeInterface
 * @description
 * You will extend the PermissionTypeInterface with additional definitions
 */
export interface YourAppPermissionTypeInterface extends PermissionTypeInterface {
  readonly Publish: number
  readonly Share: number
}

/**
 * @name YourAppPermissionType
 * @description
 * You will extend the current PermissionType instance as well.
 * We have to pass an array with the name of the new definitions because in
 * TS there is not an easy way to programmatically get properties from an interface.
 * Just remember that these have ot match the property names in your interface (in this case Publish and Share)
 */
export const YourAppPermissionType: YourAppPermissionTypeInterface = SaPermissions.extendTypes([
  'Publish',
  'Share',
]) as YourAppPermissionTypeInterface
