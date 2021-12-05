import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter";
import { ListTemplate } from "./classes/ListTemplate.js"; 

const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const ul = document.querySelector('.item-list') as HTMLUListElement; // or document.querySelector('.item-list')!
const list = new ListTemplate(ul);

form.addEventListener('submit', (e : Event) => {
    e.preventDefault()
    let doc : HasFormatter; // this is an object that implements this interface
    
    // if we did the spread operator without assigning it as a tuple, it would throw an error since when spreading there is no specific order of the element types whereas with the params inside the classes each contructor has a specific type ---> order is important, therefore we create a tuple
    let values : [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber]

    if (type.value === 'invoice') doc = new Invoice(...values)
    else doc = new Payment(...values)
    
    list.render(doc, type.value , 'end')

    form.reset()
})