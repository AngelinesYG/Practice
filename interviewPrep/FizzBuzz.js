//Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz.

// for (let i = 1; i < 101; i++){
//     //Need loop to iterate over all numbers from 1 to 100
//     if (i % 15 == 0) {
//         console.log("FizzBuzz");
//     }
//     //checks if the number,in this case "i" is a multiple of 3 and 5 (which means that each number multiplied by another number will give the same number in common. Ex. 3*5 = 15, 5*3=15, 3*10=30, 5*6=30)
//     else if (i % 3 == 0) {
//         console.log("Fizz");
//     }
//     // checks if a number is a multiple of just 3 but not 5
//     else if (i % 5 == 0) {
//         console.log("Buzz");
//     }
//     // checks if a number is a multiple of just 3 but not 3
//     else {
//         console.log(i)
//     }
//     // prints the number that isn't a multiple of either
// }


//Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz.

const fizzbuzz = () =>{
    for (let i = 1; i <= 100; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz")
        } else if (i % 5 == 0){
            console.log("Buzz")           
        } else if (i % 3 == 0){
            console.log("Fizz")
        } else {
            console.log(i)
        }
        //case number 1 - print fizz for multiples of 3
        //the % calculates the remainder of the number after dividing. 
        //case number 2 - print buzz for multiples of 5
        //case number 3 - print fizzbuzz for multiples of 3 and 5
        //case number 4 - print numbers that are not multiples of either 
    }
}

fizzbuzz()







