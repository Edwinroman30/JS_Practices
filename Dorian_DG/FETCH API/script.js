const $btn = document.getElementById('btn');
const $fragmet = document.createDocumentFragment()


$btn.addEventListener('click', () =>{

    if(!('fetch' in window)){
        console.log('Lo sentimos pero debido a su navegador no podrá disfrutar ciertas funcionalidades.')
    }
    else
    { 
       const myObj = {"userId": 303,"title": "sapiente omnis fugit eos","body": "consequatur omnis est praesentium\nducimus noned"};
        
        
        fetch('https://jsonplaceholder.typicode.com/posts', {
             method: 'POST',
             body: JSON.stringify(myObj),
             headers: {
                "Content-type" : "application/json"
             }
        })
        .then((response)=>response.json())
        .then((data) =>{
            
            const $card = document.createElement('div')
            $card.classList.add('card')

            const $title = document.createElement('div')
            $title.classList.add('title')
            $title.textContent = data.title;
          
            const $body = document.createElement('div')
            $body.classList.add('body')
            $body.textContent = data.body;

            const $id = document.createElement('div')
            $id.classList.add('id')
            $id.textContent = data.id;
                 
            $fragmet.append($title)
            $fragmet.append($body)
            $fragmet.append($id)
            $card.append($fragmet)
            document.body.append($card)
            
        })
        .catch((err) => console.log('Something went wrong... :(' + err))
    
    }


});




