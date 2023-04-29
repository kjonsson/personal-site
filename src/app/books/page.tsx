import ConsumedGrid from "@/components/ConsumedGrid";

const books = [
  {
    title: "Velocity",
    image:
      "https://m.media-amazon.com/images/I/51hKkEJ1hbS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    link: "https://m.media-amazon.com/images/I/51hKkEJ1hbS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    title: "Get a Grip",
    image: "https://m.media-amazon.com/images/I/51+upRTY1KS.jpg",
    link: "https://www.amazon.com/Get-Grip-Entrepreneurial-Journey-Results-ebook/dp/B009K44DQY",
  },
  {
    title: "Isn't it Obvious?",
    image: "https://m.media-amazon.com/images/I/9176vZ20pzL.jpg",
    link: "https://www.amazon.com/Isnt-Obvious-Revised-Eliyahu-Goldratt/dp/0884271943",
  },
  {
    title: "The Phoenix Project",
    image:
      "https://m.media-amazon.com/images/P/B078Y98RG8.01._SCLZZZZZZZ_SX500_.jpg",
    link: "https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592",
  },
  {
    title: "Principles for Dealing with the Changing World Order",
    image: "https://m.media-amazon.com/images/I/41WQsvi-90L.jpg",
    link: "https://www.amazon.com/Changing-World-Order-Nations-Succeed/dp/B0873ZP8NG",
  },
  {
    title: "Critical Chain",
    image:
      "https://m.media-amazon.com/images/P/B002LHRM2E.01._SCLZZZZZZZ_SX500_.jpg",
    link: "https://www.amazon.com/Critical-Chain-Novel-Eliyahu-Goldratt/dp/0884271536",
  },
  {
    title: "The Goal",
    image: "https://m.media-amazon.com/images/I/51h1jhqTiZL.jpg",
    link: "https://www.amazon.com/The-Goal-audiobook/dp/B00IFGGDA2",
  },
  {
    title: "Born a Crime",
    image:
      "https://m.media-amazon.com/images/P/0399588191.01._SCLZZZZZZZ_SX500_.jpg",
    link: "https://www.amazon.com/Born-Crime-Stories-African-Childhood/dp/1531865046",
  },
  {
    title: "Pridictably Irrational",
    image:
      "https://m.media-amazon.com/images/I/61v5CqYL2WL._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.amazon.com/Predictably-Irrational-Revised-Expanded-Decisions/dp/0061353248",
  },
  {
    title: "The Ride of a Lifetime",
    image:
      "https://m.media-amazon.com/images/P/0399592091.01._SCLZZZZZZZ_SX500_.jpg",
    link: "https://www.amazon.com/Ride-Lifetime-Lessons-Learned-Company/dp/0399592091",
  },
  {
    title: "The Unicorn Project",
    image:
      "https://m.media-amazon.com/images/P/B07QT9QR41.01._SCLZZZZZZZ_SX500_.jpg",
    link: "https://www.amazon.com/Unicorn-Project-Developers-Disruption-Thriving-ebook/dp/B07QT9QR41",
  },
  {
    title: "Wild Ride",
    image:
      "https://m.media-amazon.com/images/P/B01LMU3KPI.01._SCLZZZZZZZ_SX500_.jpg",
    link: "https://www.amazon.com/Wild-Ride-Inside-Ubers-Domination-ebook/dp/B01LMU3KPI/",
  },
  {
    title: "How to Turn Down a Billion Dollars",
    image:
      "https://m.media-amazon.com/images/P/B073Z7XL5D.01._SCLZZZZZZZ_SX500_.jpg",
    link: "https://www.amazon.com/How-Turn-Down-Billion-Dollars-ebook/dp/B073Z7XL5D/",
  },
  {
    title: "Lost and Founder",
    image:
      "https://m.media-amazon.com/images/P/B074DGYVD5.01._SCLZZZZZZZ_SX500_.jpg",
    link: "https://www.amazon.com/Lost-Founder-Painfully-Honest-Startup-ebook/dp/B074DGYVD5",
  },
  {
    title: "American Kingpin",
    image:
      "https://m.media-amazon.com/images/P/B01L8C4WBG.01._SCLZZZZZZZ_SX500_.jpg",
    link: "https://www.amazon.com/American-Kingpin-Criminal-Mastermind-Behind-ebook/dp/B01L8C4WBG",
  },
  {
    title: "Never Split the Difference",
    image: "https://m.media-amazon.com/images/I/51yKczFDuQL.jpg",
    link: "https://www.amazon.com/Never-Split-Difference-Negotiating-Depended-ebook/dp/B014DUR7L2",
  },
  {
    title: "Shoe Dog",
    image: "https://m.media-amazon.com/images/I/41k+WVPLwZL.jpg",
    link: "https://www.amazon.com/Shoe-Dog-Memoir-Creator-Nike-ebook/dp/B0176M1A44",
  },
  {
    title: "Chaos Monkeys",
    image: "https://m.media-amazon.com/images/I/51ubRQEfdwL.jpg",
    link: "https://www.amazon.com/Chaos-Monkeys-Obscene-Fortune-Failure-ebook/dp/B07C7DM72N",
  },
  {
    title: "Hatching Twitter",
    image: "https://m.media-amazon.com/images/I/51YUkI5ZQ-L.jpg",
    link: "https://www.amazon.com/Hatching-Twitter-Story-Friendship-Betrayal-ebook/dp/B00CDUVSQ0",
  },
];

const MoviePage = () => {
  return <ConsumedGrid consumed={books} />;
};

export default MoviePage;
