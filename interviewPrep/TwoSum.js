//TWO SUM 
//Given an array of integers, return indices of the two humbers such that they ad up to a specific target. 
//Given nums = [2, 7, 11,15], target = 9
//Because nums [0] + nums[1] = 2+7=9
//return [0,1]

const twoSum = (num, target) =>{
    let numberIndex = new Map(); //put indices of the number in the map
    let result = []; //creates empty array to store result

    for(let i = 0; i < sum.length; i++){
        let num = nums[i]; //stores indices of numbers in the num variable
        let complement = target - num; //stores value of target minus the number in new variable
        //if the index number has the value 
        if(numberIndex.has(complement)){
            result[0] = numberIndex.get(complement);
            result[1] = i;
                return result;
        }
        numberIndex.set(num, i);
    }
    return result;
}