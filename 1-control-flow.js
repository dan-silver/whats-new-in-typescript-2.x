// *** start in 0-intro
function foo(x) {
    if (typeof x === "string") {
        x; // type of x is string here
        x = 1;
        x; // type of x is number here
    }
    x; // type of x is number | boolean here
}
function bar(x) {
    if (typeof x === "number") {
        return;
    }
    x; // type of x is string here
}
//# sourceMappingURL=1-control-flow.js.map