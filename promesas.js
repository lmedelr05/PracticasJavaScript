const datos = [1, 2, 3, 4, 5, 6]

const myPromise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve(datos);
        })
    }
)

console.log(myPromise);

console.log('Inicia promesa');

myPromise.then((data) => {
    console.log(data);
    console.log('Finaliza promesa');
})

console.log('El codigo continua');
