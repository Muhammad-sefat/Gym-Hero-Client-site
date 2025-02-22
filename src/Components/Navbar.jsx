import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import Container from "./Container";
import logo from "../assets/gym.png";
import "../App.css";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/">
              <div className="flex items-center">
                <img
                  className="rounded"
                  src={logo}
                  alt="logo"
                  width="50"
                  height="30"
                />
                <p className="text-xl md:text-3xl font-bold gap-0">
                  Gym<span className="text-blue-600">Hero</span>
                </p>
              </div>
            </Link>

            {/* Hamburger menu for mobile view */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl"
              >
                ☰
              </button>
            </div>

            {/* Navigation links for larger screens */}
            <div className="hidden md:flex space-x-4 font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active underline text-pink-500" : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/all-trainers"
                className={({ isActive }) =>
                  isActive ? "active underline text-pink-500" : ""
                }
              >
                All Trainers
              </NavLink>
              <NavLink
                to="/all-classes"
                className={({ isActive }) =>
                  isActive ? "active underline text-pink-500" : ""
                }
              >
                All Classes
              </NavLink>
              <NavLink
                to="/community"
                className={({ isActive }) =>
                  isActive ? "active underline text-pink-500" : ""
                }
              >
                Community
              </NavLink>
            </div>

            {/* Dropdown Menu */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <div className="hidden md:block">
                    {/* Avatar */}
                    {user ? (
                      <img
                        className="rounded-full"
                        referrerPolicy="no-referrer"
                        src={
                          user && user.photoURL
                            ? user.photoURL
                            : "https://i.ibb.co/d231yQ0/profile-06.png"
                        }
                        alt="profile"
                        height="30"
                        width="30"
                      />
                    ) : (
                      <Link to="/login" className="px-4 py-3 font-semibold">
                        Login
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="absolute z-30 rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    {user ? (
                      <>
                        <Link
                          to="/Dashboard"
                          className="block px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Dashboard
                        </Link>
                        <Link
                          to="/my-profile"
                          className="block px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          My Profile
                        </Link>
                        <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/register"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {menuOpen && (
            <div className="md:hidden absolute bg-white w-full shadow-lg mt-2 rounded-lg">
              <div className="flex flex-col space-y-2 p-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active underline text-pink-500" : ""
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/all-trainers"
                  className={({ isActive }) =>
                    isActive ? "active underline text-pink-500" : ""
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  All Trainers
                </NavLink>
                <NavLink
                  to="/all-classes"
                  className={({ isActive }) =>
                    isActive ? "active underline text-pink-500" : ""
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  All Classes
                </NavLink>
                <NavLink
                  to="/community"
                  className={({ isActive }) =>
                    isActive ? "active underline text-pink-500" : ""
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Community
                </NavLink>
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
