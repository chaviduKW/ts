let greet: Function;

greet =()=>{
    console.log('hello, world');
}

const add =(a:number, b:number,c?:number|string) =>{
    console.log(a+b);
}

const subtract =(a:number, b:number,c:number|string=10) =>{
    console.log(a-b);
}

add(5,10)
subtract(10,4)
subtract(10,4,90)