enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

interface Resource<T> {
    uid: number;
    resourceName: ResourceType;
    data: T;
}

const docThree: Resource<string> ={
    uid:1,
    resourceName: ResourceType.PERSON,
    data: 'shaun'
  }

  const docFour: Resource<object> ={
    uid:2,
    resourceName: ResourceType.BOOK,
    data: {title:'the wind'}
  }