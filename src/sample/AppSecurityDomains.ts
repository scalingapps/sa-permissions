import {
  ISecurityDomains
} from '../security'

/**
 * @name IAppSecurityDomains
 * @description 
 * Groups different domains (i.e. Account, Items, etc)
 */
export interface IAppSecurityDomains extends ISecurityDomains {
  readonly Account: string
  readonly Items: string
}

/**
 * @name AppSecurityDomains
 * @description 
 * Constants to avoid hard-coded strings
 */
export const AppSecurityDomains: IAppSecurityDomains = Object.freeze({
    Account: 'Account',
    Items: 'Items'
})
