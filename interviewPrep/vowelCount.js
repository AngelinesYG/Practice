function getCount(str) {
    let vowelsCount = 0;
    //First put input into an array so that we can loop over the array and check if it's a vowel. 
    //convert string (str) into an array so that we can split it. 
    const arr = str.split("");
    //now we can write loop to iterate over single value in the arr 
    for (let i = 0; i < arr.length; i++){
      switch(arr[i]){//evaluate each single letter
        case 'a': //if it equals 'a'
        vowelsCount++; //increment vowel count by 1
        break; //break out of this statement
        case 'e': //if it equals 'e'
        vowelsCount++; //increment vowel count by 1
        break; //break out of this statement
        case 'i': //if it equals 'i'
        vowelsCount++; //increment vowel count by 1
        break; //break out of this statement
        case 'o': //if it equals 'o'
        vowelsCount++; //increment vowel count by 1
        break; //break out of this statement
        case 'u': //if it equals 'u'
        vowelsCount++; //increment vowel count by 1
      }//if it doesn't equal any of those, then the count will just stay where it is. 
  }//At end of loop, we'll have a total count, which we return below.
    return vowelsCount;
  }