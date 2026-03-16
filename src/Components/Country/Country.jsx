const Country = ({ country, handleVisitedCountries, isVisited }) => {
  const { name, capital, media } = country;

  return (
    <div
      className={`relative rounded-[18px] border overflow-hidden transition-all duration-300 cursor-pointer group
        ${isVisited
          ? 'bg-[rgba(74,222,128,0.05)] border-[rgba(74,222,128,0.2)] hover:border-[rgba(74,222,128,0.35)] hover:shadow-[0_16px_48px_rgba(74,222,128,0.08)]'
          : 'bg-[#13131e] border-white/[0.07] hover:border-white/[0.12] hover:bg-[#191928] hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]'
        }
        hover:-translate-y-1`}
      style={{ animation: 'scaleIn 0.35s ease both' }}
    >

      {/* Visited ribbon */}
      {isVisited && (
        <span
          className="absolute top-3.5 right-3.5 z-10 bg-[rgba(74,222,128,0.15)] border border-[rgba(74,222,128,0.3)] rounded-full px-3 py-1 text-[10px] font-semibold tracking-widest uppercase text-[#4ade80]"
          style={{ animation: 'scaleIn 0.2s ease' }}
        >
          <i className="fa-solid fa-check"></i> Visited
        </span>
      )}

      {/* Flag */}
      <div className="relative w-full h-40 overflow-hidden bg-white/[0.03]">
        {media?.flag ? (
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={media.flag}
            alt={`${name} flag`}
            loading="lazy"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl opacity-30">
            <i className="fa-solid fa-earth-asia"></i>
          </div>
        )}
        {/* Gradient overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background: isVisited
              ? 'linear-gradient(transparent, rgba(13,24,13,0.85))'
              : 'linear-gradient(transparent, #13131e)'
          }}
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <h2
          className="text-[20px] font-bold leading-tight tracking-tight text-[#f0eee8] mb-1.5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {name}
        </h2>

        <div className="flex items-center gap-2 text-[13px] text-[rgba(240,238,232,0.42)] mb-5">
          <i className="fa-solid fa-city text-[11px] opacity-70"></i>
          {capital || 'Unknown capital'}
        </div>

        <button
          type="button"
          onClick={() => handleVisitedCountries(country)}
          className={`w-full py-3 px-4 rounded-xl border text-[13px] font-medium tracking-wide transition-all duration-200 cursor-pointer
            ${isVisited
              ? 'border-[rgba(74,222,128,0.25)] text-[#4ade80] bg-[rgba(74,222,128,0.06)] hover:border-[rgba(74,222,128,0.5)] hover:bg-[rgba(74,222,128,0.1)] hover:shadow-[0_0_16px_rgba(74,222,128,0.1)]'
              : 'border-white/[0.07] text-[rgba(240,238,232,0.42)] bg-transparent hover:border-[rgba(232,201,109,0.4)] hover:text-[#e8c96d] hover:bg-[rgba(232,201,109,0.05)]'
            }`}
        >
          {isVisited ? 'Marked as Unvisited' : 'Mark as Visited'}
        </button>
      </div>
    </div>
  );
};

export default Country;