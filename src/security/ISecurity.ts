import {
    SecurityItems
} from './areas/SecurityITems'

export interface ISecurityHasPermissionsArgs {

}

export interface ISecurity {
    hasPermissions(args: ISecurityHasPermissionsArgs): boolean

    Items: SecurityItems
}
