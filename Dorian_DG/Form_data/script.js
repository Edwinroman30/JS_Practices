const  $form = document.getElementById('form'),
$btn = document.getElementById('send');


$form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData($form);

    let imgSrc = URL.createObjectURL(formData.get('myfile')) 
    document.querySelector('img').setAttribute('src',imgSrc)

})