const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => loadCountryDetails(data));
};

const loadCountryDetails = (countries) => {
  const countriesContainer = document.getElementById("all-countries");
  //console.log(countries);
  //Old one using for loop
  // for(const country of countries){
  //   console.log(country)
  // }
  countries.forEach((country) => {
    console.log(country);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
      <h3>Name : ${country.name.common}</h3>
      <p>Capital : ${country.capital ? country.capital[0] : "No capital"}</p>
      <button onclick="displayCountryDetails('${
        country.cca2
      }')">Details Here</button>
    `;
    countriesContainer.appendChild(countryDiv);
  });
};
const displayCountryDetails = (code) => {
  //https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  // console.log('details Comming Soon' , code);
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCountryDetails(data[0]));
};
const showCountryDetails = (country) => {
  console.log(country);
  const detailsContainer = document.getElementById("country-details");
  detailsContainer.innerHTML = `
    <h3>Name:${country.name.common}</h3>
    <img src="${country.flags.png}">

  `;
};

loadCountries();
