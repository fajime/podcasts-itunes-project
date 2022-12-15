import React, { useEffect, useState } from "react";
import axios from "axios";

import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const apiPodcastId = process.env.API_PODCAST_ID || "";
  const apiPodcastsList = process.env.API_PODCASTS_LIST || "";

  const [loading, setLoading] = useState(true);
  const [podcasts, setPodcasts] = useState(null);
  const [podcastSelected, setPodcastSelected] = useState(null);
  const [episodeSelected, setEpisodeSelected] = useState(null);

  useEffect(() => {
    fetchData(apiPodcastsList).then(results => {
      const { data: { feed: { entry } } } = results;
      setPodcasts(entry)
    })
  }, []);


  const fetchData = async (url) => {
    try {
      setLoading(true);
      return await axios.get(url);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }


  const compositePodcastSelected = async (id) => {
    const descPodcastSelected = await podcasts.find(element => id === element.id.attributes["im:id"]);
    try {
      await fetchData(`${apiPodcastId}?id=${id}&media=podcast&entity=podcastEpisode&limit=100`).then(potscad => {
        const { data: { results } } = potscad;

        const podcastSelectedComp = {
          episodes: results.slice(1),
          imageUrl: descPodcastSelected['im:image'][2].label,
          title: descPodcastSelected['im:name'].label,
          author: descPodcastSelected["im:artist"].label,
          description: descPodcastSelected.summary.label,
        }

        setPodcastSelected(podcastSelectedComp);
      });
    } catch (err) {
      console.log(err)
    }
  }

  const getEpisodeSelected = (id) => {
    const { episodes } = podcastSelected;
    const episode = episodes.find(element => Number(id) === element.trackId);
    const episodeSelectedComp = {
      name: episode.trackName,
      description: episode.description,
      episodeUrl: episode.episodeUrl,
    }

    setEpisodeSelected(episodeSelectedComp);
  }

  return (
    <AppContext.Provider
      value={{
        loading,
        podcastSelected,
        episodeSelected,
        podcasts,
        setLoading,
        getEpisodeSelected,
        setPodcastSelected,
        setEpisodeSelected,
        compositePodcastSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
