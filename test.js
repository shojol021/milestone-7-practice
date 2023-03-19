const arr = [10, 21, 51, 11, 8, 17, 12]
const min = Math.min.apply(null, arr);
console.log(min);
const max = Math.max(...arr);
console.log(max);