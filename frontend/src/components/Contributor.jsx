export default function Contributors() {
  const team = [
    { initials: "C", name: "Charu Bisht", role: "AI ML Expert" },
    { initials: "R", name: "Ruhi Parween", role: "Frontend Dev" },
    { initials: "D", name: "Dhanender", role: "Data Scientist" },
    { initials: "A", name: "Amit", role: "AI Engineer" },
    { initials: "R", name: "Ripun", role: "Frontend Dev" },
    { initials: "A", name: "Ashish", role: "Backend Dev" },
    { initials: "T", name: "Tanya", role: "Project Manager" },
  ];

  return (
    <section id="contributors" className="bg-[#0B1120] text-white py-20 px-6 md:px-16 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Meet the <span className="text-indigo-400">Team</span>
      </h2>
      <p className="text-gray-400 mb-12">
        The brilliant minds behind this OCR project.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10 justify-center">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-800 text-lg font-bold shadow-md border border-gray-700">
              {member.initials}
            </div>
            <h3 className="mt-4 font-semibold">{member.name}</h3>
            <p className="text-sm text-indigo-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
