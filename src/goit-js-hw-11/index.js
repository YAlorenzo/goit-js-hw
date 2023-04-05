import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form__input');
const submitButton = document.querySelector('.search-form__submit');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');



form.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', onClickButton);
gallery.addEventListener('click', onItemGalleryClick);
let page = 1;
let currentValue = input.value.trim(); 


function onFormSubmit(event) {
    event.preventDefault();
    getPhoto(input.value.trim()).then(renderPhotoCart).catch(onError);
    event.currentTarget.reset();
}

function onClickButton(event) {
    getPhoto(currentValue).then(renderPhotoCart).catch(onError);
}

async function getPhoto(name) {
   if (currentValue === name) {
        page += 1;
    } 
    else {
        page = 1; 
        currentValue = name;
        gallery.innerHTML = ''; 
        loadMoreBtn.classList.remove('hidden_js');
    }
    const response = await axios.get(`https://pixabay.com/api/?key=34999310-a009070e56ee479e2f86d037c&image_type=photo&q=${name}&orientation=horizontal&safesearch=true&per_page=40&page=${page}`);
    
    return response;    
}
function renderPhotoCart(response) {
    let responsData = response.data.hits;
    console.log(responsData);
    console.log(responsData.length);
    
    
    if (responsData.length !== 0) {
          loadMoreBtn.classList.add('hidden_js');
    }

     if (responsData.length === 0) {
          Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
    }
            const photoCart = responsData.map((elem) => `
                <div class="photo-card">
                    <a class="gallery__item" href=${elem.largeImageURL}>
                    <img class="gallery__image" src=${elem.webformatURL} alt=${elem.tags} loading="lazy" />
                    <div class="info">
                        <p class="info-item">
                        <b>Likes: ${elem.likes}</b>
                        </p>
                        <p class="info-item">
                        <b>Views: ${elem.views}</b>
                        </p>
                        <p class="info-item">
                        <b>Comments: ${elem.comments}</b>
                        </p>
                        <p class="info-item">
                        <b>Downloads: ${elem.downloads}</b>
                        </p>
                    </div>
                    </a>
                </div>
               
            `).join('');
        gallery.insertAdjacentHTML("beforeend", photoCart);
        }



function onItemGalleryClick(event) {
    event.preventDefault();
     if (event.target.nodeName !== "IMG") {
        return;
    }
    let lightbox = new SimpleLightbox('.gallery a', {});  
}


function onError(error) {
    if (error.response.status === 400) {
        Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
        loadMoreBtn.classList.remove("hidden_js");
   }
 }

