const $form = document.getElementById('form')

const $inp_name = document.getElementById('inp-name') 
const $inp_lastname = document.getElementById('inp-lastname') 
const $inp_age = document.getElementById('inp-age') 
const $inp_term = document.getElementById('inp_term') 


$form.addEventListener('submit',(e)=>{

    e.preventDefault();

    //const formData = new FormData($form);
    Validation()
    
});


    const formvalidate = 
    {
        name:false,
        lastName: false,
        age: false,
        term: false
    };
    
    $inp_name.addEventListener('change', (e)=>{
        if(!$inp_name.value.trim() || $inp_name.value == undefined)
            alert('Eso esta vacio')
        else
            formvalidate.name = true;
    })
    
    $inp_lastname.addEventListener('change', (e)=>{
        if(!$inp_lastname.value.trim() || $inp_lastname.value == undefined)
            alert('Eso esta vacio')
        else
            formvalidate.lastName = true;
    })


    $inp_age.addEventListener('change', (e)=>{
        if(!$inp_age.value.trim() || $inp_age.value == undefined)
            alert('Eso esta vacio')
        else
            formvalidate.age = true;
    })

    $inp_term.addEventListener('change', (e)=>{
        if(!$inp_term.checked)
            alert('Eso esta vacio')
        else
            formvalidate.term = true;
    })

    
    const Validation = () =>{
        
        //comprobar si es falso algun objeto
        let validateInputs = Object.values(formvalidate)
        //console.log(validateInputs)
        
        if (validateInputs.find((data) => data == true)){
            $form.submit()
        }
        else{
            console.error('Hubo un error no podemos enviar ...')
        }

    }


