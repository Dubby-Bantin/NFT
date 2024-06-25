import ArtWork from "../Home/ArtWork";
import Banner from "../Home/Banner/Banner";
import Stats from "../Home/Banner/Stats";

const Home = () => {
  return (
    <div className="font-Montserrat overflow-x-hidden overflow-y-scroll home__container">
      <Banner />
      <Stats />
      <ArtWork />
    </div>
  );
};

export default Home;
