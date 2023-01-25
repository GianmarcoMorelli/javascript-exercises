const findTheOldest = function(inputArray) {
    let len = inputArray.length;
    let namesArray = [];
    let ageArray = [];
    let i = 0;
    const date = new Date();
    let max = 0;
    let counter = 0;
    let res = "";
    for(i = 0; i < len; i++){
        namesArray[i] = inputArray[i].name;
        if(inputArray[i].hasOwnProperty("yearOfDeath")){
            console.log("sub result: " + (inputArray[i].yearOfDeath - inputArray[i].yearOfBirth));
            ageArray[i] = inputArray[i].yearOfDeath - inputArray[i].yearOfBirth;
        }else{
            console.log("sub result: " + (date.getFullYear() - inputArray[i].yearOfBirth));
            ageArray[i] = date.getFullYear() - inputArray[i].yearOfBirth;
        }
        if(ageArray[i] > max){
            max = ageArray[i];
            counter = i;
        }
    }
    
    return inputArray[counter];
};


// Do not edit below this line
module.exports = findTheOldest;
