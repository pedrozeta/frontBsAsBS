var cantidad = document.getElementById('inputCantidad')
const calcular = document.getElementById('calcular')
const categoria = document.getElementById('categoria')
const total = document.getElementById('cantTotal2')



function resumen(){
    var totalaPagar = 0;
    var precio = 200;
    var descuentoEstudiante = 0.8;
    cantidad = parseInt(cantidad)
    console.log(categoria.value)
    console.log(cantidad.value)
    cantidad.value
    if (categoria.value == "estudiante"){
        alert("Tickets para estudiante.")
        totalaPagar = (cantidad * precio * descuentoEstudiante)
    } else 
    if (categoria.value == "trainee"){
        alert("Tickets para trainee.")
    } else 
    {
        alert("Tickets para junior.")
    }
    total.innerHTML = "Total a pagar: $ "+ totalaPagar
    console.log(totalaPagar)
}