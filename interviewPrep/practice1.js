// const strArray = ["hello", "what", "is", "up", "dude"]
// const intLength = strArray.length

// const getMultipleLengths = ()=>{
//    let wordString = ["hello", "what", "is", "up", "dude"]
//
//    for (i = 0; i <= wordString.length; i++){
//       let length = wordString[i].length;
//    }
//    console.log("the length is " + length)
// }

// console.log("yes")
//
// if ( 1+1 ===2){
//    console.log("math works")
// }
// console.log("nope")

// let random = Math.random()
//
// if(random < 0.5){
//    console.log("number is less than 0.5")
//    console.log(random);
// }

// const dayOfWeek = "Monday"
//
// if (dayOfWeek === 'Monday'){
//    console.log("Ugh. Monday")
// } else if (dayOfWeek === 'Saturday') {
//    console.log("yay")
// } else if (dayOfWeek === 'Friday') {
//    console.log("super")
// }
// const password = prompt("enter password");
// //Password must be 6+ characters
// if(password.length >= 6){
//    //Password cannot include space
//    if (password.indexOf('') === -1){
//       console.log("valid");
//    } else {
//       console.log("cannot have spaces");
//    }
// } else {
//    console.log("must be 6 characters");
// }

//Brian is calculating the cost of the bill
//Anna may or may not eat everything
//Return "Bon Appetit" (string) if the bill is divided fairly or return the amount (number) that Brian owes back to Anny for the food she didn't eat.
//bill = array of integers [2, 4, 6]
//k = specific item in the bill, index number of item in the bill - bill[2]
//b = the amount of money Anna contributes to bill

//Need to calculate total cost of bill by adding everything in the array
// total cost 2 + 4 + 6 = 12
//take total cost (bill) minus K (which is what she didn't eat) (Anna declines to eat item k) (k is the index of the array, which is 6)
//return 12 - 6 = 6
//then divide by two
// 6 % 2 = 3 (this is the correct split of the bill)
//If the number matches b, return Bon Appetit, otherwise return amount owed to Anna by Brian.
//If b - equal correct split
//if b = 6 then return 6 - 3 (this is the amount overpaid)

function bonAppetit(bill, k, b) {
    // Write your code here
    //calculate total cost of bill
    let sum = bill.reduce((accumulator, currentValue)=>{
      return accumulator + currentValue
   })
   // console.log(sum)
   let notEaten = bill[k]
   // console.log(notEaten)
   //cost of bill = 24 cost that Anny didn't eat = 10 cost that Anny paid = 12.
   let newSum = (sum - notEaten) / 2
   // console.log(newSum)
   if (newSum === b){
   return "Bon Appetit"
   } else {
   return (b - newSum)
   }
}
console.log(bonAppetit([3, 10, 2, 9], 1, 12));
