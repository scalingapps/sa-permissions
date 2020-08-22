import { PermissionTypeInterface } from './PermissionType';
/**
 * @name PermissionsBuilderInterface
 * @description
 */
export interface PermissionsBuilderInterface {
    fromKeys(keys: string[]): number;
    byExclusion(keysToExclude: string[]): number;
    fromRange(fromValue: number, toValue: number): number;
}
/**
 * @name PermissionsBuilder
 * @description
 * Implements PermissionsBuilderInterface helper functions
 * that can build permissions values from specific keys,
 * from a range of values, or by exluding specific keys
 */
export declare class PermissionsBuilder implements PermissionsBuilderInterface {
    private types;
    constructor(types: PermissionTypeInterface);
    fromKeys(keys: string[]): number;
    byExclusion(keysToExclude: string[]): number;
    fromRange(fromValue: number, toValue: number): number;
}
