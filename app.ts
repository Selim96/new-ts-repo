const button = document.querySelector("button");
const input1 = document.getElementById("first")! as HTMLInputElement;
const input2 = document.getElementById("second")! as HTMLInputElement;

function add(num1: number, num2: number) {
    return num1 + num2;
}

button.addEventListener("click", function() {
    console.log(add(+input1.value, +input2.value));
});

enum Role {ADMIN, USER};

const person = {
  role: Role.ADMIN,
}

if (person.role === Role.ADMIN) {
  console.log('Role: ', Role.ADMIN);
}