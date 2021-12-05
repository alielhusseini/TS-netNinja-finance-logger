import { HasFormatter  } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter { // implements is the : in C#
    constructor(
        readonly client : string,
        private details : string,
        public amount : number
    ) {}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
};