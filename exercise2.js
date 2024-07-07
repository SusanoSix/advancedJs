//#1 change this function into a ternary and assign it to variable called experiencePoints

var experiencePoints = winBattle() ? "10" : "1"; 

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward"); undefined

//#3 return value when moveCommand("back"); "You arrived home"

//#4 return value when moveCommand("right"); "You found a river"

//#5 return value when moveCommand("left"); undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function moveCommand(attack) {
    var whatHappens; 
        switch (attack){
            case "jab":
            whatHappens = "-10 Hp"
            break;

            case "cross":
            whatHappens = "-30 Hp"
            break;

            case "kick":
            whatHappens = "-55 Hp"
            break;

            case "jab cross":
            whatHappens = "-45 Hp"
            break;

            case "jab kick":
            whatHappens = "Critical hit, -100 Hp"
            break;

            default:
                 whatHappens = "Enter a valid attack... Try: jab, cross, kick. Maybe a combo."
        }
        return whatHappens;
    
}

// window.moveCommand("run");
// 'Enter a valid attack... Try: jab, cross, kick. Maybe a combo.'
// window.moveCommand("jab");
// '-10 Hp'
// window.moveCommand("kick");
// '-55 Hp'
// window.moveCommand("jab kick");
// 'Critical hit, -100 Hp'
// window.moveCommand("jab cross");
// '-45 Hp'
// window.moveCommand("cross");
// '-30 Hp'