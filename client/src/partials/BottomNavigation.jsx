import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  MicrophoneIcon,
  PencilSquareIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

function SideNavigation() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className=" shrink-0 overflow-x-auto no-scrollbar border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-black">
      <div className="h-full flex flex-col justify-between after:flex-1 after:mt-auto">
        <div className="flex-1 grow flex items-center mx-auto">
          <nav className="w-full">
            <ul className="space-x-20 flex">
              <li className="py-2">
                <NavLink
                  to="/"
                  className={`w-full h-6 flex items-center justify-center ${
                    pathname !== "/articles" && pathname !== "/podcasts"
                      ? "text-sky-500 after:bg-sky-500"
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                  }`}
                >
                  <span className="sr-only">Home</span>
                  <InformationCircleIcon className="w-6" />
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink
                  to="/articles"
                  className={({ isActive }) =>
                    "w-full h-6 flex items-center justify-center " +
                    (isActive
                      ? "text-sky-500 after:bg-sky-500"
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400")
                  }
                >
                  <span className="sr-only">About</span>
                  <PencilSquareIcon className="w-6" />
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink
                  to="/podcasts"
                  className={({ isActive }) =>
                    "w-full h-6 flex items-center justify-center " +
                    (isActive
                      ? "text-sky-500 after:bg-sky-500"
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400")
                  }
                >
                  <span className="sr-only">podcast</span>
                  <MicrophoneIcon className="w-6" />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SideNavigation;
