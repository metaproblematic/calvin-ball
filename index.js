//Player One
var score = 193;
var last_play = "Q";
var broom = "handle";
var has_ball = false;
var is_in_tree = false;
var crying = false;


/*
//Player Two
var score = 394;
var last_play = "W";
var broom = "none";
var has_ball = true;
var is_in_tree = true;
var crying = false;
*/

/*
//Player Three
var score = "f";
var last_play = 1.5;
var broom = "brush";
var has_ball = true;
var is_in_tree = false;
var crying = true;
*/

if (typeof score !== 'number') {
    score = 500;
}

if (crying === true) {
    score = score - 300;
} else {
    score = score + 50;
} 

if (last_play === 'Q') {
    score = score - 77;
} 

if (is_in_tree === true && typeof last_play !== 'number') {
    score = score + 395;
} 

if (broom === 'handle') {
    score = score * 2;
} else if (broom === 'brush') {
    score = score * 3;
} else {
    score = score / 2;
} 

if (has_ball === true && is_in_tree === false && crying === false) {
    score = score * 1.5;
} 

if (typeof last_play === 'number') {
    score = score * last_play;
}




console.log(score); //332, 419.5, 900


// Calvinball Rules:
// 1. A player's score is equal to 500 if their score is not already a number. (this is implemented below).
// 2. A player's score is reduced by 300 if they are crying. Otherwise it is increased by 50.
// 3. A player's score is reduced by 77 if their last play was "Q"
// 4. A player gets an extra 395 points if they are in a tree, unless their last play was a number.
// 5. A player's score is doubled if they are holding the broom handle, but it is tripled if they have the broom brush. Otherwise the player's score is halved.
// 6. A player's score is multiplied by 1.5 if they are carrying the ball but only if they are not in a tree. Disregard this rule if the player is crying.
// 7. If the player's last play was a number (not a letter), the player's score is multiplied by that amount.
