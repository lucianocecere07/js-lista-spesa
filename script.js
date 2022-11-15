/*Data una lista della spesa già compilata nel vostro codice, stampare in console gli elementi della lista individualmente, prima con un ciclo for, poi con un ciclo while.
Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato in HTML, utilizzando uno dei due cicli scritti al punto precedente.*/

let arraySpesa = ["latte", "uova", "mele", "pasta", "arance"];

/*
for (i = 0; i < arraySpesa.length; i++) {
    console.log("elemento da comprare: " + arraySpesa[i]);
}
*/


let i = 0;
while (i < arraySpesa.length) {
    console.log("elemento da comprare: " + arraySpesa[i]);
    i++;
}