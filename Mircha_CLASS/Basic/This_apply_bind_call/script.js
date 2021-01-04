
/* 
//! NEW trick

function Obc (){
    console.log(... arguments)
}

// La funcion no recive nada; pero si pasamos algo...
// este arguments lo recive y podemos manejarlo.

Obc('Twenty five')
 */


// ? START WITH BIND
//* https://javascript.info/bind

function Calculator(){
    console.log(`${this.a} + ${this.b} = ${(this.a+this.b)}`)
}

const obj = {
    a:25,
    b:2
}

//Produce un error, no reconoce Scope de donde hace refencia.
Calculator(obj)

//La funcion bind() resuelve ese scope del this. y debe se ser almacenada en alguna funcion
let bound = Calculator.bind(obj)

bound()
obj.a = 49
bound()


console.log('Otro ejemplo.....')

function passwordAsk(ok,fail){

    if(prompt('Write pass:') == 'cukis')
    ok()
    else
    fail()
}


const user = {
    name: 'Edow',
    loginOk(){
        console.log(`well, ${this.name} your are in the sesion`)
    },
    loginFail(){
        console.error(`bad, due try againt sesion`)
    }

}

//* Si, no llego aplicar el bind no reconocera la propiedad del objeto la cual estoy llamando.
passwordAsk(user.loginOk.bind(user),user.loginFail)
