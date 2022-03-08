const nome= prompt("ciao, qual'è il tuo nome?");
console .log ( nome );

const cognome= prompt("qual'è il tuo cognome");
console .log ( cognome );

const colorepreferito= prompt("quale colore preferisci?");
console .log ( colorepreferito );

let numero= prompt ("numero preferito?");
number=parseInt(numero);
console .log ( numero );

let frase= `${nome} ${cognome} ${colorepreferito} ${numero}`;
console .log (frase);
document.getElementById("frase").innerHTML=frase;