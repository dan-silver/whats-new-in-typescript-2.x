// string | number
var modifyPerson = function (user, property, value) {
    user[property] = value;
};
var dan = {
    name: "Dan Silver",
    age: 150,
    location: "Seattle, Washington"
};
modifyPerson(dan, "location", "Europe");
//# sourceMappingURL=7-keyof.js.map