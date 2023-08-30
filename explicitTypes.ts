let character: string;
let age : number;
let isLoggedIn:boolean;

age = 30;
isLoggedIn=false;

//arrays
let people: string[]=[];
people =['man1','man2'];
people.push('man3');

//union types
let mixed: (string|number|boolean)[] =[];
mixed.push('hello');
mixed.push(20);
mixed.push(false)

let uid: string|number;
uid = 'dfs';
uid = 123

//objects
let ninjaOne: object;
ninjaOne = {name:'yoshi', age:30};

let ninjaTwo: {
    name:string,
    age:number,
    beltColour:string
}

ninjaTwo={
    name:'matio',
    age:40,
    beltColour:'black'
}

//any type

let agee:any = 25;
let mixedd: any[] =[]
let ninja: { name:any , age:any}