var man = {};

Object.defineProperty(man,'age',{
    value: 37,
    writable: true,
    enumerable: true,
    configurable: true,
});

man.age =50;

console.log(JSON.stringify(man));