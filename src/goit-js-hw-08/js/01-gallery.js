// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
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
// Change code below this line

console.log(galleryItems);
