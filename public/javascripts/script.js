var getType = document.forms["form-get"]["type"].value;
var getColor = document.forms["form-get"]["color"].value;

document.getElementById('form-get').addEventListener('submit', 
    function(){ 
        alert("Vous avez sélectionné un(e) " + getType + " de couleur" + getColor);
    }
);


document.getElementById('text-2-bis').style.display = "none";
  
document.getElementById('form-post').addEventListener('submit', 
    function(){ 
        document.getElementById('text-2').style.display = "none";
        document.getElementById('text-2-bis').style.display = "block";
    }
);
