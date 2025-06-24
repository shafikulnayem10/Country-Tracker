import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch("https://api.sampleapis.com/countries/countries");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    }

    fetchCountries();
  }, []);

  const handleVisitedCountries = (country) => {
    const isVisited = visitedCountries.some(c => c.name === country.name);
    if (isVisited) {
      setVisitedCountries(visitedCountries.filter(c => c.name !== country.name));
    } else {
      setVisitedCountries([...visitedCountries, country]);
    }
  };

  
  const filteredCountries = countries.filter(country =>
    (country.name?.toLowerCase() || '').includes(searchText.toLowerCase()) ||
    (country.capital?.toLowerCase() || '').includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h3>Total Countries: {countries.length}</h3>

      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map(country => (
            <li key={country.name}>{country.name}</li>
          ))}
        </ul>
      </div>

      
      <input
        type="text"
        placeholder="Search countries..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)} 
        style={{ padding: '9px', marginBottom: '20px', width: '550px' }}
      />

      <div className="countries">
        {filteredCountries.map(country => (
          <Country
            key={country.name}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            isVisited={visitedCountries.some(c => c.name === country.name)}
            searchText={searchText} 
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
