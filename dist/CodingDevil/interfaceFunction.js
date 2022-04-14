"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interfaceFunction = void 0;
const add = function (x, y) {
    return x + y;
};
const a = (age) => {
    return age > 19;
};
class interfaceFunction {
    constructor() {
        console.log(add(10, 20));
        console.log(a(30));
    }
}
exports.interfaceFunction = interfaceFunction;
//# sourceMappingURL=interfaceFunction.js.map