//Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime. 

// const isPrime = (num) =>{


// for (let i = 2; i < num; i++){
//     if (num % i === 0){
//         return false;
//         }else if (num > 1){
//             return true;
//         }
//     }
// }
// num = [3, 5, 9, 10, 22, 30]
// isPrime(num)
function isPrime(num) { //declaration of the function
    for(let i = 2; i < num; i++)//loop that iterates through all  numbers. Loops is starting i at two, because by making the value of i a 2, it makes the program conduct an even check (explained next line of code). The loop then says that i is less than the number; and then increment i by one.
    if(num % i === 0) return false; //Modulo (%) checks for remainders in a division. Here, it says if the number (num) when divided by i (which is 2) has zero remainders, then the num is a prime, which makes it false. 
  return num > 1;//boolean statement that checks truthy or falsey values. If the num is greater than 1, meaning, if there is a remainder, then the statement is true, which means the number is not a prime. 
//   console.log(num > 1);
  }
  isPrime()