function add(...nums){
    return nums.reduce((add, num) => add + num, 0);
}
let sum = add(3,6,2,4,5,3,5,6,2,4,5,3);
console.log(sum);