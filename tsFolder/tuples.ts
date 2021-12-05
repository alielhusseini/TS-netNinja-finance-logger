// same as arr but the types of data in each position in a tuple is fixed once it's initialized
let arr = ['ryu', 0, true];
arr[0] = false;

let tup : [string, number, boolean] = ['ryu', 0, true]; // you write what type are you excepting in each position 
tup[0] = 'false';