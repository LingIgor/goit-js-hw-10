import debounce from 'lodash.debounce';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const ulEL = document.querySelector('.country-list');
const divEl = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(onInput, 1000));

function onInput(e) {
  const inputCountry = e.target.value;
  fetchCountries(inputCountry).then(articles => tryToMakeListCountry(articles));
}

function fetchCountries(nameCountry) {
  return fetch(
    `https://restcountries.com/v3.1/name/${nameCountry}?fields=name,capital,population,flags`
  )
    .then(r => r.json())
    .then(data => {
      return data;
    });
}

function tryToMakeListCountry(countries) {
  const markup = countries
    .map(country => {
      if (countries.length <= 5 && countries.length > 1) {
        return `<li>
    <img src="${country.flags.svg}" alt="${country.flags.alt}" width=35 height=25>
   <p>${country.name.official}</p>
  </li>`;
      } else {
        ulEL.innerHTML = '';
        return `<div>
        <img src="${country.flags.svg}" alt="${country.flags.alt}" width=35 height=25 />
        <p>${country.name.official}</p>
        <p><b>Capital</b>: ${country.capital}</p>
        <p><b>Population</b>: ${country.population}</p>

      </div >`;
      }
    })
    .join('');
  ulEL.insertAdjacentHTML('beforeend', markup);
}
