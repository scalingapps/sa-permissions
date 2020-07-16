import { SecurityAreaBase } from './SecurityAreaBase'

export class SecurityItems extends SecurityAreaBase {
    get canView(): boolean {
        return true
    }
}
