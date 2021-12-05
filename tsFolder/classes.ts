class Invoice {
    // 1:
    // readonly client : string; // read inside & outside the class (no mutations)
    // private details : string; // read & mutate inside the class
    // public amount : number; // (default) read & mutate inside & outside the class

    // constructor(c : string, d : string, a : number) {
    //     this.client = c;
    //     this.amount = a;
    //     this.details = d;
    // }

    // 2:
    constructor( // in this structure we do need to assign the property of the constructor
        readonly client : string,
        private details : string,
        public amount : number
    ) {}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
};

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices : Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo); 

invoices.forEach(inv => {
    console.log(inv.client, /* inv.details, */ inv.amount, inv.format())
})