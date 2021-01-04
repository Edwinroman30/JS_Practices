/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  
  - Todos los datos del objeto son obligatorios.

  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.

  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.

  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.

  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.



  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

const valores = [["rt1234567","Five me","Edwin ROman",2021,["United State","Domican Republic"],"Comedy",9.3], ["mf1234567","Runing away","Edwin ROman",2026,["United State"],"Sci-Fi",9.9], ["pe1234567","Litle Baby","Paola Pena",2020,["Cananda"],"Family",10] ]

class Pelicula
{

  constructor(movie)
  {
    this.a_IMDB = movie[0]
    this.a_Title = movie[1]
    this.a_Director = movie[2]
    this.a_Year_stream =movie[3]
    this.a_Countries = movie[4]
    this.a_Genders = movie[5]
    this.a_Score = movie[6]
    this.card = movie;
    this.a_Acept_genders = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy","Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
   
  }

  
  Validate_string(t_IMDB,t_Title,t_Director,t_Genders)
  {
    /* 
    - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
    - Valida que el título no rebase los 100 caracteres.
    - Valida que el director no rebase los 50 caracteres.
     */

    if(t_IMDB === undefined || t_Title === undefined || t_Director === undefined || t_Genders === undefined)
    console.error("Se requiere que todos los registros esten en llenos, intente de nuevo.")
    
    const expresion = /[a-z]/ig

    if(t_IMDB.length != 9 && (expresion.test(t_IMDB[0]) && expresion.test(t_IMDB[1])))
    console.warn("El valor de IMDB debe de contener 9 digitos y 2 letras al principio")

    if(t_Title.length > 100)
    console.error("Título no debe rebasar los 100 caracteres.")

    
    if(t_Director.length > 50)
    console.error("Director no debe rebasar los 50 caracteres.")

    if(typeof(t_Genders) != "string")
    console.error("ERROR el genero debe de ser un String")

  }

  Validate_numbers(t_Year_stream,t_Score)
  {

  /*   - Valida que el año de estreno sea un número entero de 4 dígitos.
       - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
        decimal de una posición. */

    if(t_Score === undefined || t_Year_stream === undefined)
    console.error("Se requiere que todos los registros esten en llenos, intente de nuevo.")

    if(isNaN(t_Year_stream) || t_Year_stream.toString().length != 4 || Math.sign(t_Year_stream) === -1)
    console.error("El año de estreno sea un número *entero* de 4 dígitos.")

    if(isNaN(t_Score) || t_Score < 0 || t_Score > 10)
    console.error("la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.")

  }

  Validate_arrays(t_Countries)
  {
   /*  - Valida que el país o paises sea introducidos en forma de arreglo.
       - Valida que los géneros sean introducidos en forma de arreglo.
   */

    if(t_Countries === undefined)
    console.error("Se requiere que todos los registros esten en llenos, intente de nuevo.")

    if(t_Countries instanceof Array === false /* || t_Genders instanceof Array === false */)
    console.warn("Ocurrio un error con los tipos de datos en los arrays.")

  }

  Gender_validate()
  {
    /* 
     - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
    - Crea un método estático que devuelva los géneros aceptados*. */

    this.a_Acept_genders.forEach((a) => 
    {
      if(a != this.a_Genders)
      {
        console.error("Se ha producido un error el genero insertado no se encuetra en la lista")
        
      }
    })
  
  }



  static Get_genders()
  {  
    
   return this.a_Acept_genders.forEach((a) => {console.log(a)})
    
  }

  Technical_card()
  {
    console.table(this.card)
  }

  /* Validate_string(a_IMDB,a_Title,a_Director,a_Genders)
  Validate_numbers(a_Year_stream,a_Score)
  Validate_arrays(a_Countries)
  Gender_validate() */

}

console.log("Estos son los géneros validos:")
Pelicula.Get_genders()

for(let x = 0; x< valores.length; x++)
{
  for(let y = 0; y < valores[x][y].length; y++)
  {

    new Pelicula(valores[x][y]).Technical_card()

  }

}



