
setHeight();

function setHeight() {
    let currentHeight = document.getElementById("headerheight").clientHeight;

    document.getElementById("flowheight").style.height = currentHeight +"px";
}