//Use the reduce method in combination with the concat method to “flatten”
//an array of arrays into a single array that has all the elements of the original
//arrays.
let padre = [
    figlio0 = ['a', 'b', 'c', 'd'],
    figlio1 = [1, 2, 3],
    figlio2 = ['tom', 'david', 'ilenia']
];

function flatten(array) {
    return flattened = array.reduce((arr1, arr2) => {
        return arr1.concat(arr2);
    });
}


//Analogous to the some method, arrays also have an every method.
//Implement every as a function that takes an array and a predicate function
//as parameters. Write two versions, one using a loop and one using the
//some method.
numeri = [2, 4, 7, 80];

function everyConLoop(array, predicate) {
    for (elemento of array) {
        if (predicate(elemento) === false) {
            return false;
        }
    }
    return true
}

function everyConSome(array, predicate) {
    if (!array.some((a) => {
        return !predicate(a);
    })) {
        return true;
    } else {
        return false;
    }
}

console.log(everyConLoop(numeri, a => a % 2 == 0));
console.log(everyConSome(numeri, a => a % 2 == 0));