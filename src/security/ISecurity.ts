export interface ISecurityHasPermissionsArgs {
	domain: string
	permissionType: number
}

export interface ISecurity {
    hasPermissions(args: ISecurityHasPermissionsArgs): boolean
}
