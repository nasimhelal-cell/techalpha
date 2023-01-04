import { useState } from "react";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../utilities/CurrencyFormatter.js";
import Products from "./Products.js";
import { BsArrowLeft } from "react-icons/bs";
const data = [
  {
    id: 1,
    name: "Blink Mini – Compact indoor plug-in smart security camera",
    description:
      "Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera",
    price: 64.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    category: "Camera",
  },
  {
    id: 2,
    name: "Vlogging Camera, 4K Digital Camera for YouTube with WiFi",
    description:
      "It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
    price: 109.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg",
    category: "Camera",
  },
  {
    id: 3,
    name: "SAMSUNG 55-Inch Class Crystal 4K UHD AU8000 Series HDR",
    description:
      "Witness millions of shades of color through powerful Dynamic Crystal technology",
    price: 497.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/cl-uhd-tu7090-un50tu7090gxzs-rperspective-285965740_duusj5.png",
    category: "TV",
  },
  {
    id: 4,
    name: "Sony 65 Inch 4K Ultra HD TV X80K Series: LED Smart Google TV",
    description:
      "The 4K HDR Processor X1 delivers a picture that is smooth and clear, full of rich colors and detailed contrast",
    price: 698,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/287330_fhhcyx.jpg",
    category: "TV",
  },
  {
    id: 5,
    name: "PlayStation 4 Slim 1TB Console - Black",
    description:
      "When present, batteries have a capacity that exceeds 80% of the new equivalent",
    price: 479.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/0188101_sony-playstation-4-slim-1tb-gaming-console-ps4_550_obrjcw.jpg",
    category: "Console",
  },
  {
    id: 6,
    name: "Xbox Series S Fortnite & Rocket League Bundle",
    description:
      "Get the all-digital Xbox Series S Fortnite & Rocket League Bundle featuring the Midnight Drive Pack",
    price: 199,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/2f0a6466-be4f-45a1-868f-dce57c3c6469.0838a0a2ac552dd7273083559d7f3c70_d4i7zb.jpg",
    category: "Console",
  },
  {
    id: 7,
    name: "JBL Tune 510BT: Wireless On-Ear Headphones with Purebass Sound - White",
    description:
      "The Tune 510BT wireless headphones feature renowned JBL Pure Bass sound",
    price: 29.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/JBL_Tune_510BT_Headphone-04.jpg-500x500_vqlhjf.jpg",
    category: "Headphones",
  },
  {
    id: 8,
    name: "Bluetooth Headphones Wireless Earbuds 36Hrs Playtime Wireless Charging",
    description:
      "Wireless earbuds with dual power display show the remaining battery of the case by the number on the screen",
    price: 38.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172650/React%20Shopping/Products/9b890489-49e2-47aa-8b85-b71892cc16ae.3142c0cfab48b4acd4f628c8f8f39190_volxjj.jpg",
    category: "Headphones",
  },
  {
    id: 9,
    name: "Apple Watch Series 4 (GPS, 40MM) - Silver Aluminum Case",
    description:
      "This product will have a battery that exceeds 80% capacity relative to new",
    price: 147,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172650/React%20Shopping/Products/FU642_zstpwl.jpg",
    category: "Smart Watches",
  },
  {
    id: 10,
    name: "Military Smart Watch for Men Outdoor Waterproof Tactical Smartwatch",
    description:
      "EIGIIS military smart watch has a 10 military grade certifications and can be used under the harsh environmental conditions",
    price: 49.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172650/React%20Shopping/Products/Military-Smart-Watch-Men-Outdoor-Waterproof-Tactical-Smartwatch-Bluetooth-Dail-Calls-Speaker-Fitness-Tracker-for-iPhone.jpg_640x640_jy4v6s.jpg",
    category: "Smart Watches",
  },
];

const Cart = () => {
  const [count, setCount] = useState(1);

  const handleDecrese = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handleIncrese = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="cart-section container mx-auto">
      <div>
        <h3 className="text-center py-5 text-gray-700 font-medium uppercase text-xl">
          Your cart
        </h3>

        <div className="cartHeadline grid grid-cols-5 border-b pb-3 uppercase font-medium">
          <div className=" col-span-2">Products</div>
          <div className="cart-unit-price">unit price</div>
          <div className="cart-quantity">quantity</div>
          <div className="cart-total-price ml-auto">total price</div>
        </div>

        <div className="cart-main-grid grid-col-5">
          {data.map((product) => (
            <div className="grid grid-cols-5 border-b py-2" key={product.id}>
              <div className="cart-products-details col-span-2 flex gap-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32"
                />
                <div className="details-in-cart flex flex-col items-start">
                  <h3>{product.name}</h3>
                  <button className="hover:text-rose-500 uppercase duration-300 font-medium">
                    remove
                  </button>
                </div>
              </div>

              <div className="cart-products-price">
                {currencyFormatter(product.price)}
              </div>

              <div className="cart-products-quantity flex">
                <button
                  onClick={handleDecrese}
                  className="w-10 h-10 bg-gray-200 border border-gray-300 active:bg-gray-700 active:text-gray-50"
                >
                  -
                </button>
                <span className="w-10 h-10 flex justify-center items-center border border-gray-300 bg-gray-200">
                  {count}
                </span>
                <button
                  onClick={handleIncrese}
                  className="w-10 h-10 bg-gray-200 border border-gray-300  active:bg-gray-700 active:text-gray-50"
                >
                  +
                </button>
              </div>

              <div className="cart-products-total-price ml-auto">
                {product.price}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-cheackout-section flex justify-between py-5">
          <div className="clear-chat-left">
            <button className="bg-rose-50 hover:bg-rose-200 duration-300 text-rose-400 hover:text-red-500 uppercase font-medium tracking-widest py-3 px-6 border border-rose-300">
              clear chat
            </button>
          </div>
          <div className="checkout flex flex-col gap-4">
            <h2 className="flex justify-between capitalize text-teal-400 font-semibold">
              <span>subtotal</span>
              <span>{currencyFormatter(888)}</span>
            </h2>
            <p className="text-sm text-gray-500">
              Taxes and shipping costs are calculated at the checkout
            </p>
            <button className="bg-teal-500 text-teal-50 uppercase font-medium tracking-widest py-3 px-6 w-full">
              cheackout
            </button>
            <Link
              to="/products"
              element={<Products />}
              className="flex items-center gap-3 text-teal-400"
            >
              <BsArrowLeft />
              <p>Continue shopping</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
