// *** start in 0-intro

function foo(x: string | number | boolean) {
    if (typeof x === "string") {
        x; // type of x is string here
        x = 1;
        x; // type of x is number here
    }
    return x; // type of x is number | boolean here
}

function bar(x: string | number) {
    if (typeof x === "number") {
        return;
    }
    x; // type of x is string here
}


// setup debugger
// show launch.json

// what is type of result?
let result = foo("");
