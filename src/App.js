import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AppProvider } from "./context/AppProvider";
import { Header } from "./components/shared/Header";
import { Home } from "./components/home/Home";
import { DetailPodcast } from "./components/podcasts/DetailPodcast";
import { ListEpisodes } from "./components//podcasts/ListEpisodes";
import { Episode } from "./components/podcasts/Episode";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 60 * 24,
    },
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="podcast" element={<DetailPodcast />}>
            <Route path=":id" element={< ListEpisodes />} />
            <Route path=":id/episode/:episodeId" element={<Episode />} />
          </Route>
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
