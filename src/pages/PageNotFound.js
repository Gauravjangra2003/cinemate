import React, { useEffect } from "react";
import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";
import Button from "../component/Button";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found / Cinemate`;
  }, []);

  return (
    <main>
      <section className="flex flex-col justify-center px-2 ">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404 Oops!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 page not found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back TO Home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
