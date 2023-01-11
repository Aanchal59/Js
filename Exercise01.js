//EXERCISE - 01

/* 
Write a js pgm to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number.

100- (no. of guesses)
 is the score of the user.

The pgm is expected to terminate once the number is guessed. Number should be between 1-100.

*/


let x;
let score = 0;
let y = Math.floor(Math.random() * 100)
do{
    x = Number.parseInt(prompt());
    if(x>y){
        console.log(`${x} is greater than the Random Number`)
    } else if(x<y){
        console.log(`${x} is smaller than the Random Number`)
    } else if(x==y){
        console.log(`You Win The Match!!`)
    }
    score += 1;
}while(x!=y)
console.log("Time to play the match:", score)
console.log(`Your Score is: ${(100 - score)}`)

