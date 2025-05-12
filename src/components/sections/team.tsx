import { Link } from "react-router-dom";

const Team = () => {
  const team = [
    {
      name: "Manan",
      email: "manan@hacklumina.tech",
      href: "mailto:manan@hacklumina.tech",
    },
    {
      name: "Angad",
      email: "angad@hacklumina.tech",
      href: "mailto:angad@hacklumina.tech",
    },
    {
      name: "Shrey",
      email: "shrey@hacklumina.tech",
      href: "mailto:shrey@hacklumina.tech",
    },
    {
      name: "Kavish",
      email: "kavish@hacklumina.tech",
      href: "mailto:kavish@hacklumina.tech",
    },
  ];

  return (
    <div
      className="w-[48rem] max-w-4xl mx-auto px-4 py-10 flex flex-col gap-6 rounded-2xl shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-35 backdrop-saturate-100 backdrop-contrast-100 custom-section-border"
      style={{
        border: "0.5px solid rgba(255, 255, 255, 0.5)",
      }}
    >
      <h2 className="text-center text-xl sm:text-3xl md:text-4xl font-semibold text-black">
        Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center p-4 rounded-lg bg-white/20 backdrop-blur-sm shadow-sm"
          >
            <p className="text-lg font-medium text-black">{member.name}</p>
            <Link
              to={member.href}
              className="text-sm text-blue-600 hover:underline break-words"
            >
              {member.email}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
