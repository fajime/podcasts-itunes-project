import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import moment from "moment";
import { AppContext } from "./../../context/AppContext";


export const ListEpisodes = () => {
    const { podcastSelected } = useContext(AppContext);

    return (
        <>
            {podcastSelected && (
                <div className="flex flex-col w-full">
                    <p className="text-lg font-bold text-left p-4 mb-5 bg-white rounded-lg border shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        Episodes: {podcastSelected.episodes.length}
                    </p>
                    <div className="rounded-lg border shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="py-2 inline-block min-w-full">
                            <div className="overflow-x-visible">
                                <table className="min-w-full">
                                    <thead className="border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Title</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Date</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {podcastSelected.episodes.map((episode, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="text-sm text-gray-900 font-medium px-6 py-4">
                                                    <Link
                                                        className="flex flex-col text-left text-sky-600"
                                                        to={`episode/${episode.trackId}`}
                                                    >
                                                        {episode.trackName}
                                                    </Link>
                                                </td>
                                                <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap text-left">
                                                    {moment(episode.releaseDate).subtract(10, "days").calendar()}{" "}
                                                </td>
                                                <td className="text-sm text-gray-900 font-medium px-8 py-4 whitespace-nowrap text-left">
                                                    {moment.utc(episode.trackTimeMillis).format('HH:mm')}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

