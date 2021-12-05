// if we have multiple obj of same structures, we can simply make an interface of a needed structure to follow (interface defies how an obj should look)
interface isPerson {
    name : string;
    age : number;
    speak(a : string) : void;
    spend(a : number) : number;
};

const me : isPerson = {
    name: "ali",
    age: 25,
    speak: function (text : string) : void {
        console.log(text)
    },
    spend: (amount : number) : number => {
        console.log('I spent ', amount)
        return amount
    }
};

let someone : isPerson;

const greetPerson = (person : isPerson) : void => {
    console.log('hello ', person.name)
};

greetPerson(me);