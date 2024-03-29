/**
 * @name PermissionType
 * @description
 * Permission Types constants. This contains the basic None, View, Add, Update, and Delete.
 * You can then extend this by creating a new interface (i.e. YourAppPermissionTypeInterface)
 * and extending its istance with Permissions.extendTypes (see yourapp/YourAppPermissionType.ts for sample code)
 */
export const PermissionType = Object.freeze({
    View: 1,
    Add: 2,
    Update: 4,
    Delete: 8,
});
