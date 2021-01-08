let xhr;
const $list = document.getElementById('list')

if('XMLHttpRequest' in window)
{
    xhr = new XMLHttpRequest()
}
else
{   xhr = new ActiveXObject("Microsoft.XMLHTTP");
    console.error("Su navegador no es compatible con XMLHTTPREQUEST")
}


xhr.open("GET",'https://jsonplaceholder.typicode.com/users')

    xhr.addEventListener('load', (data) =>{
        const data_parse = JSON.parse(data.target.response)
        const $fragment = document.createDocumentFragment()

        console.log(data)
        
        data_parse.forEach(user => {
            
            const $ol = document.createElement('li')
            $ol.textContent = user.name;
            $fragment.appendChild($ol)
        });

        $list.appendChild($fragment)
    })

    xhr.send();