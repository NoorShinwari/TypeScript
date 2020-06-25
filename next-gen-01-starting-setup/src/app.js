function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergeObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergeObj);
console.log('it is me');
