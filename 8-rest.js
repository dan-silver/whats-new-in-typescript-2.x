// jQuery.extend, Object.assign, etc.
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var companySetting = {
    BrowserPreference: "Chrome",
    ThemeColor: "Blue"
};
var machineSetting = {
    BrowserPreference: "Edge"
};
var userSetting = {
    BrowserPreference: "FireFox"
};
var resultSettings = __assign({}, companySetting, machineSetting, userSetting);
console.log(resultSettings);
// look at resulting .js, uses Object.assign if exists (sugar)
// let's add more settings!
var moreSettings = __assign({}, resultSettings, { MenuPosition: "top", TimeMode: "24h" });
console.log(moreSettings);
// Destructuring
var obj = { x: 1, y: 2, z: 3 };
var z = obj.z, obj1 = __rest(obj, ["z"]);
console.log(obj1);
//# sourceMappingURL=8-rest.js.map