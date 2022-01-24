const str = 'hello';

const solution = (str)=> {
//first thing to do is put the string into an array to separate the letter and turnd them into an array that js can recognize as each individual character. 
const arr = str.split(""); 
//this will separate the characters and save them to the variable 'arr', which will return and array of ["h", "e", "l", "l", "o"]

//Next step is to reverse the array by saving it into a 'reversed' variable (assigning the result of the splited array to this new variable) and using the .reverse() method. This will tell js to look at new array with each individual character that is now split and reverse the order. 
const reversed = arr.reverse()

//final step is to take that reversed array and join it. Assigning it to a variable that will save the result of the reversed array once it's joined back together using the .join() method. In the join method, we must have the empty quotes to define that the retrun value will be a string, otherwise it will join the characters but separated by commas, like so 'h,e,l,l,o'. 
const finalAnswer = reversed.join("")

//Now you must return the finalAnswer to call on the output of this code. 
return finalAnswer;
}