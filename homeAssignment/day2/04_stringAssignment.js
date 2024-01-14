/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/
function getLastWord(inputString ){
    
    //trim the string
    let trimmedString = inputString.trim();
    
    // split based on the seperator
    let words = trimmedString.split(" ");

    //get the last word from the array
    let lastWord = words[words.length - 1];

    return lastWord;
}

function isAnagram(str1, str2){
    
    // remove the space between the strings
    const str1WithOutSpace = str1.replace(/\s/g,'').toLowerCase();
    const str2WithOutSpace = str2.replace(/\s/g,'').toLowerCase();

    //check if the length are same
    if (str1WithOutSpace.length != str2WithOutSpace.length) {
        return false;
    }

    //Split the String into letters,sort the letters and join again
    let strSortJoin1 = str1WithOutSpace.split("").sort().join('');
    let strSortJoin2 = str2WithOutSpace.split("").sort().join('');

    //compare strings
    return (strSortJoin1 === strSortJoin2);
}

function palindrome(inputString){

    const trimmedString = inputString.trim();
    let stringSplit = trimmedString.split("");
    let revereString = stringSplit.reverse().join("");

    if (trimmedString === revereString) {
        console.log(`${trimmedString} is Palindrome`);
    } else {
        console.log(`${trimmedString} is not Palindrome`);
    }

}

let s;
let lastWord;
let lastWordLength;

console.log('====================================');
s = "Hello World";
lastWord = getLastWord(s);
lastWordLength = lastWord.length;
console.log("The last word is [" + `${lastWord}` + "] with length ["+ `${lastWordLength}` + "].");
console.log('====================================');
s = "   fly me   to   the moon  ";
lastWord = getLastWord(s);
lastWordLength = lastWord.length;
console.log("The last word is [" + `${lastWord}` + "] with length ["+ `${lastWordLength}` + "].");
console.log('====================================');

console.log('                                    ');

console.log('====================================');
let String1;
let String2;
let result;

String1="listen";
String2="silent";
if (isAnagram(String1, String2)) {
    console.log(`${String1} and ${String2} are anagrams.`);
 } else {
    console.log(`${String1} and ${String2} are not anagrams.`);
}
result = (isAnagram(String1, String2) ? 'anagrams' : 'not anagrams');
console.log(`${String1} and ${String2} are ${result}.`);
console.log('====================================');

String1="hello";
String2="world";
if (isAnagram(String1, String2)) {
    console.log(`${String1} and ${String2} are anagrams.`);
 } else {
    console.log(`${String1} and ${String2} are not anagrams.`);
}
result = (isAnagram(String1, String2) ? 'anagrams' : 'not anagrams');
console.log(`${String1} and ${String2} are ${result}.`);
console.log('====================================');

palindrome("malayalam");
palindrome("mother");
