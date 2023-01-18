const repeatString = function(word,num) {
    let i = 0;
    let result = "";

    if(num >= 0){
        for(i = 0; i < num; i++){
            result = result.concat(word);
        }
        return result;
    }else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
