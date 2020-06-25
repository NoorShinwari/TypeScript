class Car {
  drive() {
    console.log('driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Cargo loading...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();

const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(5);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 50 });

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
};
