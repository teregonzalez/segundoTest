const isPalindrome = (someString) => {
    if(typeof someString !== "string" ){
        throw new Error("Error");
    }
    return someString.split("").reverse().join("") === someString
}

module.exports = {
    isPalindrome
}