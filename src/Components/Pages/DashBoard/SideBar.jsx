import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { MdAccountBalance, MdOutlineRequestQuote } from "react-icons/md";
import logo from "../../../../public/gym.png";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa";
import useRole from "../../Hooks/useRole";
import CommonMenu from "./Common/CommonMenu";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role] = useRole();
  console.log(role);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                // className='hidden md:block'
                src={logo}
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 justify-center items-center mx-auto">
              <Link to="/">
                <img
                  // className='hidden md:block'
                  className="border border-blue-600 rounded-full shadow-lg"
                  src={logo}
                  alt="logo"
                  width="50"
                  height="50"
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Newsletter */}
              <CommonMenu
                link="/Dashboard"
                title={"All NewsLetters"}
                icon={IoNewspaperOutline}
              />
              {/* All Trainers */}
              <CommonMenu
                link="all-trainers"
                title={"All Trainers"}
                icon={FaPeopleGroup}
              />

              {/* Applied trainers*/}
              <CommonMenu
                link="applied-trainers"
                title={"Applied Trainers"}
                icon={MdOutlineRequestQuote}
              />
              {/* Add new class */}
              <CommonMenu
                link="add-class"
                title={"Add Class"}
                icon={FaRegAddressCard}
              />
              {/* Balance */}
              <CommonMenu
                link="balance"
                title={"Balance"}
                icon={MdAccountBalance}
              />
            </nav>
          </div>
        </div>

        <div>
          <hr />
          {/* Profile Menu */}
          <CommonMenu
            link="/dashboard/profile"
            title={"Profile"}
            icon={FcSettings}
          />

          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
