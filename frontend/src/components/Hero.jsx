export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-between px-10 bg-gradient-to-r from-gray-900 to-gray-700 text-white"
    >
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Transform Images <br /> to Text Instantly
        </h1>
        <p className="text-lg text-gray-300">
          Upload any JPG or PNG file and get accurate text extraction with smart summaries. 
          No manual typing needed.
        </p>
        
      </div>

      <div className="mt-10 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          alt="OCR Demo"
          className="rounded-xl shadow-lg w-[500px]"
        />
      </div>
    </section>
  )
}
