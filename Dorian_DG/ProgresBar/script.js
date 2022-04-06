/* 
El objeto FileReader permite que las aplicaciones web lean ficheros (o información en buffer)
almacenados en el cliente de forma asíncrona, usando los objetos File o Blob dependiendo de los datos que se pretenden leer.
*/

const $input_file = document.getElementById('input_file')
const $bar_container = document.getElementById('bar_container')
const $bar_proggress = document.getElementById('bar_proggress')

//Esta forma trabaja con dos elementos.
$input_file.addEventListener('change', (e)=>{
    const $file =  e.target.files[0]
    const $fileReader = new FileReader()
    $fileReader.readAsDataURL($file)


    $fileReader.addEventListener('progress', (e) =>{
       /*  console.log(e.loaded)
        console.log(e.total) */
        $bar_proggress.style.width = parseInt(e.loaded*100 / e.total) + '%'
    })
})


//const $barra = document.querySelector('.barra') it´s not need it.
const root = document.documentElement

$input_file.addEventListener('change', (e) =>{
    const $file = e.target.files[0]
    const $fr = new FileReader()

    $fr.readAsDataURL($file)

    $fr.addEventListener('progress', (e)=> {
        root.style.setProperty('--bar_width', (parseInt(e.loaded * 100 /e.total) + '%'))
        console.log(parseInt(e.loaded * 100 /e.total))
    })
})