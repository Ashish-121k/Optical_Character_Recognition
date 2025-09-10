export default function About() {
  return (
    <section id="about" className="w-screen py-20 px-6 md:px-16 bg-gray-50 text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
        What is <span className="text-indigo-600">OCR?</span>
      </h2>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl mb-12 leading-relaxed">
        Optical Character Recognition (OCR) is a powerful technology that converts different types
        of documents — such as scanned papers, PDFs, or images — into{" "}
        <span className="font-semibold text-gray-800">editable and searchable digital data</span>.
        It’s the bridge between the physical and digital worlds.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
            alt="Scanner"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Scan with Ease</h3>
          <p className="text-gray-600 text-sm">
            Capture text from books, receipts, and documents instantly with OCR technology.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <img
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
            alt="Papers"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Digitize Documents</h3>
          <p className="text-gray-600 text-sm">
            Turn physical documents into searchable, editable digital files in seconds.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
            alt="Documents"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Summarize Data</h3>
          <p className="text-gray-600 text-sm">
            Keep your important data summarized, organized.
          </p>
        </div>
      </div>
    </section>
  );
}
