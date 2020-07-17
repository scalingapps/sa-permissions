export interface IPermissions {
    hasPermission(permissionType: number, userPermissions: number): boolean
}

export class Permissions implements IPermissions {
    public hasPermission(permissionType: number, userPermissions: number): boolean {
        return (permissionType === (userPermissions & permissionType))
    }
}

export const permissions: IPermissions = new Permissions()
