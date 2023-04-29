import ConsumedTable from "@/components/ConsumedTable";

const moviesWatched = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BM2NlZDI0ZDktNTg5OS00ZjQ1LWI4MDEtN2I0MDE5NWRiNzA4XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
    title: "The Banshees of Inisherin",
    link: "https://www.imdb.com/title/tt11813216/",
  },
];

const MoviePage = () => {
  return <ConsumedTable consumed={moviesWatched} />;
};

export default MoviePage;
