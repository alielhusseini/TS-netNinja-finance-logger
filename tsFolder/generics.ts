// function that takes any obj & returns the same obj with added id
const addUID = (obj : {}) => { // instead of {} we can type object
    const uid = Math.floor(Math.random() * 100)
    return { ...obj, uid }
}

let docOne = addUID({ name: 'ali', email: 'el@el.com', age: 25 })

// console.log(docOne.name) // the reason there's a problem here, is that the function addUID takes an obj & returns one without specifying a specific structure of it ---> when clg the obj's any property, it can return null since maybe this property doesn't exit on this obj 
// to combat it we need to use generics, by placing <T> which will capture what ever item you pass into the function (by capturing all of its properties (if it's an object)) ---> when we'll return it, its gonna know what properties are on that object

const addUIDGenerics = <T extends object>(obj : T) => { // instead of object we still could be more specific & type { car : string } which will make the function accept objs having the car property / { car : string, type : string, sporty : boolean } for more specificity
    const uid = Math.floor(Math.random() * 100)
    return { ...obj, uid }
}

let docTwo = addUIDGenerics({ car: 'mercedes', type: 'luxury', sporty: true })
console.log(docTwo.type)










// generics with interfaces
interface Resource<T> {
    uid : number;
    resourceType : string;
    data : T; // now we can have dateaas a string or number or array ... all depending on the T when sepcifying the object extending this interface
}

const docThree : Resource<object> = {
    uid: 0,
    resourceType: 'hello user',
    data: { name: 'ali', age: 25, email: 'el@el.com' }
}

const docFour : Resource<string[]> = {
    uid: 1,
    resourceType: 'user\'s hobbies',
    data: ["nft", "blockchain", "development"]
}

