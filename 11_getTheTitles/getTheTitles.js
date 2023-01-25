const getTheTitles = function(inputArray) {
    let len = inputArray.length;
    let res = [];
    let i = 0;
    for(i = 0; i < len; i ++){
        res.push(inputArray[i].title);
    }
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
