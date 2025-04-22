const Hacklumina = () => {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-10 flex flex-col gap-6 rounded-2xl shadow-md bg-white bg-clip-padding backdrop-filter  backdrop-blur-md bg-opacity-35 backdrop-saturate-100 backdrop-contrast-100 custom-section-border" style={
        {
              border: "0.5px solid rgba(255, 255, 255, 0.5)"
        }
      }>
        <h2 className="text-center text-xl sm:text-3xl md:text-4xl font-semibold text-black">
          What’s Hacklumina?
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
          HackLumina is an exciting 36-hour in-person hackathon happening in May 2025 in Delhi/NCR. 
          It's built to inspire students of all levels to dive into the world of code. Whether you're 
          brand new or have some experience, this event is about learning, collaborating, and exploring 
          the endless possibilities of tech. Come for the code, stay for the vibes — it's gonna be 
          unforgettable.
        </p>
      </div>
    );
  };
  
  export default Hacklumina;
  