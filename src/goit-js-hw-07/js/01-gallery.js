import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
const itemGallery = galleryItems.map((elem) =>
    `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
            <img
               class="gallery__image"
               src=${elem.preview}
               data-source=${elem.original}
               alt=${elem.description}
            />
         </a>
      </div>`).join('');
document.querySelector('.gallery').insertAdjacentHTML("beforeend", itemGallery);
gallery.addEventListener('click', onImgClick);
function onImgClick(event) {
     event.preventDefault();
     if (event.target.nodeName !== "IMG") {
      return;
     }
    basicLightbox.create(`
		<img width="1400" height="900" src=${event.target.dataset.source}>
	`).show()
    console.log(event);
}
console.log(galleryItems);


