import React from "react";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 max-sm:pb-6">
      <div className="py-8">
        <div className="text-center md:flex md:items-center md:justify-between">
          {/* Social links */}
          <ul className="inline-flex items-center justify-between mb-4 md:order-1 md:ml-4 md:mb-0 space-x-4">
            <li>
              <a
                className="flex justify-center items-center text-sky-500 hover:text-sky-600 transition duration-150 ease-in-out"
                href="#0"
                aria-label="Twitter"
              >
                <AiOutlineTwitter size={20} />
              </a>
            </li>
            <li>
              <a
                className="flex justify-center items-center text-sky-500 hover:text-sky-600 transition duration-150 ease-in-out"
                href="#0"
                aria-label="YouTube"
              >
                <AiFillYoutube size={21} />
              </a>
            </li>
            <li>
              <a
                className="flex justify-center items-center text-sky-500 hover:text-sky-600 transition duration-150 ease-in-out"
                href="#0"
                aria-label="Github"
              >
                <AiFillInstagram size={20} />
              </a>
            </li>
          </ul>

          {/* Copyright */}
          <div className="text-sm text-slate-500 dark:text-slate-400">
            © {year} Daniel Habila. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
