var img = document.createElement("IMG");
var text = document.getElementById("result");


document.addEventListener("dragstart", (event) => {
    var y = event.target.id
    event.dataTransfer.setData("text", y);
});

document.addEventListener("dragover", (event) => {
    event.preventDefault();
});

document.addEventListener("drop", (event) => {
    event.preventDefault();
    if (event.target.className === "droptarget") {
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    }

    var y = event.target.id;

    if (event.target.className === "droptarget" && y === "scissors") {
       scissorsClick();
    } else if (event.target.className === "droptarget" && y === "rock") {
     rockClick();
    } else if (event.target.className === "droptarget" && y === "paper") {
      paperClick()
    }
});


//var scissorsPic = document.getElementById("scissors").addEventListener("click", scissorsClick);

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
    document.body.h2.appendChild(text)
}


//document.getElementById("rock").addEventListener("click", rockClick);

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
    document.body.h2.appendChild(text)

}



//document.getElementById("paper").addEventListener("click", paperClick);

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
    document.body.h2.appendChild(text)

}


document.body.appendChild(text)
