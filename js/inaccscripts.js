
setHeight();
myMap();

function setHeight() {
    let currentHeight = document.getElementById("headerheight").clientHeight;

    document.getElementById("flowheight").style.height = currentHeight +"px";
    window.scrollTo(0, 0); //zorgt er voor dat de scroll niet naar beneden word geduwd
}

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }