const Theme = () => {
    return (
      <div className="w-[48rem] max-w-4xl mx-auto px-4 py-10 flex flex-col gap-6 rounded-2xl shadow-md bg-white bg-clip-padding backdrop-filter  backdrop-blur-md bg-opacity-35 backdrop-saturate-100 backdrop-contrast-100 custom-section-border" style={
        {
              border: "0.5px solid rgba(255, 255, 255, 0.5)"
        }
      }>
        <h2 className="text-center text-xl sm:text-3xl md:text-4xl font-semibold text-black">
          Theme
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
        The theme of HackLumina is Solarpunk! The main event theme of HackLumina is Solarpunk! Now you must be thinking alright nice,But what the heck is Solarpunk? So, Solarpunk is a concept where nature and technology co-exist, thus it is a way to have a sustainanble ecosystem. If you still have doubts then just scroll to the top and see the bg image, exactly! thats Solarpunk.
        </p>
      </div>
    );
  };
  
  export default Theme;
  