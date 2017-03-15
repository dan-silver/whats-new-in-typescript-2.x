interface StringMap<T> {
    [x: string]: T;
}

const map: StringMap<number> = {};

map["prop1"] = 1;
map.prop2 = 2;


// change map type from number to animal 
// intellisense on property value
type animal = "cat" | "dog"