import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { CiSun } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className={`text-center top-0 sticky bg-gray-700 ${theme} `}>
        <nav
          className={`md:flex md:items-center md:justify-around bg-gray-700 text-white p-5 ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex  gap-3 flex-col  md:text-[17px] md:flex-row ">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/project" onClick={() => setIsMenuOpen(false)}>
                Project
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-center flex-col gap-4 md:flex-row md:gap-2">
            <button className="outline p-1 rounded-sm hover:bg-red-700 transition duration-500 mt-4 hover:text-gray-600">
              Resume
            </button>
            <MdDarkMode
              className="text-3xl md:mt-4 cursor-pointer"
              onClick={handleThemeSwitch}
            />
            <RxCross1
              className="md:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </nav>
      </div>
      {!isMenuOpen && (
        <GiHamburgerMenu
          className="cursor-pointer text-black text-2xl absolute right-10 top-5 md:hidden "
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default Navbar;
