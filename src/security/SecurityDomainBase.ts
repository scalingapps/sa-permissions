
import { SecurityInterface } from './Security'

export interface SecurityDomainInterface {
}

export class SecurityDomainBase implements SecurityDomainInterface {
    security!: SecurityInterface
    constructor(security: SecurityInterface) {
        this.security = security
    }
}