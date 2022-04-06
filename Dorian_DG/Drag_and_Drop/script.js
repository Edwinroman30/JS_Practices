/*
    API drag & drop:

    Existen dos partes principales en esta API, el objeto a arrastrar y la zona donde vamos a dejarlo

    Para controlar estas acciones tenemos varios eventos de cada una de las partes
        Objeto a arrastrar:
            dragstart: Se dispara al comenzar a arrastrar
            drag: Se dispara mientras arrastramos
            dragend: Se dispara cuando soltamos el objeto

        Zona de destino:
            dragenter: Se dispara cuando el objeto entra en la zona de destino
            dragover: Se dispara cuando el objeto se mueve sobre la zona de destino
            drop: Se dispara cuando soltamos el objeto en la zona de destino
            dragleave: Se dispara cuando el objeto sale de la zona de destino
*/

const $drag_star = document.getElementById('drag_star');
const $drag_end = document.getElementById('drag_end');


//* Sinces $drag_star to $drag_end. 

$drag_star.addEventListener('dragstart', (e) =>{

    e.dataTransfer.setData('text-plain', e.target.id)
    e.target.classList.add('active')
    console.log(e.dataTransfer.getData('text-plain'))

})


//! OJO aquí se debe poner obligado el e.preventDefaul() para que se pueda arrastrar o mejor dicho depositar, sino no funcionará.
$drag_end.addEventListener('dragover', (e) =>
{ 
    e.preventDefault()  
    // console.log('Andas por aquí...') 
});


$drag_end.addEventListener('drop', (e)=>{
    e.preventDefault()
    // e.dataTransfer.setData('text-plain',e.target.id)
    const $element = document.getElementById(`${e.dataTransfer.getData('text-plain')}`)
    $drag_end.appendChild($drag_star.removeChild($element))
})




//* Sinces $drag_end to $drag_star. 

$drag_end.addEventListener('dragstart',  (e)=>{
    e.dataTransfer.setData('text-plain',e.target.id)
    console.log(e.dataTransfer.getData('text-plain'))
})


$drag_star.addEventListener('dragover', (e)=> e.preventDefault())

$drag_star.addEventListener('drop', (e)=>{
    e.preventDefault()
    const $element = document.getElementById(`${e.dataTransfer.getData('text-plain')}`)
    $element.classList.remove('active')
    // console.log(e.dataTransfer.getData('text-plain'))
    $drag_star.appendChild($drag_end.removeChild($element))
})


