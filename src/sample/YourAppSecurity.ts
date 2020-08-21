import {
	SecurityInterface,
	Security,
	HasPermissionsArgs
} from '../security'

import {
  ItemsDomain
} from './domains'


const yourAppSecurity = new Security()
yourAppSecurity.addDomain(new ItemsDomain(yourAppSecurity))

// export interface IAppSecurity extends SecurityInterface {
//   Items: ItemsDomain
// }

// /**
//  * @name AppSecurity
//  * @description 
//  * Implements IAppSecurity
//  * @remarks
//  */
// export class AppSecurity implements IAppSecurity {

//   constructor() {
//     this.Items = new ItemsDomain(this)
//   }

//   hasPermissions(args: HasPermissionsArgs): boolean {
//     // TODO: check if they have permissions
//     return true
//   }

//   Items!: ItemsDomain
// }

// export const appSecurity: AppSecurity = new AppSecurity()
