// FORMULARIO

const nombre = prompt('Complete el siguiente formulario:\nNombre:');
if(nombre == ''){
    alert('Usted no es humano');
}
const edad = prompt('Edad:');
if(edad < 0 || edad == ''){
    alert('Usted no es humano');
}
const sexo = prompt('Sexo (M/F/NB):');
const colorFav = prompt('Cual es su color favorito:');
let etapa;
let genero;
let color;



if(edad > 0 && edad <= 20){
    etapa = 'adolescente';
}
else if(edad < 60){
    etapa = 'adulto';
}
else{
    etapa = 'de la tercera edad';
}

switch(sexo){
    case 'M':
        genero = 'masculino';
        break;

    case 'F':
        genero = 'femenino'
        break;
        
    case 'NB':
        genero = 'no binario';
        break;
    
    default:
        alert('usted no es humano');
}

if(colorFav == 'rojo' || colorFav == 'verde' || colorFav == 'azul'){
    color = 'primario';
}
else{
    color = 'no primario';
}

console.log(`Usted se llama ${nombre}, es ${etapa}, de genero ${genero} y su color favorito es ${color}.`);