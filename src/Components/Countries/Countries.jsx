import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch("https://api.sampleapis.com/countries/countries");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);

const handleVisitedCountries = (country) => {
  const exists = visitedCountries.some(c => c.name === country.name);

  if (!exists) {
    setVisitedCountries([...visitedCountries, country]);
  } else {
    const updatedVisited = visitedCountries.filter(c => c.name !== country.name);
    setVisitedCountries(updatedVisited);
  }
};

  const filteredCountries = countries.filter(country =>
    (country.name?.toLowerCase() || '').includes(searchText.toLowerCase()) ||
    (country.capital?.toLowerCase() || '').includes(searchText.toLowerCase())
  );

  return (
    <div className="countries-wrapper">
      {/* HERO */}
      <div className="hero">
        <p className="hero-eyebrow">World Explorer</p>
        <h1>Every <em>Country</em><br />on Earth</h1>
        <p className="hero-subtitle">Discover nations, mark your journeys, and build your personal travel map.</p>
      </div>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stat-pill">
          <span className="stat-value">{countries.length}</span>
          <span className="stat-label">Countries</span>
        </div>
        <div className="stat-pill">
          <span className="stat-value" style={{ color: '#4ade80' }}>{visitedCountries.length}</span>
          <span className="stat-label">Visited</span>
        </div>
        {countries.length > 0 && (
          <div className="stat-pill">
            <span className="stat-value" style={{ color: '#7c6deb' }}>
              {Math.round((visitedCountries.length / countries.length) * 100)}%
            </span>
            <span className="stat-label">Complete</span>
          </div>
        )}
      </div>

      {/* VISITED TRACKER */}
      <div className={`visited-section ${visitedCountries.length > 0 ? 'has-visited' : ''}`}>
        <div className="visited-header">
          <div className="visited-dot" />
          <span className="visited-title">Travel Log</span>
          {visitedCountries.length > 0 && (
            <span className="visited-count-badge">{visitedCountries.length}</span>
          )}
        </div>
        {visitedCountries.length === 0 ? (
          <p className="visited-empty">No countries visited yet — start exploring below.</p>
        ) : (
          <div className="visited-tags">
            {visitedCountries.map(c => (
              <span className="visited-tag" key={c.name}>{c.name}</span>
            ))}
          </div>
        )}
      </div>

      {/* SEARCH */}
      <div className="search-container">
        <div className="search-inner">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search by country or capital…"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <span className="search-result-count">{filteredCountries.length} results</span>
          )}
        </div>
      </div>

      {/* MAIN COUNTRIES GRID */}
      <div className="countries-grid-wrapper">
        {loading ? (
          <div className="loading-container">
            <div className="loader" />
            <p className="loading-text">Loading countries</p>
          </div>
        ) : (
          <div className="countries">
            {filteredCountries.length === 0 ? (
              <div className="no-results">
                <div className="no-results-icon"><i class="fa-solid fa-search"></i></div>
                <h3>Nothing found</h3>
                <p>Try a different search term</p>
              </div>
            ) : (
              filteredCountries.map((country, i) => (
                <div key={country.name} style={{ animationDelay: `${Math.min(i * 0.03, 0.6)}s` }}>
                  <Country
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}
                    isVisited={visitedCountries.some(c => c.name === country.name)}
                  />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Countries;