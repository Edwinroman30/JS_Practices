

const $btn = document.getElementById('btn-active'),
$poke_name = document.getElementById('pokeName'),
$poke_img = document.getElementById('pokeImg');


$btn.addEventListener('click',(e) =>{

    function renderPoke(){

        axios({
            method:'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${Math.round((Math.random()*100))}`
        })
        .then((data) =>{
               const Pokemon = data.data;
               $poke_img.setAttribute('src',Pokemon.sprites.front_shiny); //
               $poke_name.textContent = `${Pokemon.name} - ${Pokemon.abilities[0].ability.name}`;

               console.log(Pokemon)
        })
        .catch((err) =>{
            console.error('Error encontrado....',err)
        })
    }   

    renderPoke()

})


//SAME THING BUT WITH THE POST METHOD AND DIFFERENT API


/*$btn.addEventListener('click',(e) =>{


        axios({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                "userId": 2,
                "id": 4,
                "title": "Working with Axios library",
                "body": "Working with AXIOS and dont die to try it. "
              } 
            })
            .then((result) => {
                console.log(result)   
            }).catch((err) => {
                console.log(err)
            });

});*/