
import { ISecurity } from './ISecurity'

export interface ISecurityDomain {
}

export class SecurityDomainBase implements ISecurityDomain {
    security!: ISecurity
    constructor(security: ISecurity) {
        this.security = security
    }
}