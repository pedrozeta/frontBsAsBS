    const formulario = document.getElementById("formulario");
    function resumen(){
        let cantidad = document.getElementById('inputCantidad').value;
        let categoria = document.getElementById('categoria').value;
        const precio = 200;
        let descuentoEstudiante = 0.2;
        let descuentoTrainee = 0.5;
        let descuentoJunior = 0.85;
        if (cantidad % 1 ==0){
        if (categoria == "estudiante"){
            alert("  Tickets para estudiante.\n  Cantidad: " + cantidad +".\n  Tiene un descuento del 80%.")
            let totalaPagar = (cantidad * precio * descuentoEstudiante);
            document.getElementById("cantTotal2").innerHTML = "Total a Pagar: $" + totalaPagar;
        } else 
        if (categoria == "trainee"){
            alert("  Tickets para trainee.\n  Cantidad: " + cantidad + ".\n  Tiene un descuento del 50%.");
            let totalaPagar = (cantidad * precio * descuentoTrainee);
            document.getElementById("cantTotal2").innerHTML = "Total a Pagar: $" + totalaPagar;
        } else 
        {
            alert("  Tickets para junior.\n  Cantidad: " + cantidad + ".\n  Tiene un descuento del 15%.");
            let totalaPagar = (cantidad * precio * descuentoJunior);
            document.getElementById("cantTotal2").innerHTML = "Total a Pagar: $" + totalaPagar;
        }
    } else
    if (isNaN(cantidad)){
        alert ("   \"" + cantidad + "\" no es un número.\n  Presione borrar y vuelva a empezar.");
    } else {
        alert ("  \"" + cantidad + "\" no es un número entero.\n  Presione borrar y vuelva a empezar.");
    }
}
    
    document.getElementById('calcular').onclick = function(){
        resumen();
    }
    
    function borrar(){
        formulario.reset();
        document.getElementById("cantTotal2").innerHTML = "Total a Pagar: $";
    }    
    
    document.getElementById("borrar").onclick = function(){ 
        borrar(); 
    }
