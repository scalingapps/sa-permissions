import { ISecurity } from '../ISecurity';
export interface ISecurityArea {
}
export declare class SecurityAreaBase implements ISecurityArea {
    security: ISecurity;
    constructor(security: ISecurity);
}
