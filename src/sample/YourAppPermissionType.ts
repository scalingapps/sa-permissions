import {
	PermissionTypeInterface,
	PermissionType,
	Permissions
} from '../permissions'

/*
	In your application, you will be extending the PermissionTypeInterface with 
	additional custom permission types. You will create an interface that
	defines the new types, i.e. YourAppPermissionTypeInterface
	and then
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
export const YourAppPermissionType: YourAppPermissionTypeInterface = Permissions.extendTypes([
	'Publish',
	'Share'
]) as YourAppPermissionTypeInterface

// create an empty dictionary where to add additional custom permissions
// const additionalPermissions: { [key: string]: number } = {
// 	Publish: 0,
// 	Share: 0
// }
// // get highest value from current PermissionType
// const highestValue: number = Object.values(PermissionType).reduce((a: number, b: number) => a > b ? a : b)
// let factor = Object.keys(PermissionType).length-1
// //console.log('highestValue', highestValue, 'factor', factor)
// // double each new entry
// additionalPermissions.Publish = Math.pow(2, factor++)
// additionalPermissions.Share = Math.pow(2, factor++)

/**
 * @name YourAppPermissionType
 * @description 
 * Your app Permission Types constants
 */
// export const YourAppPermissionType: YourAppPermissionTypeInterface = Object.freeze({
// 	...PermissionType,
// 	...additionalPermissions
// } as YourAppPermissionTypeInterface)

//console.log('YourAppPermissionType', YourAppPermissionType)
