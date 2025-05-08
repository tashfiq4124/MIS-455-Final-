function searchCountry() {
    const input = document.getElementById('countryInput').value.trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    if (!input) {
      resultsDiv.innerHTML = '<p>Please enter a country name.</p>';
      return;
    }
  
    const url = 'https://restcountries.com/v3.1/name/' + encodeURIComponent(input);
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Country not found');
        }
        return response.json();
      })
      .then(data => {
        data.forEach(country => {
          const name = country.name.common;
          const capital = (country.capital && country.capital[0]) || 'N/A';
          const flag = country.flags.svg;
          const currency = Object.values(country.currencies || {})[0]?.name || 'N/A';
          const population = country.population.toLocaleString();
          const region = country.region;
          const languages = Object.values(country.languages || {}).join(', ');
  
          const countryHTML = `
            <div class="country-card">
              <h2>${name}</h2>
              <img src="${flag}" alt="Flag of ${name}">
              <p><strong>Capital:</strong> ${capital}</p>
              <p><strong>Currency:</strong> ${currency}</p>
              <p><strong>Population:</strong> ${population}</p>
              <p><strong>Region:</strong> ${region}</p>
              <p><strong>Languages:</strong> ${languages}</p>
            </div>
          `;
          resultsDiv.innerHTML += countryHTML;
        });
      })
      .catch(error => {
        resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  }
  
  
  