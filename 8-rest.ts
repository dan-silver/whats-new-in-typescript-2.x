// jQuery.extend, Object.assign, etc.


// Object Spread and Rest

// TypeScript 2.1 brings support for ES2017 Spread and Rest.



type BrowserPreference = "Chrome" | "FireFox" | "Edge";

let companySetting = {
    BrowserPreference: "Chrome",
    ThemeColor: "Blue"
}

let machineSetting = {
    BrowserPreference: "Edge"
}

let userSetting = {
    BrowserPreference: "FireFox"
}


let resultSettings = { ...companySetting, ...machineSetting, ...userSetting };

console.log(resultSettings);

// look at resulting .js, uses Object.assign if exists (sugar)



// let's add more settings!

let moreSettings = {...resultSettings, MenuPosition: "top", TimeMode: "24h"};

console.log(moreSettings);




// Destructuring
let obj = { x: 1, y: 2, z: 3 };
let { z, ...obj1 } = obj;

console.log(obj1);