"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classInterfaceExtends = void 0;
const benz = {
    color: 'gray',
    wheels: 4,
    start() {
        console.log('go!');
    },
    door: 4,
    stop() {
        console.log('stop!');
    },
};
class classInterfaceExtends {
    constructor(c) {
        this.example = () => {
            console.log(benz);
        };
        this.color = c;
    }
    start() {
        console.log('go!');
    }
}
exports.classInterfaceExtends = classInterfaceExtends;
//# sourceMappingURL=classInterfaceExtends.js.map