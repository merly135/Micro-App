var img = document.createElement("IMG");
var text = document.createElement("h2");

var scissorsPic = document.getElementById("scissors").addEventListener("click", scissorsClick);

function scissorsClick() {
    "use strict";
    var imgs = ["rock.jpg", "scissors.jpg", "paper.jpg"];

    var random = Math.floor(Math.random() * 3);
    img.setAttribute("src", imgs[random]);
    document.body.appendChild(img);

    var result = imgs[random];
    if ("scissors.jpg" === result) {
        text.textContent = "Tie. Play Again";
    } else if (result === "rock.jpg") {
        text.textContent = "You Lost";
    } else if (result === "paper.jpg") {
        text.textContent = "You win"
    }
    document.body.appendChild(text)
}


document.getElementById("rock").addEventListener("click", rockClick);

function rockClick() {
    "use strict";
    var imgs = ["rock.jpg", "scissors.jpg", "paper.jpg"];

    var random = Math.floor(Math.random() * 3);
    img.setAttribute("src", imgs[random]);
    document.body.appendChild(img);


    var result = imgs[random]
    if ("rock.jpg" === result) {
        text.textContent = "Tie. Play Again";
    } else if (result === "scissors.jpg") {
        text.textContent = "You Lost";
    } else if (result === "paper.jpg") {
        text.textContent = "You win"
    }
    document.body.appendChild(text)

}



document.getElementById("paper").addEventListener("click", paperClick);

function paperClick() {
    "use strict";
    var imgs = ["rock.jpg", "scissors.jpg", "paper.jpg"];

    var random = Math.floor(Math.random() * 3);
    img.setAttribute("src", imgs[random]);
    document.body.appendChild(img);


    var result = imgs[random]
    if ("paper.jpg" === result) {
        text.textContent = "Tie. Play Again";
    } else if (result === "scissors.jpg") {
        text.textContent = "You Lost";
    } else if (result === "rock.jpg") {
        text.textContent = "You win"
    }
    document.body.appendChild(text)

}


document.body.appendChild(text)
