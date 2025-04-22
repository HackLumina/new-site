const Sponsors = () => {
    const sponsors = [
        {
            name : "Saral Technologies",
            img : "https://hc-cdn.hel1.your-objectstorage.com/s/v3/a61b1c9be58af4f5107a34220f194c5e10e17ba4_saral_tech.png"
        }
    ]
    return (
      <div className="w-[48rem] max-w-4xl mx-auto px-4 py-10 flex flex-col gap-6 rounded-2xl shadow-md bg-white bg-clip-padding backdrop-filter  backdrop-blur-md bg-opacity-35 backdrop-saturate-100 backdrop-contrast-100 custom-section-border" style={
        {
              border: "0.5px solid rgba(255, 255, 255, 0.5)"
        }
      }>
        <h2 className="text-center text-xl sm:text-3xl md:text-4xl font-semibold text-black">
          Sponsors
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
Amazing people who are making this amazing event possible.
        </p>
      </div>
    );
  };
  
  export default Sponsors;
  