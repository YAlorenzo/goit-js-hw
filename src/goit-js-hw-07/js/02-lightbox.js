import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')
const itemGallery = galleryItems.map((elem) =>
    `<a class="gallery__item" href=${elem.original}>
  <img class="gallery__image" src=${elem.preview} alt="" title=${elem.description}/>
</a>`).join('');
document.querySelector('.gallery').insertAdjacentHTML("beforeend", itemGallery);
gallery.addEventListener('click', onImgClick);
function onImgClick(event) {
     event.preventDefault();
     if (event.target.nodeName !== "IMG") {
        return;
     }
   
}
let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay : 250
  });
   


console.log(galleryItems);
