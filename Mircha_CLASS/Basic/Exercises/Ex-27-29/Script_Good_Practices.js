/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.

  Funcion para validar datos string => FVS
  Funcion para validar datos numbers => FVN
  Funcion para validar datos arrays =>  FVA

      - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
      7 restantes números.FVS

      - Valida que el título no rebase los 100 caracteres.FVS
      - Valida que el director no rebase los 50 caracteres.FVS

      - Valida que el año de estreno sea un número entero de 4 dígitos.FVN

      - Valida que el país o paises sea introducidos en forma de arreglo.FVA ^ FVS 
      - Valida que los géneros sean introducidos en forma de arreglo.FVA ^ FVS

      - Valida que los géneros introducidos esten dentro de los géneros 
        aceptados*.

      - Crea un método estático que devuelva los géneros aceptados*.

      - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
        decimal de una posición. FVN

      - Crea un método que devuelva toda la ficha técnica de la película.

      - Apartir de un arreglo con la información de 3 películas genera 3 
        instancias de la clase de forma automatizada e imprime la ficha técnica 
        de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */




class Pelicula{

  constructor({IMB,Title,Autor,Stream_year,Countries,Genders,Score})
  {
    this.a_IMDB = IMB;
    this.a_Title = Title;
    this.a_Director = Autor;
    this.a_Year_stream = Stream_year;
    this.a_Countries = Countries;
    this.a_Genders = Genders;
    this.a_Score = Score.toFixed(1);

    this.Validate_IMDB("IMDB",this.a_IMDB)
    this.Validate_Range("Título",this.a_Title,100)
    this.Validate_Range("Director",this.a_Director,50)
    this.Validate_yearstream("Anio de Extreno",this.a_Year_stream)
    this.Validate_Arrays("País",this.a_Countries)
    this.Validate_Arrays("Géneros",this.a_Genders)
    this.Validate_Genders_Intro(this.a_Genders)
    this.Validate_Scores("Score",this.a_Score)
    

  }

    Validate_String(property,value1)
    {
      if(value1 === undefined)
      return console.error(`Se requiere que ${property} este en lleno, intente de nuevo.`)

      if(typeof(value1) != "string")
      return console.error(`Se requiere que ${property} sea un string (cadena)`)
      
      return true;
    }


    Validate_IMDB(property,imdb)
    {
      if(this.Validate_String(property,imdb))
      {
        if(!(/^([a-z]){2}([0-9]){7}$/.test(imdb)))
        console.error("El valor de IMDB debe de contener 7 digitos y 2 letras al principio")
      }

    }

    Validate_Range(property,value1,rng)
    {
      if(this.Validate_String(property,value1))
      {
        if(value1.length > rng)
        {
          console.error(`${property} no debe rebasar los ${rng} caracteres.`)
        }

      }

    }


    Validate_number(property,value1)
    {
      if(isNaN(value1) || Math.sign(value1) === -1)
      return console.error(`${property} debe de ser número.`)

      return true;
    }

    Validate_yearstream(property,year)
    {
      if(this.Validate_number(property,year))
      {
        if(year.toString().length != 4)  
        console.error("El año de estreno sea un número *entero* de 4 dígitos.")
      }
    }


    Validate_Arrays(property,valuearg)
    {
       if(valuearg instanceof Array === false || valuearg === undefined)
       {
          return console.error(`Ocurrio un error ${property} debio ser un arrays y no estar vacio.`)
       }

       return true;
    }

    //Statics
    static Gender_Arg = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy","Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];

    static Show_gender(){
     return this.Gender_Arg
    }

    Validate_Genders_Intro(Gender_ihave)
    {
      Gender_ihave.forEach(e => {
        if(Pelicula.Gender_Arg.includes(e) === false)
        console.error("ERROR unos de los generos introduccidos no se encuentran en nuestra lista revisar por favor.")
        Pelicula.Show_gender()
      });

    }

    Validate_Scores(property,score)
    {
      if(this.Validate_number(property,score))
      {
        if(score < 0 || score > 10)
        console.error(`${property} debe de estar de un rango de 0 a 10 puede incluir decimales.`)
      }

    }

    FichaTechcial(){
        console.info(`The movie is: "${this.a_Title}"  with the IMDB: "${this.a_IMDB}"  other property \n Director: "${this.a_Director}",\n genders of movie: "${this.a_Genders}",\n year of it's stream: "${this.a_Year_stream}", \n film on: "${this.a_Countries}"  and for end the score:" ${this.a_Score} ".`)
    }

}


[{IMB:"tt1996520",Title:"The Facebook ",Autor:"Adam Finmann",Stream_year:2011,Countries:["United State","Domican Republic"],Genders:["Comedy"],Score:7.6888},{IMB:"tt0137523",Title:"El club de la lucha",Autor:"David Fincher",Stream_year:1999,Countries:["United State (USA)"],Genders:["Comedy","Game-Show"],Score:7.6888},{IMB:"rt1934567",Title:"Five me",Autor:"Edwin Roman",Stream_year:2021,Countries:["United State","Domican Republic"],Genders:["Comedy","Game-Show"],Score:9}].forEach((a) => {

  new Pelicula(a).FichaTechcial()

})

