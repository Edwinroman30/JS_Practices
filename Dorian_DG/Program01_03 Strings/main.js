    let cadena = "Hello  World";

console.log(cadena.length);
console.log(cadena.trim());
console.log(cadena.toLocaleLowerCase());
console.log(cadena.replace("Hello","Love"));

let cadena2 = cadena.replace("Hello","I love this");

console.log(cadena2);

console.log(cadena2.indexOf("love")); // Position where there is the words.
console.log(cadena2.length);
let name = " Edwin";
console.log(cadena2.substring(0,6) + name);

console.log(`${name}  ${cadena2}`);


//console.log("e".repeat(1000));
console.log(cadena);
console.log(cadena.endsWith("world"));// if the string end with the condicion..

//window.document.write("<h1>Buenos dias Mr.Edwin Roman</h1>");
