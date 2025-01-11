import ArtWork1 from "../Home/ArtWork1";
import ArtWork2 from "../Home/ArtWork2";
import Banner from "../Home/Banner/Banner";
import Stats from "../Home/Banner/Stats";
import WorkApproach from "../Home/Banner/Timeline";
import Footer from "../Home/Footer";

const Home = () => {
  return (
    <div className="font-Montserrat">
      <Banner />
      <Stats />
      <WorkApproach />
      <ArtWork1 />
      <ArtWork2 />
      <Footer />
    </div>
  );
};

export default Home;
