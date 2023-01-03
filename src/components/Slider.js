import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://i.ibb.co/XszmG02/camera.jpg",
    headline: "DSLR cameras for stunning photos",
    body: "Are you an aspiring photographer looking to take your skills to the next level? Our DSLR cameras offer advanced features and high-quality image sensors to help you capture stunning photos. From landscape shots to portraits, these cameras are perfect for capturing all types of subjects.",
    cta: "Shop DSLR cameras now",
    category: "cameras",
  },
  {
    id: 2,
    src: "https://i.ibb.co/mtc8v16/tv.jpg",
    headline: "Upgrade your home entertainment with our TVs",
    body: "Experience the latest in home entertainment with our selection of TVs. From sleek and modern designs to advanced features like 4K resolution and smart capabilities, our TVs will bring your favorite movies, TV shows, and streaming content to life.",
    cta: "Shop TVs and upgrade now",
    category: "tvs",
  },
  {
    id: 3,
    src: "https://i.ibb.co/kmr5qQv/headphones.jpg",
    headline: "Enhance your listening experience",
    body: "Take your music, movies, and more to the next level with our headphones. Our selection offers a range of styles and features, including noise-cancelling technology, wireless connectivity, and comfortable designs for all-day wear.",
    cta: "Experience enhanced sound",
    category: "headphones",
  },
  {
    id: 4,
    src: "https://i.ibb.co/JqxDhvZ/console.jpg",
    headline: "Take your gaming to the next level",
    body: "Elevate your gaming experience with our selection of gaming consoles. From the latest models to classic systems, we have a console for every type of gamer. Our consoles offer advanced graphics, fast processing speeds, and a variety of exclusive games to choose from.",
    cta: "Shop consoles and play now",
    category: "consoles",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Stay connected with smart watches",
    body: "Stay connected and on top of your day with our smart watches. Our selection offers a range of styles and features, including fitness tracking, phone notifications, and voice assistants. These watches are the perfect combination of functionality and style.",
    cta: "Connect with a smart watch",
    category: "smart-watches",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative">
      <div
        className="slider relative "
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide image={image} key={image.id} />
        ))}
      </div>
      <div className="btns absolute z-[1]  text-gray-50 bottom-6 w-screen ">
        <div className="flex  justify-center gap-10 ">
          <button
            onClick={prevSlide}
            className="prevBtn h-14 w-20 text-xl bg-violet-500 backdrop-blur-xl flex justify-center items-center hover:bg-violet-700 border border-violet-50 hover:border-orange-50 hover:text-orange-50 duration-300"
          >
            <span>
              <BsArrowLeft />
            </span>
          </button>

          <button
            onClick={nextSlide}
            className="nextBtn  h-14 w-20 text-xl bg-violet-500 backdrop-blur-xl flex justify-center items-center hover:bg-violet-700 border border-violet-50 hover:border-orange-50 hover:text-orange-50 duration-300"
          >
            <span>
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
