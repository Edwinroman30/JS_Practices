class Animal{

    constructor(cname,cpatas){
        this.name = cname;
        if(cpatas < 2){
            this.patas =  new Error("No es un animal.")
        }else{
           this.patas = cpatas;
        }
        
    }

    get get_name(){
        const replaces = this.name
        
        if(replaces != null){
            return this.name;
        }
        else{
            console.log("Never to see")
        }
    }

    Comunication(){
        console.log(`Soy un animal mi nombre es: ${this.name} y tengo ${this.patas}`)
    }
    
}

class Perro extends Animal{
    constructor(cname,cpatas,cgenero){
        super(cname,cpatas)
        this.genero = cgenero
    }

    Comunication(){
        console.log(`Soy ${this.name}, ${this.patas} y mi genero es ${this.genero}`)
    }//Sobre escritura del metodo.

}



const A1 = new Animal("Pipo",4)
A1.Comunication()

const A2 = new Animal("Brunii",1)
A2.Comunication()

const Guibito = new Perro("Melios",4,"Macho")

Guibito.Comunication()

console.group("Inicio")
console.groupCollapsed("CON")
console.info(Guibito.get_name)
console.groupEnd()
console.info(A1.get_name)
console.groupEnd()