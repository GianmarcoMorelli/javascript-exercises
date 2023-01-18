const reverseString = function(word) {
    let result = "";
    let resultTmp = word.split("");
    let len = word.length;
    let i = 0;
    let resultTmpTwo = [];
    console.log(resultTmp[i]);
    for(i = 0; i < len; i++){
        resultTmpTwo.splice(0,0,resultTmp[i]);
    }
    console.log(resultTmp);
    console.log(resultTmpTwo);
    result = resultTmpTwo.join("");
    return result;
};


// Do not edit below this line
module.exports = reverseString;
