/* window.addEventListener('resize', (e) => {
    
    // Representa el viewport, solo sin la barra de pestana o otros elementos externos.
    console.log('Representa la resolucion del viewport')
    console.log(window.innerWidth)
    console.log(window.innerHeight)

    //Resolucion del monitor
    console.log('Resolucion del monitor')
    console.log(window.outerWidth)
    console.log(window.outerHeight)
});
 */



/*  Eventos de carga */

//DOMContentLoaded -> Para Document

/* document.addEventListener('DOMContentLoaded', () =>{
    console.log('A simple messages')
    console.log(event)
})

//load -> Para WIndow

window.addEventListener('load', () => {
    console.log('A simple messages 2')
    console.log(event)

}) */


/* const $btn_open = document.getElementById('btn_open'),
$btn_close = document.getElementById('btn_close'),
$btn_print = document.getElementById('btn_print');

 */

let link;

 document.addEventListener('click', (e) =>{
    if(e.target.matches('#btn_open')){
        link = window.open('http://ecompute3003.rf.gd/');
    }

    if(e.target.matches('#btn_close'))
        link.close()

    if(e.target.matches('#btn_print'))
        window.print()
 })