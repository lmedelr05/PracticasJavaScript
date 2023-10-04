const url = "https://127.0.0.1:5500/";

console.log('Inicia Petición 1');
fetch(url + 'respuesta.txt')
    .then(respuesta => respuesta.text())
    .then(datos => console.log(datos))
    .catch(error => console.log(error))


console.log('Inicia Petición 2');
fetch(url + 'respuesta.json')
    .then(respuesta => respuesta.text())
    .then(datos => console.log(datos))   
    .catch(error => console.log(error))