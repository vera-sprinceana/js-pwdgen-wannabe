const nome= prompt("ciao, qual'è il tuo nome?");
console .log ( nome );

const cognome= prompt("qual'è il tuo cognome");
console .log ( cognome );

const colorePreferito= prompt("qual'è il tuo colore preferito?");
console .log ( colorePreferito );

let frase= `${nome}${cognome}${colorePreferito}21`;
console .log (frase);
document.getElementById("frase").innerHTML=frase;