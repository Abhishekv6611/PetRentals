import  { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ sidebarData }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation(); // Get the current path for active link highlighting

  const toggleSidebar = () => setIsSidebarCollapsed((prev) => !prev);
console.log("location",location.pathname)
  return (
    <div
      className={`h-screen transition-all duration-400 ease-in-out transform  z-10 flex-shrink-0 lg:${isSidebarCollapsed?"w-[5%]":"w-[15%]"} ${
        isSidebarCollapsed ? "w-[10%] lg:w-[5%]" : "w-[20%] lg:w-[15%]"
      } bg-primary text-white `}
    >
      {/* Collapse Button */}
      <div className="relative w-full p-2">
        <button
          onClick={toggleSidebar}
          className="absolute right-[-10px] top-[10px] cursor-pointer w-[20px] h-[20px] 
                     rounded-full bg-gray-700 flex justify-center items-center border border-gray-500"
        >
          <span
            className={`text-white smooth-animation ${
              isSidebarCollapsed ? "rotate-180" : ""
            }`}
          >
            {isSidebarCollapsed ? "<" : "<"}
          </span>
        </button>
      </div>
      <div className="flex items-center px-5 gap-2">
     <img
     className="w-15"
     src="https://i.pinimgproxy.com/?url=aHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8yNTYvNTk3NS81OTc1NDEzLnBuZw==&ts=1747128782&sig=19b8d78b0f7822d858a40480ef60fec2752f89d07abd4f62f07ad358b9adebdc" 
     alt="simbol" />
      { !isSidebarCollapsed&&<h1 className="text-white font-extrabold text-1xl ">Pet Rentals</h1>}
     </div>
      {/* Sidebar Items */}
      <div
        className={`w-full h-[90%] mt-10 flex flex-col gap-2 px-2 ${
          isSidebarCollapsed ? "items-center" : ""
        } smooth-animation`}
      >
        {sidebarData?.map((item, idx) => (
          <Link
          to={item.path}
          key={idx}
          className={`flex items-center gap-2 py-2 px-2 rounded-md hover:bg-secoundry cursor-pointer smooth-animation ${
            location.pathname === item.path
            ? "bg-secoundry text-text"
            : ""
            } ${
              isSidebarCollapsed
              ? "justify-center  w-[40px] h-[40px]"
              : "justify-start"
              }`}
              >
            {item.icon}
            {!isSidebarCollapsed && <span>{item.title}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;