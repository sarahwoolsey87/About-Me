let secretNumber=35;
let numbGues=Number(prompt("Can you guess My age? (Hint - its 1-50"));

while (numbGues!=secretNumber){
if (numbGues<0 || numbGues>50 ){
let numbGues=Number(prompt("Please choose a valid number between 1-50")); 
}

if (numbGues<secretNumber){
let numbGues=Number(prompt("Too low! try again"));
}

else  if (numbGues>secretNumber) {
let numbGues=Number(prompt("Too High! Try again!"));
}

if (numbGues==secretNumber) {
alert("You guessed it!");
}
