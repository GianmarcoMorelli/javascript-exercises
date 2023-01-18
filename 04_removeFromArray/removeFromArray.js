const removeFromArray = function() {
    const args = Array.from(arguments);
    const inputArray = args[0];
    const undesiredElements = args.slice(1);
    let len = undesiredElements.length;
    let i = 0;
    let tmpIndex = 0;
    for(i = 0; i < len; i++){
        if(inputArray.includes(undesiredElements[i])){
            tmpIndex = inputArray.indexOf(undesiredElements[i]);
            if(typeof(inputArray[tmpIndex]) == typeof(undesiredElements[i])){
                inputArray.splice(tmpIndex,1);
            }
            
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
