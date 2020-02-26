var img = document.createElement("IMG");

var scissorsPic = document.getElementById("scissors");

function scissorsClick() {
    "use strict";
    var imgs = ["rock.jpg", "scissors.jpg", "paper.jpg"];
    var random = Math.floor(Math.random() * 3);


    img.setAttribute("src", imgs[random]);
    document.body.appendChild(img);
}

scissorsPic.addEventListener("click", scissorsClick());




var rockPic = document.getElementById("rock");

function rockClick() {
    "use strict";
    var imgs = ["rock.jpg", "scissors.jpg", "paper.jpg"];
}

rockPic.addEventListener("click", rockClick());





var paperPic = document.getElementById("paper");

function paperClick() {
    "use strict";
    var imgs = ["rock.jpg", "scissors.jpg", "paper.jpg"];
}

rockPic.addEventListener("click", paperClick());
