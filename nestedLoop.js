//                                  NESTED LOOP PRACTICE


//IF nested in FOR loop
for (var i = 1; i < 11; i++) {
    
    
    if (i == 1) {
        console.log("Gold!");
    }

    else if (i == 2) {
        console.log("Silver!");
    }

    else if (i == 3) {
    console.log("Bronze!");

    }

    
//RETURNS i FOR ANYTHHING OUTSIDE OF THE FIRST 3 NUMBERS.
else {
    console.log(i);
}}


//SWITCH nested in FOR loop

for (var i = 1; i < 11; i++){
    
    switch(i) {
        case(1):
        console.log("Gold!");
        break;

        case(2):
        console.log("Silver!");
        break;

        case(3):
        console.log("Bronze!");
        break;

//RETURNS i FOR ANYTHHING OUTSIDE OF THE FIRST 3 NUMBERS.
        default:
            console.log(i);
    }
}
