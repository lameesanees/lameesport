import { useEffect, useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Works from "./components/Works";
import About from "./components/About";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };



  return (
    <>
      <nav className="flex justify-between items-center bg-white dark:bg-slate-900 p-4">
        <div className="block lg:hidden">
          <button>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        
          <button
            type="button"
            onClick={handleThemeSwitch}
            className="text-lg rounded-md"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
      </nav>
      <div className="font-inter bg:white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto w-11/12">
          <HeroSection></HeroSection>
          <Services></Services>
          <Works></Works>
          <About></About>
          <Experience></Experience>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
