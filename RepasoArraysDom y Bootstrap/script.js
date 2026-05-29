const estudiantes=[];
const inputNombre=document.getElementById("nombreEstudiante");
const btnAgregar=document.getElementById("btnAgregar");
const lista=document.getElementById("listaEstudiantes");

function actualizarDOM(){
    lista.innerHTML="";
    
    for(let i=0; i<estudiantes.length; i++){
        let li=document.createElement("li");
        li.textContent=estudiantes[i];
        lista.appendChild(li);
    }
}

btnAgregar.addEventListener("click", function(){
    let nombre=inputNombre.value.trim();
    
    if(nombre!==""){
        estudiantes.push(nombre);
        inputNombre.value="";
        actualizarDOM();
    } else {
        alert("El campo no puede estar vacío.");
    }
});