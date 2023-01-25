const fibonacci = function(inputNum) {
    let i = 0;
    let sequenceArr = [];
    if(inputNum > 0){
        for(i = 0; i < inputNum; i++){
            if(i == 0 || i == 1){
                sequenceArr[i] = 1;
            }else{
                sequenceArr[i] = sequenceArr[i - 1] + sequenceArr[i - 2];
            }
        }
        return sequenceArr[inputNum - 1];
    }else{
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
