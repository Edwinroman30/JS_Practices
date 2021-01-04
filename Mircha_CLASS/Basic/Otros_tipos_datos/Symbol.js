// El Symbol es un tipo de dato nuevo en EMCSCRIPT 6 que
// sirve para encapsular los objetos o hacerlos mas privados.

const NAME = Symbol('Indica en nombre de usuario') //* Para el nombre de usuario.
const PASS = Symbol('pass***') //? Para la contrasena de usuario.
const DOsmt = Symbol('Function TODO Something.')

const User = 
{
    [NAME]: 'Carlos',
    username: 'cocomend@gmail.com',
    [PASS]: 'dojo cat lover',
    [DOsmt]()
    {
        console.info('Greating for all my FANS.');
    }
};



console.log(User[NAME] = 'PAOLO')

console.info(User[DOsmt]()) 

console.log(Object.getOwnPropertySymbols(User))
console.info(User)