function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: any) {
//     console.log("Rendering WithTemplete");
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }

function WithTemplate(templete: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = templete;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("Hi There Logger!")
@WithTemplate1("<h1>My Person Object</h1>", "app")
class Person1 {
  name = "Noor";

  constructor() {
    console.log("Creating person object...");
  }
}

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const pers = new Person1();
console.log(pers);

function WithTemplate1(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    constructor: T
  ) {
    return class extends constructor {
      constructor(..._: any[]) {
        super();

        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

class Printer {
  message = "This works";
  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

const button2 = document.querySelector("button");
button2!.addEventListener("click", p.showMessage);
