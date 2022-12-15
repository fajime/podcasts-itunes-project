import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context";

export const Home = () => {
  const [totalResults, setTotalResults] = useState(null);
  const [filteredList, setFilteredList] = useState(null);
  const { podcasts } = useContext(AppContext);

  useEffect(() => {
    if (podcasts) {
      setTotalResults(podcasts.length);
      setFilteredList(podcasts);
    }
  }, [podcasts]);

  const filterBySearch = ({ target: { value } }) => {
    let updatedList = [...podcasts];
    updatedList = updatedList.filter((item) => {
      return item.title.label.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };

  return (
    <>
      <div className="w-full bg-gray-300 p-5 fixed top-20 z-10 text-right">
        <label className="text-sm mr-2 rounded-md bg-blue-700 p-1 pr-3 pl-2">
          <span className="text-white font-bold">{totalResults}</span>
        </label>
        <input
          onChange={filterBySearch}
          type="search"
          className="left-3/4 p-1 pl-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Filter podcasts..."
        ></input>
      </div>

      <div className="grid grid-cols-4 gap-6 m-10 absolute z-0 top-40">
        {filteredList &&
          filteredList.map((podcast, index) => (
            <Link
              className="flex flex-col items-center p-4 bg-white rounded-lg border shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              to={`podcast/${podcast.id.attributes["im:id"]}`}
              key={podcast.id.attributes["im:id"]}
            >
              <img
                className="object-cover rounded-lg mb-4"
                src={podcast["im:image"][2].label}
                title={podcast["im:name"].label}
              />
              <p data-testid={`name-element${index}`} className="text-xs uppercase text-center font-bold">
                {podcast["im:name"].label}
              </p>

              <p data-testid={`author-element${index}`} className="text-xs text-center">
                <span className="text-gray-500">
                  Author: {podcast["im:artist"].label}
                </span>
              </p>
            </Link>
          ))}
      </div>
    </>
  );
};
