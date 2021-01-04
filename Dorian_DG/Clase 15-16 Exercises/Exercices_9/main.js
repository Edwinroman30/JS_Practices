/*9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y 
longitud de la palabra.
*/


let word = prompt('Insert one word').toLowerCase();

let numvowel = 0;
let numcons = 0;

for (let i = 0; i < word.length; i++) {
	
	if(word[i] == 'a'|| word[i] =='e' || word[i] =='i' || word[i] =='o' || word[i] =='u'){
		numvowel++
	}else{
		numcons++
	}
}

console.log(`The length of ${word} is ${word.length}, total of vowels are =${numvowel} and consonant ${numcons} `)