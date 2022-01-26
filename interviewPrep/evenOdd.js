//Create a function that takes an integer as an argument and returns "Even" for even numbers and "Odd" for odd numbers. 
const even_or_odd = (number)=>{
//Directions asks to return a capitalized string ("Even, Odd") depending on the output result. 
//Fist thing is to think of how would you compare a number to another to check even or odd. To do this, you write a conditional statement that would need to divide the number by 2 and if the result is a whole number, it's even. If the result is a decimal, it's odd. Or to make it better, using the modulo operator, because the modulo operator checks for remainders of how many times a number can go into another number. If the number 2 goes evenly into a number, it would return a remainder of 0 (Even), if it does not go evenly into a number, it would return a remainder of 1 (Odd). 
if (number % 2 === 0) { //conditional that checks if 2 goes into number an even amount of times which will return 0. 
    return "Even"; //return statement if above condition is met. 
    } else { //Tells the progam if above condition is not met then look at the next line of code. 
    return "Odd";//return statement that tells the program if the above condition wasn't met and the program was directed to the else statement, then return this code. 
    }
}