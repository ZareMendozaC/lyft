function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getObjectLocalStorage(key) {
    var value = localStorage.getItem(key);
    return JSON.parse(value);
}

function regresarIndex(){
    window.location = "login.html";
}
var regresar= document.getElementById("regresar");
regresar.addEventListener('click',regresarIndex);



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

function borrarEspacios(frase){
  var contador=0;
  for(var i=0; i<=frase.length; i++){
     frase = frase.replace(" ",'');
    contador++;
    }
  if(contador>0){
    return frase;
  }else{
    return frase;
  }
}

function vistaMapa(){

  var nombreApe= document.getElementById("nombreApe");
  var email= document.getElementById("mail").value;
	//window.location= "mapa.html";
  var cadena= nombreApe.value;
  cadena= borrarEspacios(cadena); // CADENA SIN ESPACIOS
  
  
  var isvalid= true; 
  if(isAlphabetic(cadena))
  {
    var nombreApe= document.getElementById("nombreApe").value;
    var misDatos=nombreApe.split(" "); // PARA SACAR LOS DATOS
    var datos="";
    console.log(misDatos);
    for(var i=0; i<misDatos.length; i++)
    {
      if(misDatos[i]!=" ")
      {
        datos= datos+misDatos[i];
        datos= datos+" ";
      }
      console.log(datos);
      
      var nombreValido= document.getElementById("nombre-valid");
      nombreValido.style.display="block";
      var nombreValido= document.getElementById("nombre-invalid");
      nombreValido.style.display="none";
    }
    setObjectLocalStorage('nombre',datos);
  }
  else
  {
    isvalid=false;
    var nombreValido= document.getElementById("nombre-invalid");
      nombreValido.style.display="block";
    var nombreValido= document.getElementById("nombre-valid");
      nombreValido.style.display="none";
  }
  
  if(isEmail(email))
  {
      var email= document.getElementById("mail-valid");
      email.style.display="block";
      var email= document.getElementById("mail-invalid");
      email.style.display="none";
  }else
  {
      isvalid=false;
      var email= document.getElementById("mail-valid");
      email.style.display="none";
      var email= document.getElementById("mail-invalid");
      email.style.display="block";
  }
  
  if (isvalid==true) {
    console.log("paso todo");
    window.location= "mapa.html";
  }
  else
   alert("corrige el formulario");
  
}
var next= document.getElementById("next");
next.addEventListener('click',vistaMapa);
