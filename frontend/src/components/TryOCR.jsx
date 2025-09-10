import { useRef } from "react";

export default function TryOCR() {
  const fileInputRef = useRef();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <section id="try" className="py-20 px-6 md:px-16 bg-gray-50 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Try <span className="text-indigo-600">OCR</span>
      </h2>
      <p className="text-gray-600 text-lg mb-10">
        Upload any image and watch our OCR magic in action
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Upload Box */}
        <div
          onClick={handleClick}
          className="w-80 h-60 rounded-xl border-2 border-dashed border-gray-300 bg-white flex flex-col items-center justify-center p-6 transition hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer shadow-sm hover:shadow-md"
        >
          <svg
            className="w-12 h-12 text-indigo-500 mb-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <p className="text-gray-600 font-medium">Drag & Drop Files Here</p>
          <p className="text-sm text-gray-400 mt-1">or click to upload</p>
          <input ref={fileInputRef} type="file" className="hidden" />
        </div>
      </div>
    </section>
  );
}
