"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timers_1 = require("timers");
class Duration {
    constructor(name) {
        this.name = name;
    }
    timeOut() {
        return new Promise((resolve) => {
            timers_1.setTimeout(() => {
                console.log(this.name);
                resolve(this.name);
            }, 1000);
        });
    }
}
exports.Duration = Duration;
