
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



  
    var foutenArray = new Array(); 

    function VerzendenFormulier(){ 
      foutenArray= [];
         
      checkEmptyField(document.getElementById("naam"), "Het veld naam is vereist."); 
      
  
      if(validateEmail(document.getElementById("email").value)==false){ 
        error="E-mailadres is niet correct."
        foutenArray.push(error);
        console.log(foutenArray);
        error= "";
      } 
      checkEmptyField(document.getElementById("telefoon"), "Het veld telefoon is vereist.");
      
      checkEmptyField(document.getElementById("onderwerp"), "Het veld onderwerp is vereist.");
  
      checkEmptyField(document.getElementById("bericht"), "Je moet je bericht nog invullen.");
  
      var tekst= foutenArray.join("\n");
  
      alert(tekst);
  } 
  
  
            function checkEmptyField(veld, melding){
                if(veld.value==""){
                    foutenArray.push(melding);
                    console.log(foutenArray);
                    } 
                 }
  
            function validateEmail(email) { 
  
              var testingMail = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
              return testingMail.test(String(email).toLowerCase());
            }
            


/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}