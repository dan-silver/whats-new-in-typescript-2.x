// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}



// function logger(message: string): never {
//     console.log("foo")
// }



// what about infinite loops?


// let x = mainLoop();
// x.