import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiSun } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <nav className="dark:bg-black bg-slate-500 dark:text-white p-4">
        <div className="flex items-center justify-between md:justify-around ">
          <div className="dark:bg-black dark:text-white text-2xl font-bold ">
            {" "}
            Logo
          </div>

          <div className="md:hidden flex items-center gap-4 p-2">
            {isMenuOpen ? (
              <RxCross1
                className=" text-white text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <GiHamburgerMenu
                className=" text-white text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            )}

            {darkMode ? (
              <CiSun
                className=" text-2xl cursor-pointer"
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              />
            ) : (
              <MdDarkMode
                className=" text-2xl cursor-pointer"
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              />
            )}
          </div>

          <ul className="hidden md:flex gap-5 ">
            <Link to="/" className="">
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>

            {darkMode ? (
              <CiSun
                className=" text-2xl cursor-pointer"
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              />
            ) : (
              <MdDarkMode
                className=" text-2xl cursor-pointer"
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              />
            )}
          </ul>
        </div>

        {/* Small screeen */}

        {isMenuOpen ? (
          <ul className=" md:hidden flex flex-col items-center  gap-2 text-white">
            <li>
              <Link to="/" className="   ">
                {" "}
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
}

export default App;
