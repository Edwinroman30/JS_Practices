const $gridGallery = document.getElementById('grid-gallery'),
$template = document.getElementById('templete'),
$fragment = document.createDocumentFragment();

const cardContent = [
    {
        title: "Tecnología",
        img:"https://placeimg.com/200/200/tech"
    },
    {
        title: "Animales",
        img:"https://placeimg.com/200/200/animals"
    },
    {
        title: "Arquitectura",
        img:"https://placeimg.com/200/200/arch"
    },
    {
        title: "Gente",
        img:"https://placeimg.com/200/200/people"
    },
    {
        title: "Naturaleza",
        img:"https://placeimg.com/200/200/nature"
    }
];

// ! No necesario.
 /* const $figure = document.createElement('figure');
$figure.classList.add('grid-item'); */



cardContent.forEach((elem) => {
    $template.querySelector('img').setAttribute('src', elem.img);
    $template.querySelector('img').setAttribute('alt', elem.title);
    $template.querySelector('figcaption').textContent = elem.title;

    let $clone = document.importNode($template, true);

    $fragment.appendChild($clone);
});

$gridGallery.appendChild($fragment);

