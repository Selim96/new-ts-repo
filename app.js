var button = document.querySelector("button");
var input1 = document.getElementById("first");
var input2 = document.getElementById("second");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});

var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));

var person = {
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('Role: ', Role.ADMIN);
}
