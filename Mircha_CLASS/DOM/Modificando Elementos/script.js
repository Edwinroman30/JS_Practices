/*
Insertar y eliminar elementos II

    parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento de referencia

    SOPORTE TOTAL
    parent.insertAdjacentElement(position, element)

    parent.insertAdjacentHTML(position, HTML)
    parent.insertAdjacentText(position, text)

    positions: 
        beforebegin - Antes de que empiece (hermano anterior)
        afterbegin - después de que empiece (primer hijo)
        beforeend - antes de que acabe (último hijo)
        afterend - después de que acabe (hermano siguiente)

    parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/


const $gridGallery = document.getElementById('grid-gallery'),
$new_Element = $gridGallery.children[3].cloneNode(true);
$new_Element.children[1].textContent = 'Edwin';

/* document.createElement('figure'); 
 $new_Element.classList.add('grid-item') 
$gridGallery.insertAdjacentElement('afterbegin',$new_Element)*/
 




/*
    DOM manipulation convenience methods - JQuery Like
    https://caniuse.com/#search=jQuery-like

    positions:
        parent.before() - Antes de que empiece (hermano anterior)
        parent.prepend() - después de que empiece (primer hijo)
        parent.append() - antes de que acabe (último hijo)
        parent.after() - después de que acabe (hermano siguiente) 

        child.replaceWith(newChild)
*/

// EXamples.

/* 
$gridGallery.before($new_Element) 
 $gridGallery.prepend($new_Element)
 $gridGallery.append($new_Element) 
 $gridGallery.after($new_Element) 
 */

$gridGallery.children[1].after($new_Element)


/*
    Clonar y eliminar elementos
        element.cloneNode(true|false) - Clona el nodo. Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin hijos

        element.remove() - Elimina el nodo del DOM
        element.removeChild(child) - Elimina el nodo hijo del DOM
*/

let timer_1 = setTimeout(()=>{
    $gridGallery.removeChild($gridGallery.lastElementChild)
},3000);

// Para asegurar la RAM
clearTimeout(timer_1);