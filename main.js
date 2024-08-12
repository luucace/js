// Ejercicio 1

// function verificarParidad (num) {
//     if (num % 2 === 0) {
//         console.log (`${num} es par`)
//     } else {
//         console.log (`${num} es impar`)
//     }
// }

// verificarParidad (10)
// verificarParidad (35)
// verificarParidad (77)
// verificarParidad (8)


// Ejercicio 2





// function compararNumeros (num1, num2) {
//     if (num1 > num2) {
//         console.log  (`${num1} es mayor que ${num2}`)
//     } else if (num1 < num2) {
//         console.log (`${num2} es mayor que ${num1}`)
//     } else {
//         console.log (`${num1} y ${num2} son iguales`)
//     }
// }

// compararNumeros (15, 10);
// compararNumeros (5, 30);
// compararNumeros (78, 22);
// compararNumeros (10, 10);
// compararNumeros ( 42, 100);





// Ejercicio 3

// function multiplosdeCinco (numero) {
//     if (numero % 5 === 0) {
//         console.log (`${numero} Es multiplo de 5`)
//     } else {
//         console.log (`${numero} No es multiplo de 5`)
//     }
// }


// multiplosdeCinco (5)
// multiplosdeCinco (53)
// multiplosdeCinco (50)
// multiplosdeCinco (12)
// multiplosdeCinco (30)






// Ejercicio 4

// function numero (num) {
//     for (let i = 0 ; i <= 10; i++) {
//         console.log (i)
//     }
// }

// numero(10)





// Ejercicio 5

// const repetirPalabra =(palabra, veces) => {
//     for (let i = 0; i < veces; i++) {
//         console.log (palabra)
//     }
// }


// repetirPalabra ("hola", 4)






// Ejercicio 6

// const imprimirArray = (nombres) => {
//     for (let i = 0; i <nombres.length; i++) {
//         console.log (nombres[i])
//     }
// }

// imprimirArray([1,2,3,4,5])






// Ejercicio 7

// const imprimirArray = (nombres) => {
//     for (let i = 0; i < nombres.length; i++) {
//         if (i === 4) {
//             continue;
//         }
//         console.log (nombres[i])
//     }
// }

// imprimirArray ([10,20,30,40,50,60,70])






// Ejercicio 8
const imprimirArray = (array, numero) => {
    for (let i = 0; i < array.length; i++) {
        console.log (array[i] * numero)
    }
}

imprimirArray ([1,2,3,4,5], 2)
 


