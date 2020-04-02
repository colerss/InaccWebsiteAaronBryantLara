
setHeight();

function setHeight() {
    let currentHeight = document.getElementById("headerheight").clientHeight;

    document.getElementById("flowheight").style.height = currentHeight +"px";
    window.scrollTo(0, 0); //zorgt er voor dat de scroll niet naar beneden word geduwd
}