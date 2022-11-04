var button = document.querySelector("button");
var input1 = document.getElementById("first");
var input2 = document.getElementById("second");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
var age;
var name;
var toggle;
var empty;
var notInitialize;
var callback;
var anything;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
;
var person;
person = ['Max', 21];
var status;
(function (status) {
    status[status["LOADING"] = 0] = "LOADING";
    status[status["READY"] = 1] = "READY";
})(status || (status = {}));
;
var union;
var newParam;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
;
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
