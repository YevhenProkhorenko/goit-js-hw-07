import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryWrapper = document.querySelector(".gallery");


function createLi(galleryItems) {

    return galleryItems.reduce((acc, img) => acc + `<div class="gallery__item"><a class="gallery__link" href="${img.original}"><img class="gallery__image" src="${img.preview}" data-source="${img.original}" alt="${img.description}"/></a> </div>`, "");
}

const result = createLi(galleryItems);
galleryWrapper.insertAdjacentHTML("beforeend", result);


// function openModal(e) {
//     e.preventDefault();
//     const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600"/>`);
//     window.addEventListener(`keydown`, onKeyPress);
//     function onKeyPress(e) {
//     if (e.key === `Escape`) {        
//         instance.close()
//     }   
// }

//     instance.show();       
// }

galleryWrapper.addEventListener('click', openModal);

const instance = basicLightbox.create(`<img src="" width="800" height="600"/>`, {
        onShow: instance => {
            window.addEventListener(`keydown`, EscapeCloseImg);
        },
        onClose: instance => {
            window.removeEventListener(`keydown`, EscapeCloseImg);
        },
});
function openModal(e) {
    e.preventDefault();
    instance.element().querySelector('img').src = e.target.dataset.source;
    instance.show();
}

function EscapeCloseImg(e) {
    if (e.key === `Escape`) {
        instance.close();
        return; 
    }  
}