const arr = [1,2,3,4,5,6];
let newArr = arr.map( function(item){
    return item * 3;
});
console.log("-a-");
console.log(newArr);
console.log("-b-");


const filterArr =  arr.filter( function(item){
    return item%2 === 0;
});
console.log(filterArr);

