import { SecurityItems } from './areas/SecurityItems';
import { ISecurity, ISecurityHasPermissionsArgs } from './ISecurity';
/**
 * @name Security
 * @description
 * Implements ISecurity
 * @remarks
 */
export declare class Security implements ISecurity {
    constructor();
    hasPermissions(args: ISecurityHasPermissionsArgs): boolean;
    Items: SecurityItems;
}
