async function searchCountry() {
    const input = document.getElementById('countryInput').value.trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    if (!input) {
      resultsDiv.innerHTML = '<p>Please enter a country name.</p>';
      return;
    }
  
    const url = `https://restcountries.com/v3.1/name/${input}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); // For testing
    } catch (error) {
      resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  }
  