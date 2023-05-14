import ConsumedGrid from "@/components/ConsumedGrid";

const books = [
  {
    title: "WOW – ris og fall flugfélags",
    image: "https://m.media-amazon.com/images/I/41C8h4-ppvL.jpg",
    link: "https://www.amazon.com/WOW-ris-fall-flugf%C3%A9lags-Icelandic-ebook/dp/B07SB1JSYS",
  },
  {
    title: "The Five Dysfunctions of a Team",
    image: "https://m.media-amazon.com/images/I/41V9HNQcdzL.jpg",
    link: "https://www.amazon.com/Five-Dysfunctions-of-Team-audiobook/dp/B000079XXR",
  },
  {
    title: "Velocity",
    image:
      "https://m.media-amazon.com/images/I/51hKkEJ1hbS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    link: "https://www.amazon.com/Velocity-Combining-Constraints-Breakthrough-Performance/dp/1439158932",
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
  {
    title: "Billion Dollar Loser",
    image: "https://m.media-amazon.com/images/I/516n97k5cZS.jpg",
    link: "https://www.amazon.com/Billion-Dollar-Loser-Spectacular-Neumann-ebook/dp/B08CV6GB22",
  },
  {
    title: "Making Work Visible",
    image: "https://m.media-amazon.com/images/I/41Fye4IqbBL.jpg",
    link: "https://www.amazon.com/Making-Work-Visible-Second-Exposing-ebook/dp/B09L3B9YK1",
  },
  {
    title: "Why Nations Fail",
    image: "https://m.media-amazon.com/images/I/51Tir1hXEIL._SY346_.jpg",
    link: "https://www.amazon.com/Why-Nations-Fail-Origins-Prosperity-ebook/dp/B0058Z4NR8",
  },
  {
    title: "How To Fail at Almost Everything and Still Win Big",
    image: "https://m.media-amazon.com/images/I/81slmX75nTL.jpg",
    link: "https://www.amazon.com/How-Fail-Almost-Everything-Still/dp/1591847745",
  },
  {
    title:
      "In Business as in Life, You Don't Get What You Deserve, You Get What You Negotiate",
    image: "https://m.media-amazon.com/images/I/91jPX-RE4bL.jpg",
    link: "https://www.amazon.com/Business-Life-Dont-Deserve-Negotiate/dp/0965227499",
  },
  {
    title: "Alibaba",
    image: "https://m.media-amazon.com/images/I/51YRHakTODL.jpg",
    link: "https://www.amazon.com/Alibaba-Duncan-Clark-audiobook/dp/B01AYLBVF2",
  },
  {
    title: "Ghost in the Wires",
    image: "https://m.media-amazon.com/images/I/51iA3x11YpL.jpg",
    link: "https://www.amazon.com/Ghost-in-Wires-audiobook/dp/B005HBO3BY",
  },
  {
    title: "The Facebook Effect",
    image: "https://m.media-amazon.com/images/I/51dRCHSfLHL.jpg",
    link: "https://www.amazon.com/Facebook-Effect-Inside-Company-Connecting-ebook/dp/B003BHM85O",
  },
  {
    title: "Netflixed",
    image: "https://m.media-amazon.com/images/I/71dLnDHeDTL.jpg",
    link: "https://www.amazon.com/Netflixed-Epic-Battle-Americas-Eyeballs/dp/1591846595",
  },
  {
    title: "The Everything Store",
    image: "https://m.media-amazon.com/images/I/51ULBoVSTcL.jpg",
    link: "https://www.amazon.com/The-Everything-Store-Brad-Stone-audiobook/dp/B00FJFJOLC",
  },
  {
    title: "A Man for All Markets",
    image: "https://m.media-amazon.com/images/I/51O0kHBOtpL.jpg",
    link: "https://www.amazon.com/A-Man-for-All-Markets-audiobook/dp/B01N4JAXQM",
  },
  {
    title: "How to Lie with Statistics",
    image: "https://m.media-amazon.com/images/I/51fGWkBsf4L.jpg",
    link: "https://www.amazon.com/How-to-Lie-with-Statistics-audiobook/dp/B01C4RPH8Q",
  },
  {
    title: "Tuesday's with Morrie",
    image: "https://m.media-amazon.com/images/I/41WKiQD2OrL.jpg",
    link: "https://www.amazon.com/Tuesdays-with-Morrie-Mitch-Albom-audiobook/dp/B000XSAY4Q",
  },
  {
    title: "The Ultimate Gift",
    image: "https://m.media-amazon.com/images/I/51SujVOgxCL.jpg",
    link: "https://www.amazon.com/Ultimate-Gift-1/dp/0781445639",
  },
  {
    title: "Factfulness",
    image:
      "https://m.media-amazon.com/images/P/1250107814.01._SCLZZZZZZZ_SX500_.jpg",
    link: "https://www.amazon.com/Factfulness-Reasons-World-Things-Better/dp/1250107814",
  },
  {
    title: "Business Adventures",
    image:
      "https://m.media-amazon.com/images/I/5159jIyi17L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    link: "https://www.amazon.com/Business-Adventures-Twelve-Classic-Street/dp/1497644895",
  },
  {
    title: "Prisoners of Geography",
    image:
      "https://m.media-amazon.com/images/I/51W3DKd3M2L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    link: "https://www.amazon.com/Prisoners-Geography-Everything-Global-Politics/dp/1501121464",
  },
  {
    title: "Iacocca",
    image:
      "https://m.media-amazon.com/images/I/51G8+K470TL._SY344_BO1,204,203,200_.jpg",
    link: "https://www.amazon.com/Iacocca-Autobiography-Lee/dp/0553251473",
  },
];

const MoviePage = () => {
  return <ConsumedGrid consumed={books} />;
};

export default MoviePage;
