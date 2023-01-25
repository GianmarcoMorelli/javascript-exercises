const palindromes = function (inputString) {
    let stringNoSpecialChar = "";
    stringNoSpecialChar = inputString.replace(/[^a-zA-Z0-9 ]/g,"");
    let i = 0;
    let res = "";
    let stringNoSpaces = stringNoSpecialChar.replace(/\s+/g,"");
    let len = stringNoSpaces.length;
    for(i = len-1; i >= 0; i--){
        res += stringNoSpaces[i];
    }

    if(res.toUpperCase() == stringNoSpaces.toUpperCase()){
        return true;
    }else{
        return false;
    }
};



// Do not edit below this line
module.exports = palindromes;
