import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
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
    setVisitedCountries(prev => {
      const exists = prev.some(c => c.name === country.name);
      if (exists) {
        return prev.filter(c => c.name !== country.name);
      } else {
        return [...prev, country];
      }
    });
  };

  const completePct = countries.length > 0
    ? Math.round((visitedCountries.length / countries.length) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-[#080810] text-[#f0eee8]">

      {/* Subtle purple radial glow at top */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(124,109,235,0.1), transparent)' }}
      />

      <div className="relative z-10">

        {/* HERO  */}
       <div className="text-center   px-6 pt-16 pb-10 flex flex-col items-center">
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#e8c96d] mb-4 opacity-90">
            World Explorer
          </p>
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Every{' '}
            <em className="text-[#e8c96d] not-italic" style={{ fontStyle: 'italic' }}>Country</em>
            <br />on Earth
          </h1>
         <p className="text-[15px] text-[rgba(240,238,232,0.45)] font-light max-w-md mx-auto leading-relaxed text-center">
                Discover nations, mark your journeys, and build your personal travel map.
         </p>
        </div>

        {/*  STATS BAR  */}
        <div
          className="flex justify-center flex-wrap gap-2 px-6 mb-9"
          style={{ animation: 'fadeInUp 0.7s 0.1s ease both' }}
        >
          {/* Total */}
          <div className="flex items-center gap-3 bg-[#13131e] border border-white/[0.07] rounded-full px-6 py-2.5 transition-all duration-200 hover:-translate-y-px hover:border-white/[0.13] hover:bg-[#191928]">
            <span className="text-[21px] font-bold text-[#e8c96d]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {countries.length}
            </span>
            <span className="text-[12px] text-[rgba(240,238,232,0.42)] tracking-wider">Countries</span>
          </div>
          {/* Visited */}
          <div className="flex items-center gap-3 bg-[#13131e] border border-white/[0.07] rounded-full px-6 py-2.5 transition-all duration-200 hover:-translate-y-px hover:border-white/[0.13] hover:bg-[#191928]">
            <span className="text-[21px] font-bold text-[#4ade80]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {visitedCountries.length}
            </span>
            <span className="text-[12px] text-[rgba(240,238,232,0.42)] tracking-wider">Visited</span>
          </div>
          {/* Percent */}
          {countries.length > 0 && (
            <div className="flex items-center gap-3 bg-[#13131e] border border-white/[0.07] rounded-full px-6 py-2.5 transition-all duration-200 hover:-translate-y-px hover:border-white/[0.13] hover:bg-[#191928]">
              <span className="text-[21px] font-bold text-[#7c6deb]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {completePct}%
              </span>
              <span className="text-[12px] text-[rgba(240,238,232,0.42)] tracking-wider">Complete</span>
            </div>
          )}
        </div>

        {/*  TRAVEL LOG  */}
        <div
          className={`mx-6 mb-9 rounded-2xl border px-7 py-6 transition-all duration-300
            ${visitedCountries.length > 0
              ? 'bg-[rgba(74,222,128,0.07)] border-[rgba(74,222,128,0.22)]'
              : 'bg-[rgba(74,222,128,0.04)] border-[rgba(74,222,128,0.12)]'
            }`}
          style={{ animation: 'fadeInUp 0.7s 0.15s ease both' }}
        >
          <div className="flex items-center gap-3 mb-4">
            {/* Pulsing dot */}
            <div
              className="w-2 h-2 rounded-full bg-[#4ade80] shrink-0"
              style={{ animation: 'glowPulse 2s ease infinite' }}
            />
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#4ade80]">
              Travel Log
            </span>
            {visitedCountries.length > 0 && (
              <span className="ml-auto bg-[rgba(74,222,128,0.12)] border border-[rgba(74,222,128,0.2)] rounded-full px-3 py-0.5 text-[13px] font-semibold text-[#86efac]">
                {visitedCountries.length}
              </span>
            )}
          </div>

          {visitedCountries.length === 0 ? (
            <p className="text-[13px] text-[rgba(240,238,232,0.42)] italic">
              No countries visited yet — start exploring below.
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {visitedCountries.map(c => (
                <span
                  key={c.name}
                  className="bg-[rgba(74,222,128,0.09)] border border-[rgba(74,222,128,0.18)] rounded-full px-4 py-1.5 text-[12px] font-medium text-[#86efac]"
                  style={{ animation: 'scaleIn 0.25s ease' }}
                >
                  {c.name}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* COUNTRIES GRID*/}
        <div className="px-6 pb-20" style={{ animation: 'fadeIn 0.5s 0.3s ease both' }}>
          {loading ? (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-5">
              <div
                className="w-10 h-10 rounded-full border-2 border-white/[0.07] border-t-[#e8c96d]"
                style={{ animation: 'spin 0.75s linear infinite' }}
              />
              <p className="text-[12px] text-[rgba(240,238,232,0.42)] tracking-[0.14em] uppercase">
                Loading countries
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {countries.map((country, i) => (
                <div
                  key={country.name}
                  style={{ animationDelay: `${Math.min(i * 0.03, 0.6)}s` }}
                >
                  <Country
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}
                    isVisited={visitedCountries.some(c => c.name === country.name)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Countries;