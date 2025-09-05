//INPUT
//stabilisci età
let ageUser = 18 

//km scelti da utente
let km

//prezzo equivalente di prezzo al km
const priceKm = 0.21

//discount di base
let discount = 0

//prezzo finale
let finalPrice;


//leggo i km e età utente
const kmField = document.getElementById("userKm");
const age = document.getElementById("userAge");
const button = document.querySelector("button");
const userNameField = document.getElementById("userName");

//AGGIUNGO AZIONE AL PULSANTE
button.addEventListener("click", () => {
const km = Number(kmField.value);
const ageUser = Number(age.value);
const nomeUser = (userNameField.value);

//calcolo prezzo totale per adulti
let totalPrice = priceKm * km; 

//calcolo prezzo per minorenni e senior
if (ageUser < 18) {
discount = 20;
}

else if (ageUser > 65) {
discount = 40;
}

else {
    discount = 0;
}

//OUTPUT 
finalPrice = totalPrice * (1 - discount / 100);
console.log(finalPrice.toFixed(2) +" €");

//inserire più elementi nel dom

//seleziono gli elementi del DOM
 const nomeRipetizione = document.getElementById("name-repetition");
 const costoRipetizione = document.getElementById("cost-repetition");

 //inserico il nome 

nomeRipetizione.innerHTML = nomeUser;
costoRipetizione.innerHTML = finalPrice.toFixed(2) +" €";
});


