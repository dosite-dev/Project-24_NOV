/*
 Write a function that counts the number of vowels in a string
    Examples:
        1. "hello" shall return2 vowels
        2. "Kigali" shall return3 vowels
        3. "Airport" shall return 3 vowels
        4. "Hhhh" shall return 4 vowels
*/
function countVowels(str){
    vowelsCounter=0;
    var vowels=["a","e","u","i","o"];
    for(char of str){
        if(vowels.includes(char)){
            vowelsCounter++;

        }
    }
    return vowelsCounter;

}
console.log(countVowels("repository"));
