import art1 from "./assets/Images/art1.png";
import art2 from "./assets/Images/art2.png";
import art3 from "./assets/Images/art3.png";
import art4 from "./assets/Images/art5.png";
import art8 from "./assets/Images/art8.png";
import art9 from "./assets/Images/art9.png";
import slide1 from "./assets/Images/slide1.png";
import slide2 from "./assets/Images/slide2.png";
import slide3 from "./assets/Images/slide3.png";

import pilotMonkey from "./assets/Images/pilotMonkey.png";

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

const artWorks1 = [slide1, slide2, slide3];

const artWorks2 = [
  {
    image: art1,
    category: "ALL NFT'S",
    id: 1,
    rotateLeft: true,
  },
  {
    image: art2,
    category: "ALL NFT'S",
    id: 2,
  },
  {
    image: art3,
    category: "ALL NFT'S",
    id: 3,
    rotateRight: true,
  },

  {
    image: art1,
    category: "ART",
    id: 4,
    rotateLeft: true,
  },
  {
    image: art9,
    category: "ART",
    id: 5,
  },
  {
    image: art3,
    category: "ART",
    id: 6,
    rotateRight: true,
  },

  {
    image: art1,
    category: "VISUAL WORLD",
    id: 7,
    rotateLeft: true,
  },
  {
    image: art4,
    category: "VISUAL WORLD",
    id: 8,
  },
  {
    image: art3,
    category: "VISUAL WORLD",
    id: 9,
    rotateRight: true,
  },

  {
    image: art1,
    category: "COLLECTION",
    id: 10,
    rotateLeft: true,
  },
  {
    image: pilotMonkey,
    category: "COLLECTION",
    id: 11,
  },
  {
    image: art3,
    category: "COLLECTION",
    id: 12,
    rotateRight: true,
  },

  {
    image: art1,
    category: "TRENDING CARDS",
    id: 13,
    rotateLeft: true,
  },
  {
    image: art8,
    category: "TRENDING CARDS",
    id: 14,
  },
  {
    image: art3,
    category: "TRENDING CARDS",
    id: 15,
    rotateRight: true,
  },
];

export {
  navLinks,
  countInfo,
  artWorks1,
  artWorks2,
  filterArtButtons,
  art1,
  art2,
  art3,
};
