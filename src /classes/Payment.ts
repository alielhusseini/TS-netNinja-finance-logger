import { HasFormatter  } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter { // implements is the : in C#
    constructor(
        readonly recipient : string,
        private details : string,
        public amount : number
    ) {}

    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
};