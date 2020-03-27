
// Below is a way to remove the first and last elements from an array, in a dynamic and functional manner.
// You can create one on the fly and plug it right in at the time you call the function, or you can call a variable with an array stored inside of it. 
let trimmableArray = ['ughhh', 'good', 'another good one', 'uugggg'];

const arrayTrimmer = arr => {
    if (arr.length >= 3) {
        //arr.shift();
        //arr.pop();
        //return arr;
        return arr.slice(1, -1);
    } else {
        throw new Error("You need at least three elements in the array");
    };
};

console.log(arrayTrimmer(trimmableArray));
console.log(arrayTrimmer([1, 2, 3, 4, 5]));