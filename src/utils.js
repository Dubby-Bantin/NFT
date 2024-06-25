import art1 from "./assets/Images/art1.png";
import art2 from "./assets/Images/art2.png";
import art3 from "./assets/Images/art3.png";

const navLinks = [
  { link: "Marketplace", href: "/market" },
  { link: "Explore", href: "/explore" },
  { link: "Artists", href: "/artists" },
  { link: "Collections", href: "/collections" },
];

const countInfo = [
  { end: 50, duration: 2.5, text: "Our Active", text2: "Users" },
  { end: 43, duration: 2.5, text: "Our", text2: "Art Work" },
  { end: 38, duration: 2.5, text: "Available", text2: "Artist" },
  { end: 34, duration: 2.5, text: "Our", text2: "Products" },
];

const filterArtButtons = [
  "ALL NFT'S",
  "ART",
  "COLLECTION",
  "VISUAL WORLD",
  "TRENDING CARDS",
];

const artWorks = [
  { image: art1, category1: "ALL NFT'S", category2: "TRENDING CARDS", id: 1},
  { image: art2, category1: "ALL NFT'S", category2: "VISUAL WORLD", id: 2 },
  { image: art3, category1: "ALL NFT'S", category2: "VISUAL WORLD" ,id: 3 },
  { image: art3, category1: "ART", category2: "TRENDING CARDS" , id: 4 },
  { image: art2, category1: "COLLECTION", category2: "TRENDING CARDS", id: 5 },
];

export { navLinks, countInfo, artWorks, filterArtButtons };
