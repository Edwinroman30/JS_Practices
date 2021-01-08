const $list = document.getElementById('list');
let xhr,data_set;

if(XMLHttpRequest){
    xhr = new XMLHttpRequest();
}
else{
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

xhr.open('GET','data.php');

xhr.addEventListener('load', (data) =>{
    const $fragment = document.createDocumentFragment();
    data_set = JSON.parse(data.target.response);
    data_set.forEach((user) =>{
        const $li = document.createElement('li')

        $li.textContent = user;
        $fragment.append($li)
    })

    $list.append($fragment);
});

xhr.send();