import debounce from 'lodash.debounce';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
const ulEL = document.querySelector('.country-list');
const divEl = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(onInput, 1000));

function onInput(e) {
  const countryName = e.target.value.trim();
  clearInput();
  fetchCountries(countryName).then(data => {
    console.log(data);
    if (data.length === 1) {
      buildCountryMurkup(data);
    } else if (data.length <= 10 && data.length > 1) {
      makeMurkup(data);
    } else if (data.status === 404) {
      alert('dont have country, try againe');
      e.target.value = '';
    } else if (data.length > 10) {
      alert(' to many country, write more simbols');
    }
  });
}

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,flags,population,languages`
  )
    .then(r => r.json())
    .then(data => {
      return data;
    });
}

function makeMurkup(countries) {
  const murkup = countries.map(country => {
    return `<li>
    <img src= '${country.flags.svg}' width = 100px>
    <p>${country.name.official}</p>
    </li>
    `;
  });

  ulEL.insertAdjacentHTML('beforeend', murkup);
}

function buildCountryMurkup(oneCountry) {
  const languagesArray = Object.values(oneCountry[0].languages);
  const murkup = oneCountry.map(country => {
    return `<img src ='${country.flags.svg}' width = 250px>
  <h1>${country.name.official}</h1>
  <p>${country.capital}</p>
  <p>${country.population}</p>
  <p>${languagesArray}</p>`;
  });

  divEl.insertAdjacentHTML('beforeend', murkup);
}

function clearInput() {
  divEl.innerHTML = '';
  ulEL.innerHTML = '';
}
