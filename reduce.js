const a = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(a.reduce(reducer));
console.log(a.reduce(reducer, 5));


function f(total,value){
    return total + value;
}
console.log(a.reduce(f));

function g(values){
return values > 2;
}
console.log(a.every(g));

function h()
