/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/

function sumall(val){
    let sum = 0;
    for (let index = 1; index <= val; index++) {
        sum += index;
    }
    console.log(`Sum of all the value from 1 to [${val}] is [${sum}]`);
}

sumall(5);