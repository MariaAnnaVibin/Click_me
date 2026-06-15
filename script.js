let box = document.getElementsByTagName("button");

box[0].addEventListener("mouseover", function () {
    box[0].style.marginLeft = Math.floor(Math.random() * 30) + "rem";
    box[0].style.marginTop = Math.floor(Math.random() * 20) + "rem";
});