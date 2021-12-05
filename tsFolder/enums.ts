enum ResourceType {
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON,
    HOBBIES
}

interface Resource<T> {
    uid : number;
    resourceType : ResourceType;
    data : T; 
}

const docOne : Resource<object> = {
    uid: 0,
    resourceType: ResourceType.PERSON,
    data: { name: 'ali', age: 25, email: 'el@el.com' }
}

const docTwo : Resource<string[]> = {
    uid: 1,
    resourceType: ResourceType.HOBBIES,
    data: ["nft", "blockchain", "development"]
}
