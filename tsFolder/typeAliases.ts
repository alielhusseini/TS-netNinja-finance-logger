// example: sometimes we type the same param over n over again, imagine we have an id parameter which is string | number, & we would type that for every function that takes id ---> anyFunction(id: number | string) {}
// this means we're typing the same code over n over again, & the way around it is by creating something called type aliases

type StrOrNum = string | number;

const anyFunction = (id : StrOrNum) : void => {};
let userObj : { id: StrOrNum, username: string, age: number };

// for example we have the userObj quite frequently used ---> we can also turn it into a type
type UserObj = { username : string, age : number, id : StrOrNum }
const anyOtherFunction = (userObj : UserObj) : void => { console.log(`username: ${userObj.username} / age: ${userObj.age}`) }