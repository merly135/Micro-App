var img = document.createElement("IMG");

var scissorsPic = document.getElementById("scissors").addEventListener("click", scissorsClick);

function scissorsClick() {
    "use strict";
    var imgs = ["rock.jpg", "scissors.jpg", "paper.jpg"];

    var random = Math.floor(Math.random() * 3);
    img.setAttribute("src", imgs[random]);
    document.body.appendChild(img);

}


document.getElementById("rock").addEventListener("click", rockClick);

function rockClick() {
    "use strict";
    var imgs = ["rock.jpg", "scissors.jpg", "paper.jpg"];

    var random = Math.floor(Math.random() * 3);
    img.setAttribute("src", imgs[random]);
    document.body.appendChild(img);

}



document.getElementById("paper").addEventListener("click", paperClick);

function paperClick() {
    "use strict";
    var imgs = ["rock.jpg", "scissors.jpg", "paper.jpg"];

    var random = Math.floor(Math.random() * 3);
    img.setAttribute("src", imgs[random]);
    document.body.appendChild(img);

}
