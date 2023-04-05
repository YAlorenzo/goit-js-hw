function fetchCountries(name) {
     if (name.length >= 1) {
       return fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,capital,population,flags,languages`);
}
}
    
function fetchCountriesCard(name) {
  if (name.length >= 1) {
       return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,flags`);
}
}
export { fetchCountriesCard };
export {fetchCountries};