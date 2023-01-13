function isPalindrome(word){
    if (word==null || typeof word != 'string'  || word ===''){
        return false
      }
    else {

        return word.split('').join(',') === word.split('').reverse().join(',')
    }
}

console.log(isPalindrome("ama"));
console.log(isPalindrome(""));
console.log(isPalindrome("ma"));
console.log(isPalindrome("null"));
console.log(isPalindrome(123));