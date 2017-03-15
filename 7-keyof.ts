interface Person {
    name: string;
    age: number;
    location: string;
}


// hover over keys
type PersonProperties = keyof Person;
// "name" | "age" | "location"


type PersonValueTypes = Person[PersonProperties]
// string | number


let modifyPerson = (user:Person, property: PersonProperties, value:PersonValueTypes) => {
    user[property] = value;
}

let dan:Person = {
    name: "Dan Silver",
    age: 150,
    location: "Seattle, Washington"
}

modifyPerson(dan, "location", "Europe");