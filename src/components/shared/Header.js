import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context"
import Spinner from "./../shared/Spinner";

export const Header = () => {

  const { loading } = useContext(AppContext);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 mb-10 h-20 w-full bg-gray-100 shadow-md py-2 text-lg text-blue-700 dark:text-white flex items-center justify-between">
        <Link data-testid="link-element" className="m-10 font-bold text-left" to="/">
          Podcasts
        </Link>
        {loading && (
          <Spinner />
        )}

      </header>
    </>
  );
};
