import React, { useEffect, useContext } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export const DetailPodcast = () => {
  let { id } = useParams();
  const { podcastSelected, setPodcastSelected, compositePodcastSelected } = useContext(AppContext);

  useEffect(() => {
    compositePodcastSelected(id);
    return () => { setPodcastSelected(null) }
  }, []);

  return (
    <>
      {podcastSelected &&
        <div className="flex flex-row gap-10 text-center w-full p-10 absolute z-0 top-20">
          <div className="flex flex-col w-1/5 h-min text-left p-4 bg-white rounded-lg border shadow-md dark:border-gray-700 dark:bg-gray-800">
            <Link
              to={`${id}`}
            >
              <img
                className="object-cover rounded-lg mb-2 w-full"
                src={podcastSelected.imageUrl}
                title={podcastSelected.title}
              />
            </Link>
            <hr className="my-2 h-px bg-gray-200 border-1 dark:bg-gray-700"></hr>
            <p className="text-xs font-bold">
              {podcastSelected.title}
            </p>
            <p className="text-xs">
              <span className="text-gray-500">
                by {podcastSelected.author}
              </span>
            </p>
            <hr className="my-2 h-px bg-gray-200 border-1 dark:bg-gray-700"></hr>
            <p className="text-xs font-bold">Description:</p>
            <p className="text-xs">
              <span className="text-gray-500">
                {podcastSelected.description}
              </span>
            </p>
          </div>
          <Outlet />
        </div>
      }
    </>
  );
};
