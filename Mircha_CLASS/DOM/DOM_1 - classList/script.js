const $title = document.getElementById('title')
const $button = document.getElementById('button')
const $list = document.getElementById('list')

const $nav = document.getElementById('nav')

$title.classList.add('title')

// my switch
$title.classList.toggle('title')


$title.addEventListener('mouseover', () => {
    $button.classList.toggle('button')
})


$list.outerHTML = `

<p>God please help me to get a schoolarship</p>
<p>I'm EDwin</p>
<a href="#">Nothing</a>

`

/* Direct Styles*/



$button.addEventListener('click', ()=>{
    $nav.classList.toggle('put_on')
})

//console.log(getComputedStyle(button))
