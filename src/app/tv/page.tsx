import ConsumedTable from "@/components/ConsumedTable";

const tvWatched = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMTdmZjBjZjQtY2JiNS00Y2ZlLTg2NzgtMjUzMGY2OTVmOWJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    title: "Ted Lasso",
    link: "https://www.imdb.com/title/tt10986410/",
  },
];

const MoviePage = () => {
  return <ConsumedTable consumed={tvWatched} />;
};

export default MoviePage;
