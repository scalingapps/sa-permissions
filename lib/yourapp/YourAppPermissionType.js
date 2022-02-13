import { Permissions } from '../sa-permissions';
/**
 * @name YourAppPermissionType
 * @description
 * You will extend the current PermissionType instance as well.
 * We have to pass an array with the name of the new definitions because in
 * TS there is not an easy way to programmatically get properties from an interface.
 * Just remember that these have ot match the property names in your interface (in this case Publish and Share)
 */
export const YourAppPermissionType = Permissions.extendTypes([
    'Publish',
    'Share',
]);
