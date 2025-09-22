const buttons = document.querySelectorAll(".option"), 
img = document.getElementById("left__img"),
imgBot = document.getElementById("right__img"),
result = document.getElementById("printResult");

function GetWinner(user, bot) {
    if(user == bot) {
        return "Нічия"
    }
    if(user == 1 && bot == 2 ||
        user == 2 && bot == 3 ||
        user == 3 && bot == 1) {
            return "Ви перемогли";
        }
    else {
        return "Ви програли";
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.dataset.choice;

        if(userChoice == 1) {
            img.src = "img/paper.png"
        }

        else if(userChoice == 2) {
            img.src = "img/rock.png"
        }
        else {
            img.src = "img/scissors (1).png"
        }

        let rnd = Math.round((Math.random() * 2) + 1);
        if(rnd == 1) {
            imgBot.src = "img/paper (1).png"
        }

        else if(rnd == 2) {
            imgBot.src = "img/rock (1).png"
        }
        else {
            imgBot.src = "img/scissors.png"
        }

        result.innerHTML = (GetWinner(userChoice, rnd));
    })    
});