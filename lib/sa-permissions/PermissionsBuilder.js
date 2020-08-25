"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsBuilder = void 0;
/**
 * @name PermissionsBuilder
 * @description
 * Implements PermissionsBuilderInterface helper functions
 * that can build permissions values from specific keys,
 * from a range of values, or by exluding specific keys
 */
class PermissionsBuilder {
    constructor(types) {
        this.types = types;
    }
    fromKeys(keys) {
        const types = this.types;
        let permissions = 0;
        keys.forEach((key) => {
            const value = this.types[key];
            const updated = permissions | value;
            permissions = updated;
        });
        return permissions;
    }
    byExclusion(keysToExclude) {
        const types = this.types;
        const keys = Object.getOwnPropertyNames(this.types).filter((key) => keysToExclude.indexOf(key) === -1);
        return this.fromKeys(keys);
    }
    fromRange(fromValue, toValue) {
        const types = this.types;
        const keys = Object.getOwnPropertyNames(this.types);
        let permissions = 0;
        keys.forEach((key) => {
            const value = this.types[key];
            if (value >= fromValue && value <= toValue) {
                const updated = permissions | value;
                permissions = updated;
            }
        });
        return permissions;
    }
}
exports.PermissionsBuilder = PermissionsBuilder;
