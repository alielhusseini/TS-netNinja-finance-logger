interface HasFormatter {
    format() : string
};

class Invoice implements HasFormatter { // implements is the : in C#
    constructor(
        readonly client : string,
        private details : string,
        public amount : number
    ) {}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
};

class Payment implements HasFormatter { // implements is the : in C#
    constructor(
        readonly recipient : string,
        private details : string,
        public amount : number
    ) {}

    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
};

// interfaces with classes: the classes are extending interface HasFormatter interface, that's why docOne & docTwo (type of HasFormatter) can = to the assigned classes (only that extends the HasFormatter interface)
let docOne : HasFormatter; // can be changed to the Invoice type which would be more specific
let docTwo : HasFormatter;

docOne = new Invoice('luigi', 'web work', 250);
docTwo = new Payment('mario', 'plumming work', 200);

let docs : HasFormatter[] = []; // only the objects which implement this interface can be pushed (several diff classes )
docs.push(docOne);
docs.push(docTwo);

// same concept just more precise where we need type of class Invoice where above we only cared to be on type interface HasFormatter
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices : Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo); 
