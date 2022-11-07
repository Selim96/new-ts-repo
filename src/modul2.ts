// const button = document.querySelector("button")!;
// const input1 = document.getElementById("first")! as HTMLInputElement;
// const input2 = document.getElementById("second")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//     return num1 + num2;
// }

// button.addEventListener("click", function() {
//     console.log(add(+input1.value, +input2.value));
// });

// let age: number;
// let name: string;
// let toggle: boolean;
// let empty: null;
// let notInitialize: undefined;
// let callback: (a: number) => number;

// let anything: any;
// anything = 'Text';
// anything = {};

// let some: unknown;
// some = 'Text';

// let str: string
// if (typeof some === 'string') {
//   str = some;
// };

// let person: [string, number];
// person = ['Max', 21];

// enum Status { LOADING, READY };

// const page = {
//   load: Status.READY,
// }

// let union: string | number;

// let newParam: 'enable' | 'disable';

// function showMessage(message:string): void {
//   console.log(message);
// }


// function calc(num1:number, num2:number):number {
//   return num1 + num2;
// }

// function customError():never {
//   throw new Error('Error');
// };

// type PageType = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: 'open' | 'close';
//   details?: {
//     createAt: string;
//     updateAt: string;
//   }
// }

// const page1:PageType = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: '2021-01-01',
//     updateAt: '2021-05-01',
//   }
// }

// const page2:PageType = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }