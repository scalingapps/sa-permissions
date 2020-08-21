import { 
	YourAppPermissionTypeInterface, 
	YourAppPermissionType 
} from '../YourAppPermissionType'
import { AppSecurityDomains } from '../AppSecurityDomains'
import { 
	SecurityDomainBase, 
	HasPermissionsArgs 
} from '../../security'

export class ItemsDomain extends SecurityDomainBase {
	private getParams(permissionType: number): HasPermissionsArgs {
		return {
			domain: AppSecurityDomains.Items, 
			permissionType: permissionType
		}
	}

	public get canView(): boolean {
			return this.security.hasPermissions(this.getParams(YourAppPermissionType.View))
	}
}
