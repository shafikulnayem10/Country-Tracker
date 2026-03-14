import './Country.css';

const Country = ({ country, handleVisitedCountries, isVisited }) => {
  const { name, capital, media } = country;

  return (
    <div className={`country ${isVisited ? 'visited' : ''}`}>
      {isVisited && <span className="visited-ribbon"> Visited</span>}

      <div className="flag-container">
        {media?.flag ? (
          <img
            className="flag-img"
            src={media.flag}
            alt={`${name} flag`}
            loading="lazy"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        ) : (
          <div className="flag-placeholder"><i class="fa-solid fa-earth-asia"></i></div>
        )}
      </div>

      <div className="country-info">
        <h2 className="country-name">{name}</h2>
        <div className="country-capital">
          <span className="capital-icon"><i class="fa-solid fa-city"></i></span>
          {capital || 'Unknown capital'}
        </div>

        <button
          className={`country-btn ${isVisited ? 'unmark' : ''}`}
          onClick={() => handleVisitedCountries(country)}
        >
          {isVisited ? ' Mark as Not Visited' : 'Mark as Visited'}
        </button>
      </div>
    </div>
  );
};

export default Country;