// here if we hover over 'anchor' it will automatically give us a type of HTMLAnchorElement
const anchor = document.querySelector('a')!; // this means we are definite about having value and return != null ---> we can access its diff properties by . without giving us a warning on compile type
// console.log(anchor?.href) // this was another way around of !
// console.log(anchor.href)

// here since we are passing not an html tag but a class, when we hover over 'form' it will give us type of Element since it doesn't know what element it is by just giving it a class as a ref
// therefore we can cast it to be of a specific type (when we cast we don't then use the ! since when casting it means we are sure it is of a certain type that it's casted to)
const form = document.querySelector('.new-item-form') as HTMLFormElement // now it is stored as HTMLFormElement & not simply Element
// console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e : Event) => {
    e.preventDefault()

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    )

    form.reset()
})