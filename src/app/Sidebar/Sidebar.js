"use client";
import { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { menus } from "./../../Components/SidebarData/SidebarData";

const Sidebar = () => {

  
  const [open, SetOpen] = useState(true);
  const [submenuOpen, SetsubmenuOpen] = useState([]);


  const handleClick =(index)=>{
    SetsubmenuOpen((prev) => {
        const newOpen = [...prev];
        newOpen[index] = !newOpen[index];
        return newOpen;
      });
  }

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => SetOpen(!open)}
        />
        <div className="inline-flex whitespace-nowrap gap-2 items-center">
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left duration-500 ${
              !open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white text-2xl font-medium ${!open && "hidden"}`}
          >
            User Location
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-light-white mt-6 py-2 ${
            open ? "px-4" : "px-2.5"
          }`}
        >
          <BsSearch className="text-white text-lg float-left block cursor-pointer" />
          <input
            type="search"
            placeholder="Search"
            className={`text-base bg-transparent ml-2 w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="pt-2">
          {menus.map((menu, idx) => (
            <>
              <li onClick={() => handleClick(idx)}
                key={idx}
                className={`text-gray-300 text-sm cursor-pointer p-2 flex items-center gap-x-4 hover:bg-light-white rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="text-2xl">
                  <RiDashboardFill />
                </span>
                <span className={`text-base font-medium ${!open && "hidden"}`}>
                  {menu.title}
                </span>
                {menu.submenu && (
                  <BsChevronDown
                    className={`duration-500 ml-10 ${!submenuOpen[idx] && "rotate-180"}`}
                    
                  />
                )}
              </li>
              {menu.submenu && submenuOpen[idx] && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm cursor-pointer p-2 px-5 flex items-center gap-x-4 hover:bg-light-white rounded-md duration-500"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold origin-left">Home Page</h1>
      </div>
    </div>
  );
};

export default Sidebar;
