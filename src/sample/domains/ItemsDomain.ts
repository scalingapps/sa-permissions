import { 
	IAppPermissionType, 
	AppPermissionType 
} from '../AppPermissionType'
import { AppSecurityDomains } from '../AppSecurityDomains'
import { 
	SecurityDomainBase, 
	ISecurityHasPermissionsArgs 
} from '../../security'

export class ItemsDomain extends SecurityDomainBase {
	private getParams(permissionType: number): ISecurityHasPermissionsArgs {
		return {
			domain: AppSecurityDomains.Items, 
			permissionType: permissionType
		}
	}

    public get canView(): boolean {
        return this.security.hasPermissions(this.getParams(AppPermissionType.View))
    }
}
