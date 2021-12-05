let username: string;
let age: number;
let isFalsy: boolean;
let mixedArr: (string|number)[] = [];
let mixedObj: { name: string, age: number, collectibles: any[] };

// here we are creating interfaces to use them as types for the params & returns for the functions
interface CalcAreaOrVolumeFunc {
    (width : number, length : number, height? : number) : number | string
};
interface CalcCircum { (diameter : number) : number };

let calcCircum : CalcCircum = (diameter) => diameter * Math.PI;
let calcAreaOrVolume : CalcAreaOrVolumeFunc = (width, length, height) => { // here the height parameter is optional
    if (height) return width * length * height
    else if (height === 0) return `no volume for this shape, only an area of ${width * length} unitSqr`
    else return width * length
};

// we can also create function without actually declaring it as a type Function
const calcSum = (a : number, b? : number) : number => {
    if (b) return a + b
    return a
};
const calcSub = (a: number, b : number = 0) : number => a - b; // here we gave b default value of zero, we shouldn't assign it as b? : number anymore since it can't be undefined

// now we can write the function calcAreaOrVolume as:
let calcAreaOrVolume2 = (width : number, length : number, height : number = 1) : number | string => {
    if (height === 0) return `no volume for this shape, only an area of ${width * length} unitSqr`
    return width * length * height
}

let noReturnFunc = (anyParamType: number | string ) : void => console.log('nothing to return')