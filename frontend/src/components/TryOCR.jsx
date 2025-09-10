export default function TryOCR() {
  return (
    <section id="try" className="py-20 px-10 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6">Try OCR</h2>
      <p className="text-gray-600 mb-10">Upload any image and see our OCR magic in action</p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="border-2 border-dashed border-gray-400 p-10 rounded-lg w-80 h-60 flex items-center justify-center">
          <p className="text-gray-500">Drag & Drop Files Here</p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1581091215367-59abf1164a7d"
          alt="OCR Example"
          className="rounded-lg shadow-md w-96"
        />
      </div>
    </section>
  )
}
