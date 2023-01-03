import { Link } from "react-router-dom";

const Slide = ({ image }) => {
  return (
    <div
      className="slide h-full flex justify-center items-center"
      style={{ backgroundImage: `url(${image.src})` }}
      key={image.id}
    >
      <div className="slide-content flex flex-col gap-5 items-start container mx-auto">
        <h1 className="text-7xl text-violet-50 font-medium w-4/5">
          {image.headline}
        </h1>
        <p className="text-violet-50 w-3/5">{image.body}</p>
        <Link
          to={`/products/${image.category}`}
          className="slide-cta text-violet-50  border mt-4 border-violet-50 hover:border-orange-50 hover:text-orange-50 duration-300 py-2 px-6"
        >
          {image.cta}
        </Link>
      </div>
    </div>
  );
};

export default Slide;
