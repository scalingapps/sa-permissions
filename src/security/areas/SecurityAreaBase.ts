
import { ISecurity } from '../ISecurity'

export interface ISecurityArea {
}

export class SecurityAreaBase implements ISecurityArea {
    security!: ISecurity
    constructor(security: ISecurity) {
        this.security = security
    }
}