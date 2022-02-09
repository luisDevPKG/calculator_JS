function sumar() {
    const form = document.getElementById("form");
    let operandoA = form["operandoA"];
    let operandoB = form["operandoB"];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado)) {
        resultado = "No se puede realizar la operación. Por favor ingresa dos números.";
    }
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}