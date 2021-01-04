const $title = document.getElementById('title'),
$list = document.getElementById('list');


//Parent
/* console.log($title.parentElement)
console.log($list.parentElement)
 */

//Children
console.log($list.children)
console.log($list.children[2])

//Last and first
console.log($list.firstElementChild)
console.log($list.lastElementChild)

//Previous and next siblings
console.log($list.previousElementSibling)
console.log($list.nextElementSibling)


//Method
console.log($list.hasChildNodes())
console.log($list.children[3].closest('h1'))
