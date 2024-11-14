//RUNNING CODE VIA FUNCTIONS
//INSTRUCTIONS: PUT THE CODE INSIDE:
//              function functionName() 


function ask () {

let i = prompt("Who's the best in Arcane?");

if(i == "Ekko" || i == "ekko") {
    console.log("true");
}

else if (i == "Vi" || i == "vi") {
    console.log("maybe, but better than saying jinx")
}

else if (i == "Jinx" || i == "jinx") {
    console.log("...")
}

else if (i == "Jayce" || i == "jayce") {
    console.log("hammer with a switch? try again")
}


//IF NONE OF THE MC'S ARE PICKED, RUN THE PROMPT AGAIN
 else{
    console.log("try again-");
    ask();
 }
}

ask();
