const sumAll = function(num1,num2) {
    let min = 0;
    let max = 0;
    let i = 0;
    let sum = 0;
    if(num1 > num2){
        max = num1;
        min = num2;
    }else{
        max = num2;
        min = num1;
    }
    if(typeof(num1) != "number" || typeof(num2) != "number" || num1 < 0 || num2 < 0){
        return "ERROR";
    }
    for(i = min; i <= max; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
