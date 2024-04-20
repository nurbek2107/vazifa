//// 1-misol

// function arr(n) {
//     let result = [];
//     for (let i = 2; i <= n; i++) {
//         result.push((2 ** (i - 1)));
//     }
//     return result;
// }
// console.log(arr(5));

////2-misol

// function arr(n, A, B) {
//     let array = [A, B];

//     for (let i = 2; i < n; i++) {
//         array[i] = array.reduce((a, b) => a + b, 0);
//     }

//     return array;
// }
// const output = arr(5,2,3);
// console.log(output);

//// 3-misol
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.reverse());

//// 4-misol
// function arr(array) {
//     const oddNumbers = array.filter((number) => number % 2 !== 0);
//     console.log('Toqlar:', oddNumbers.join(' '));
//     console.log('Toqlar soni =', oddNumbers.length);
// }

// const elements = [4, 5, 7, 8, 6, 9];
// arr(elements);

//// 5-misol
// function arr(array) {
//     const oddNumbers = array.filter((number) => number % 2 == 0);
//     console.log('Juft:', oddNumbers.join(' '));
// }

// const elements = [4, 5, 7, 8, 6, 9 , 10];
// arr(elements);

//// 6-misol
// function arr(array) {
//     for (let i = 0; i < array.length; i += 2) {
//         console.log(array[i]);
//     }
// }
// const element = [1, 2, 3, 4, 5, 6, 7, 8];
// arr(element);

//// 7-misol
// function func(array) {
//     for (let i = array.length - 1; i > 0; i -= 2) {
//         console.log(array[i]);
//     }
// }

// const elements = [1, 2, 3, 4, 5, 6, 7, 8];
// func(elements);

//// 8-misol
// function func(array) {
//     for (let i = 0; i < array.length; i += 2) {
//         console.log(array[i]);
//     }
//     for (let i = 1; i < array.length; i += 2) {
//         console.log(array[i]);
//     }
// }

// const elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// func(elements);

//// 9-misol
