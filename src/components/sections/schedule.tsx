const Schedule = () => {
    return (
      <div
        className="w-[48rem] max-w-4xl mx-auto px-4 py-10 flex flex-col gap-10 rounded-2xl shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-35 backdrop-saturate-100 backdrop-contrast-100 custom-section-border"
        style={{
          border: "0.5px solid rgba(255, 255, 255, 0.5)",
        }}
      >
        <h2 className="text-center text-xl sm:text-3xl md:text-4xl font-semibold text-black">
          Theme
        </h2>
  
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-semibold text-center mb-2">Day 1</h3>
            <table className="w-full table-auto border border-gray-300 text-left text-sm sm:text-base">
              <thead className="bg-white text-gray-700">
                <tr>
                  <th className="px-4 py-2 border border-gray-300">Time</th>
                  <th className="px-4 py-2 border border-gray-300">Event</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["8:00 AM", "Doors Open"],
                  ["8:15 AM", "Opening Ceremony"],
                  ["8:30 AM", "Introductions & Team Formation"],
                  ["9:00 AM", "Breakfast"],
                  ["10:00 AM", "Workshops Begin"],
                  ["2:00 PM", "Lunch"],
                  ["3:30 PM", "Project Work Continues"],
                  ["6:00 PM", "Snacks"],
                  ["8:00 PM", "Dinner"],
                  ["10:00 PM", "Game Night"],
                  ["11:30 PM", "Game Night Ends / Sleep if you'd like to :)"],
                ].map(([time, event], idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-300">{time}</td>
                    <td className="px-4 py-2 border border-gray-300">{event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold text-center mb-2">Day 2</h3>
            <table className="w-full table-auto border border-gray-300 text-left text-sm sm:text-base">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-2 border border-gray-300">Time</th>
                  <th className="px-4 py-2 border border-gray-300">Event</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["8:00 AM", "Convene"],
                  ["9:00 AM", "Breakfast"],
                  ["4:30 PM", "Finalize Projects"],
                  ["5:00 PM", "Submissions Open"],
                  ["5:30 PM", "Judges Review"],
                  ["6:30 PM", "Announcements"],
                  ["7:00 PM", "Prize Distribution"],
                  ["7:30 PM", "Closing Ceremony"],
                  ["8:00 PM", "Event Wrap-Up"],
                ].map(([time, event], idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-300">{time}</td>
                    <td className="px-4 py-2 border border-gray-300">{event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default Schedule;
  