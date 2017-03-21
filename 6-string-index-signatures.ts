interface StringMap<T> {
    [x: string]: T;
}

const map: StringMap<number> = {
    // age: 50
};

map["prop1"] = 1;
map.prop2 = 2;


// change map type from number to animal 
// intellisense on property value
type animal = "cat" | "dog"