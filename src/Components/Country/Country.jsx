import './Country.css';

const Country = ({ country, handleVisitedCountries, isVisited }) => {
  const { name, capital, media } = country;

  return (
    <div className={`country ${isVisited ? 'visited' : ''}`}>
      <h2>Name: {name}</h2>
      <h3>Capital: {capital}</h3>
      <div>
        <img
          src={media.flag}
          style={{ width: '100px', height: 'auto' }}
          alt={`${name} flag`}
        />
      </div>

      <button onClick={() => handleVisitedCountries(country)}>
        {isVisited ? 'Unmark as Visited' : 'Mark as Visited'}
      </button>
    </div>
  );
};

export default Country;
