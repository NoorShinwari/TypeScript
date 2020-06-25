interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user2: Greetable;

user2 = new Person('Max');

user2.greet('Hi there - I am');
console.log(user2);

type AddFn = (a: number, b: number) => number;

interface AddFn2 {
  (a: number, b: number): number;
}

interface AddFn3 {
  (a: number, b: number): number;
}

let add1: AddFn;

let add2: AddFn2;

let add3: AddFn3;
