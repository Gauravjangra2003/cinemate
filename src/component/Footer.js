import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <footer className="bg-white shadow-sm  dark:bg-gray-900">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2030{" "}
            <Link to="/" className="hover:underline">
              Cinemate
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link
                href="#"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="#"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                Youtube
              </Link>
            </li>
            <li>
              <Link
                href="#"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" className="hover:underline">
                Github
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </footer>
  );
};
