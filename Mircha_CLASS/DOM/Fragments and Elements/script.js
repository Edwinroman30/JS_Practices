const $list = document.getElementById('list'),
fragment = document.createDocumentFragment();

const number = ['One','Two','Three','Four','Five','SIX'];

number.forEach((e) => {
    const itemList = document.createElement('li');
    itemList.textContent = e;
    fragment.appendChild(itemList)
})

console.dir(fragment)
$list.appendChild(fragment)


const $img = document.createElement('img')
$img.classList.add('img')
$img.setAttribute('src','https://loremflickr.com/640/360')

const $gallery = document.querySelector('.grid-container-gallery')

setTimeout(() =>{

    $gallery.appendChild($img)

},5000)

clearTimeout();