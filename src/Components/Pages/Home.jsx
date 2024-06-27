import ArtWork1 from "../Home/ArtWork1";
import ArtWork2 from "../Home/ArtWork2";
import Banner from "../Home/Banner/Banner";
import Stats from "../Home/Banner/Stats";

const Home = () => {
  return (
    <div className="font-Montserrat">
      <Banner />
      <Stats />
      <ArtWork1 />
      <ArtWork2 />
    </div>
  );
};

export default Home;
