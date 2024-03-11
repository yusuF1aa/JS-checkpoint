// String Manipulation Functions

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Count Characters
function countCharacters(str) {
    return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Array Functions

// Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Mathematical Functions

// Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Prime Number Check
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Fibonacci Sequence
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Example usage
console.log(reverseString("hello")); // Output: "olleh"
console.log(countCharacters("hello")); // Output: 5
console.log(capitalizeWords("hello world")); // Output: "Hello World"
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
console.log(findMin([1, 2, 3, 4, 5])); // Output: 1
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0)); // Output: [2, 4]
console.log(factorial(5)); // Output: 120
console.log(isPrime(7)); // Output: true
console.log(fibonacci(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
