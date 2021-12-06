//Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime. 

const isPrime = (num) =>{

num = [3, 5, 9, 10, 22, 30]
for (let i = 2; i < num; i++){
    if (num % i === 0){
        return false;
        }else if (num > 1){
            return true;
        }
    }
}
isPrime()