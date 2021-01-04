/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía

Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/

class Book{

    constructor(title,author,year,gender)
    {
       
        this.title = title
        this.author= author
        this.year=year
        this.gender=gender

    }

    getInf()
    {
     return `${this.title}, was write by ${this.author} in ${this.year} and gender is ${this.gender}`;
    }

    }


    books = []

    while(books.length < 3)
    {

       let title = prompt('Introduce a title of the book:')
       let author = prompt('Introduce its author:')
       let year = prompt('Year:')
       let gender = prompt('introduce a gender:').toLocaleLowerCase()


       if(title != '' &&
         author != '' && 
         year.length ==+ 4 &&
         !isNaN(year) &&
         (gender=='aventura' || gender=='terror'|| gender=='fantasía'))
         {
            books.push(new Book(title,author,year,gender))
         }
         else {
             alert('Errrooorrrr') 
             break
         }

    }


    const show_all = (algo) =>
    {
         console.log(algo);   
    }

    const order_Author = (algo) =>
    {
        const compare = new Intl.Collator().compare;
        xxx_mf = []

        for(let bk of algo)
        { 
             xxx_mf.push([bk.author])   
        }
        console.log('Order by Authors:')
        console.log(xxx_mf.sort(compare));
    }


    const get_by_gender = (algo) =>
    {

    let genero =prompt('by gender')
    
    for(let k of algo)
    {
        if([k.gender] === genero){
            console.log(k.getInf())
        }
    }
     
    }

    show_all(books)
    order_Author(books)
    get_by_gender(books)

