/**
 * @name IPermissionDomains
 * @description
 * Groups different domains (i.e. Account, Items, etc)
 */
export interface IPermissionDomains {
    readonly Account: string;
    readonly Items: string;
}
/**
 * @name PermissionDomains
 * @description
 * Constants to avoid hard-coded strings
 */
export declare const PermissionDomains: IPermissionDomains;
