const divTitutlo = document.createElement('div');
document.body.appendChild(divTitutlo);

const titulo = document.createElement('h1');
titulo.innerText = 'Ejercicio 1';
divTitutlo.appendChild(titulo);

const buton = document.createElement('button');
buton.innerText = 'Da clic en el boton ingresar los numeros'
divTitutlo.appendChild(buton);

const parrafoSalida = document.createElement('p');
divTitutlo.appendChild(parrafoSalida);


function MensajeTexto(){
    let mensaje = prompt("Por favor, introduce 3 numeros", "Ejemplo: 1, 2, 3");
    let numeros = mensaje.split(',').map(num => parseFloat(num.trim())); //ah numeros le pasamos split para separar el array con ',', despues un .map para iterar el parse float para pasar a numeros y .trim para eliminar los espacios.
    
    if( numeros.length > 0 && !isNaN(numeros[0])){ // Verificar si se ingresaron al menos un número válido
        numeros.sort((a, b) => a - b); // Ordenar los números de menor a mayor


        //Mostrar el resultado en una alerta
        alert(`Los numeros ordenados de menor a mayor son: ${numeros.join(', ')}`);
    }else{
        alert(`Por favor, ingrese numero valido`);
    }
    
}

buton.addEventListener('click', MensajeTexto);

