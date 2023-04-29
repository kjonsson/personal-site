import ConsumedTable from "@/components/ConsumedTable";
import Image from "next/image";

const books = [
  {
    image:
      "https://m.media-amazon.com/images/I/51hKkEJ1hbS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Velocity",
    link: "https://m.media-amazon.com/images/I/51hKkEJ1hbS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
];

const MoviePage = () => {
  return <ConsumedTable consumed={books} />;
};

export default MoviePage;
