
//Funcion para limpiar el campo texto
function clearDisplay(){
    //console.log("click"); imprimir en la consola de navegador
    alert("alerta de limpiar");
}

function appendToDisplay(division){
    alert(division);
}


// este evento nos dice que si alguien oprime una tecla  del teclado 
document.addEventListener('keydown', function(event){
    if(event.key === 'b'|| event.key === 'B'){
        clearDisplay();

    }
}

)