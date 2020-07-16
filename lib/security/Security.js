"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Security = void 0;
const SecurityItems_1 = require("./areas/SecurityItems");
/**
 * @name Security
 * @description
 * Implements ISecurity
 * @remarks
 */
class Security {
    constructor() {
        this.Items = new SecurityItems_1.SecurityItems(this);
    }
    hasPermissions(args) {
        // TODO: check if they have permissions
        return true;
    }
}
exports.Security = Security;
//# sourceMappingURL=Security.js.map