//Immediately invoked function expression (IIFE)
//                      o
//Funciones Anónimas Auto-ejecutables

//Es un patrón de JS que se utilizaba para el encazulamiento de nuestro código, se veia mucho en Jquery 
//para crear plugings.


(function(C){
    C.log("A IIFE with void in JS")
})(console);


// "counter" is a function that returns an object with properties, which in this case are functions.
let num = 9

const ano = ((n1)=>{
        
    return {
        Retro: function(){
            return n1
        },

        Plus: function (){
             return (n1+1) 
        },

        Multi: () =>{
            return Math.pow(n1,2)
        }
        
    }
})(num);

console.log(ano.Multi())

//Example from >>> https://en.wikipedia.org/wiki/Immediately_invoked_function_expression

// Differents ways to write a IIFE

/* (function(C){
    C.log('Normal way')
})(console);

( (W) => {
    console.log(W)
})(window);
 */

!function () { /* ... */ }(); // Facebook.
~function () { /* ... */ }();
-function () { /* ... */ }();
+function () { /* ... */ }(); // Unitaria.
void function () { /* ... */ }();

//La Crockford (JavaScript The Good Parts)
((function(){
    console.log('version Crockford')
})());


