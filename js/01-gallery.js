import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryWrapper = document.querySelector(".gallery") 

function createLi(galleryItems) {

    return galleryItems.reduce((acc, img) => acc + `<div class="gallery__item"><a class="gallery__link" href="${img.original}"><img class="gallery__image" src="${img.preview}" data-source="${img.original}" alt="${img.descreption}"/></a> </div>`, "");
}

const result = createLi(galleryItems);
galleryWrapper.insertAdjacentHTML("beforeend", result);

function listHandler(e) {
    e.preventDefault();
    const dataSource = e.target.dataset.source;
    console.log(dataSource);
}
galleryWrapper.addEventListener('click', listHandler)

console.log(galleryItems);
