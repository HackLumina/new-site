const Details = () => {
    return (
      <div className="w-[48rem] max-w-4xl mx-auto px-4 py-10 flex flex-col gap-6 rounded-2xl shadow-md bg-white bg-clip-padding backdrop-filter  backdrop-blur-md bg-opacity-35 backdrop-saturate-100 backdrop-contrast-100 custom-section-border" style={
        {
              border: "0.5px solid rgba(255, 255, 255, 0.5)"
        }
      }>
        <h2 className="text-center text-xl sm:text-3xl md:text-4xl font-semibold text-black">
          Event Details
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed flex flex-col gap-4">
            <div>Date : TBD</div>
            <div>Venue : TBD</div>
            <div>Registration fee : Free!</div>
        </p>
      </div>
    );
  };
  
  export default Details;
  