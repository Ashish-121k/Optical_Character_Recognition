import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import TryOCR from "../components/TryOCR";
import Contributor from "../components/Contributor";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar user={user} onLogout={logout} />

      {/* Hero Section */}
      <Hero user={user} />

      {/* About Section */}
      {/* <About /> */}

      {/* Try OCR Section */}
      <TryOCR />

      <Contributor />

      {/* Footer */}
      <footer className="mt-auto py-4 bg-gray-100 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Your App Name. All rights reserved.
      </footer>
    </div>
  );
}

