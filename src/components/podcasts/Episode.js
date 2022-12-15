import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { AppContext } from "./../../context/AppContext";

export const Episode = () => {

    const { episodeSelected, getEpisodeSelected, setEpisodeSelected } = useContext(AppContext);
    const { episodeId } = useParams();

    useEffect(() => {
        getEpisodeSelected(episodeId);
        return () => { setEpisodeSelected(null) }
    }, [episodeId]);

    return (
        <>
            {episodeSelected && (
                <div className="flex flex-col h-min w-full rounded-lg border shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="text-lg font-bold text-left px-4 py-2 bg-white">
                        {episodeSelected.name}
                    </div>
                    <div className="p-4">
                        <div className="text-left mb-6">
                            {episodeSelected.description}
                        </div>
                        <audio controls preload="none" className="w-full">
                            <source src={episodeSelected.episodeUrl} type="audio/mpeg"></source>
                        </audio>
                    </div>
                </div>
            )}
        </>
    );
}
