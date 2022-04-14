"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classInterface = void 0;
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
class classInterface {
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
exports.classInterface = classInterface;
//# sourceMappingURL=classInterface.js.map