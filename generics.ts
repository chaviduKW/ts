// const addUID = (obj:object) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }

const addUID = <T extends object>(obj:T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

const addUID2 = <T extends {name:string}>(obj:T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}
  
  let docOne = addUID({name: 'yoshi', age: 40});
  let docOne2 = addUID2({name: 'yoshi', age: 40});

  console.log(docOne.name);

  interface Resource<T>{
    uid:number;
    resourceName:string;
    data: T;
  }

  const docThree: Resource<string> ={
    uid:1,
    resourceName: 'person',
    data: 'shaun'
  }

  const docFour: Resource<string[]> ={
    uid:2,
    resourceName: 'shopping list',
    data: ['bread','milk']
  }