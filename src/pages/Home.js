import Slider from "../components/Slider";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home overflow-x-hidden">
      <Slider />
      <Products />
    </div>
  );
};

export default Home;
