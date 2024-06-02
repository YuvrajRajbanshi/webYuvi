import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiSun } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

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
      <nav className="dark:bg-gray-300 dark:text-black bg-slate-500 p-4">
        <div className="flex items-center justify-between md:justify-around ">
          <div className=" dark:text-black text-2xl font-bold "> Logo</div>

          <div className="md:hidden   flex items-center gap-4 p-2">
            {isMenuOpen ? (
              <RxCross1
                className=" text-white text-2xl cursor-pointer  dark:text-black"
                onClick={toggleMenu}
              />
            ) : (
              <GiHamburgerMenu
                className=" text-white text-2xl cursor-pointer   dark:text-black"
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

          <ul className="hidden md:flex gap-5 dark:bg-gray-300 dark:text-black">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-red-400" : ""
                } transition duration-500 ease-in-out hover:text-red-400`
              }
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-red-400" : ""
                } transition duration-500 ease-in-out hover:text-red-400`
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-red-400" : ""
                } transition duration-500 ease-in-out hover:text-red-400`
              }
              to="/certificate"
            >
              Certificate
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-red-400" : ""
                } transition duration-500 ease-in-out hover:text-red-400`
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-red-400" : ""
                } transition duration-500 ease-in-out hover:text-red-400 `
              }
              to="/logout"
            >
              Logout
            </NavLink>

            {darkMode ? (
              <CiSun
                className=" text-2xl cursor-pointer  "
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
          <ul className=" md:hidden flex flex-col items-center  gap-2  dark:text-black">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                {" "}
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About{" "}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Certificate
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={() => setIsMenuOpen(false)}>
                Logout
              </Link>
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
