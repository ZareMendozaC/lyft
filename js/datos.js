function regresarIndex(){
    window.location = "login.html";
}
var regresar= document.getElementById("regresar");
regresar.addEventListener('click',regresarIndex);

var nombreApe= document.getElementById("nombreApe");
var email= document.getElementById("mail");

nombreApe.addEventListener('keyup',validateNombreApe);

function isAlphabetic(cadena)
{
      if (cadena.match(/^[a-zA-Z]+$/))
      {

        return true;
      }
      else
      {
        return false;
      }
}
function isEmail( email ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) )
    {
        return false;
    }
    return true;
}
function validateNombreApe(){
	var cadena= nombreApe.value;
	var tamano= nombreApe.value.length;
	var isvalid= false;
}