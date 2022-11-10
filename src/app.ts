// function myDecorator(target: Function) {
//     const newConstructor: Function = function (name: string) {
//         this.name = "Hello, " + name;
//     }
//     return newConstructor;
// }

function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor.prototype);
  };
}

@Logger('decorator')
class Class {
    private owner: string = "";
    constructor(public name: string, public age: number) {
        this.name;
        this.age;
    };

    setOwner() {
        this.owner = this.name + "," + this.age.toString();
        
    };

    showOwner() {
        console.log(this.owner);
    }
}

const selim = new Class('Selim', 28);

console.log(selim)