import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import { fetchCountriesCard } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const countryСard = document.querySelector('.country-card');
const listProposedCountry = document.querySelector('.list_proposed_country');
const form = document.querySelector('.search_form');



 

input.addEventListener('input', debounce(requestCountries, DEBOUNCE_DELAY));
form.addEventListener('submit', onFormSubmit);


// input event handling function
function requestCountries(event) {
    let nameCountries = input.value.trim();

    if (nameCountries) {
         fetchCountriesCard(nameCountries).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
        .then(renderCountryList)
        .catch(errorCountryInfo);
    }
}
 
// event handling function submit
function onFormSubmit(event) {
    event.preventDefault();
    let nameCountries = input.value.trim();
    if (nameCountries) {
         fetchCountries(nameCountries).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
        .then(renderCountryCard)
        .catch(errorCountryInfo);
    }
    listProposedCountry.innerHTML = '';
    event.currentTarget.reset();
    
}
// creating a list of search results
function renderCountryList(data) {
    if (data.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        countryСard.innerHTML = '';
        listProposedCountry.innerHTML = '';
    }      
    if (data.length >= 2 && data.length <= 10) {
        const listCountry = data.map((elem) => 
        `<li class="list_item"><img class = 'img_flag'src = ${elem.flags.svg}  width = 30px height = 20px>${elem.name.common}</li>`).join('');
        listProposedCountry.innerHTML = listCountry;
        countryСard.innerHTML = '';
        
        const listItem = document.querySelectorAll('.list_item');

        listItem.forEach(elem => {
            elem.addEventListener('click', clickHandler);
        });

        function clickHandler(e) {
            input.value = e.currentTarget.textContent;
            }; 
    }
}

// country information card creation function
function renderCountryCard(data) {   
  console.log(data);
 if (data.length === 1) {
     const renderCountryСard = data.map((elem) => 
     `<h1 class="h1_name_country"><img class = 'img_flag'src = ${elem.flags.svg}  width = 70px height = 40px>${elem.name.official}</h1>
        <ul class="ul_country">
            <li class="li_country"><span>Capital: </span>${elem.capital}</li>
            <li class="li_country"><span>Population: </span>${elem.population}</li>
            <li class="li_country"><span>Languages: </span>${Object.values(elem.languages)}</li>
        </ul>`).join('');
        countryСard.innerHTML = renderCountryСard;
        listProposedCountry.innerHTML = '';
    }
}


// error handling function
function errorCountryInfo(error) {
    Notiflix.Notify.failure('Oops, there is no country with that name');
}