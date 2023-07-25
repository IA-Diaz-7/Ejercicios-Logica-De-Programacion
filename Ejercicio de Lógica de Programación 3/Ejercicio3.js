const buton = document.createElement('button');
buton.innerText = 'Pulsa'

const divPrincipal = document.getElementById('divPrincipal');
divPrincipal.appendChild(buton);

const factorial = () =>{
    const mensaje = prompt("Introduce un numero a partir del 1", " Ejemplo: 9");
    const numeroConvertido = parseFloat(mensaje);

    if(isNaN(numeroConvertido || numeroConvertido < 1)){
        alert (`Por favor inserta un numero a partir del 1`);
    }else{
        let resultado = 1;
    for(let i = 1; i <= numeroConvertido; i++){
        resultado *= i;
    }
        alert (`El factorial del numero es: ${resultado}`);
    }
}

buton.addEventListener('click', factorial);