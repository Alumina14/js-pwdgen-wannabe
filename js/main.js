// js

// Creare la variabile nome
// Chiedere all'utente il suo nome con prompt
// Creare la variabile cognome
// Chiedere all'utente il suo cognome con prompt
// Creare la variabile colore
// Chiedere all'utente il suo colore preferito con prompt
// scrivere nella pagina html con il comando .getdocument .getelementbyid e .innerhtml


var nome;
var cognome;
var colore;

nome = prompt("Inserisci il tuo nome:");
cognome = prompt("Inserisci il tuo cognome:");
colore = prompt("Inserisci il tuo colore preferito:");

document.getElementById('pwdid').innerHTML = "Password generata: " + nome + cognome + colore + "19";
