const isPalindrome = (someString) => {
    if(typeof operador1 != "string" ){
        throw new Error("Error");
    }
    const someArray = someString.split("").reverse()
    console.log(someArray)
    const reverserString = someArray.join("")

    if(someString === reverserString){
        return true
    }
    else{
        return false
    }
}

module.exports = {
    isPalindrome
}