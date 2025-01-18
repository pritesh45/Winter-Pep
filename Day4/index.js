
// question 1
const ask=(question,yes,no)=>{
  if (confirm(question)) yes();
  else no();
}
ask(
  "Do you agree?",
  ()=>{console.log("You agreed.")},
  ()=>{console.log("You canceled the execution."); }
)


// // question 2
// //  [8, 6, 7, 9]


// // question 3
// const square = (a)=>{
//     return a*a;
// }
// console.log(square(3));

// // question 4
// const numbers = [1, 2, 3];
// const squares = numbers.map(num => num ** 2);
// console.log(squares);

// //question 5
// const rev = (str)=>{
//     return str.split('').reverse().join('');
// }
// console.log(rev("hello"));


// //question 6

// const chainable = (initialValue) => {
//     let value = initialValue;

//     return {
//       add: (num) => {
//         value += num;
//         return this;
//       },
//       multiply: (num) => {
//         value *= num;
//         return this;
//       },
//       result: () => value
//     };
//   };

//   const result = chainable(5).add(3).multiply(2).result();
//   console.log(result);
