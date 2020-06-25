function merge<A extends object, B extends object>(objA: A, objB: B) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Max' }, { age: 30 });

console.log(mergeObj.age);
console.log(mergeObj.name);
