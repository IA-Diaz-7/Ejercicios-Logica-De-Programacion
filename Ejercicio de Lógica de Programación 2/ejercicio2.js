const div = document.getElementById('divP');

const input = document.createElement('input');
const label = document.createElement('label');

const boton = document.createElement('button');
boton.innerText = 'Pulsa aqui para convertir a fahrenheit';

const boton2 = document.createElement('button');
boton2.innerText = 'Pulsa aqui para tu temperatura en Celsius'


div.appendChild(boton);
div.appendChild(label);
div.appendChild(input);
div.appendChild(boton2);

function temperaturaC(){
    let tempCelsius = parseFloat(input.value);  // Obtener y convertir el valor a numérico del input
    if(isNaN(tempCelsius)){
        alert(`Por favor introduce uyn numero valido`);
        return; // Salir de la función si no se ingresó un número válido
    }
    
    if(tempCelsius < 10 ){ //En esta seccion designamos los rangos de temp
        alert( `Que frio, la temperatura es de: ${tempCelsius} celsius`);
    }else if( tempCelsius >= 10 && tempCelsius <= 20){
        alert(`Esta templado, la temperatura es de: ${tempCelsius} celsius`)
    }else if( tempCelsius >= 21 && tempCelsius <= 100){
        alert(`Que calor!!, la temperatura es de: ${tempCelsius} celsius`)
    }else{
        alert('Ingresa una temperatura entre -273.15 y 100 Celsius');
    }
}

boton2.addEventListener('click', temperaturaC);



function temperatuF (){

    let tempCelcius = parseFloat(input.value);  // Obtener y convertir el valor a numérico del input
    if(isNaN(tempCelcius)){
        alert('Por favor, ingresa un número válido');
        return; // Salir de la función si no se ingresó un número válido
    }

    let conversion = tempCelcius * 1.8 + 32; //Variable de conversion

    if(conversion < 50 ){
        alert( `Que frio, la temperatura es de: ${conversion} fahrenheit`);
    }else if( conversion >= 50 && conversion <= 68){
        alert(`Esta templado, la temperatura es de: ${conversion} fahrenheit`)
    }else if( conversion >= 69.8 && conversion <= 212){
        alert(`Que calor!!, la temperatura es de: ${conversion} fahrenheit`)
    }else{
        alert(`'Ingresa una temperatura entre -459.67 y 212 Fahrenheit'`)
    }
}

boton.addEventListener('click', temperatuF);