import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('.item-list'); // or document.querySelector('.item-list')!
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc; // this is an object that implements this interface
    if (type.value === 'invoice')
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    else
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, 'end');
    form.reset();
});
