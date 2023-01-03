import { currencyFormatter } from "../utilities/CurrencyFormatter";

const Card = ({ product }) => {
  return (
    <div className="product flex flex-col justify-between gap-2 bg-white shadow-lg hover:shadow-2xl duration-300 rounded-xl overflow-hidden">
      <img src={product.image} alt={product.name} />
      <div className="product-texts flex flex-col gap-2 px-3">
        <span className="category-tag tetxt-xs font-semibold tracking-widest uppercase text-orange-500">
          {product.category}
        </span>
        <h3 className="product-title font-medium text-lg h-[5.25rem]">
          {product.name}
        </h3>
        <p className="product-description h-[6rem] text-gray-500">
          {product.description}
        </p>
        <div className="flex justify-between items-center pb-5">
          <span className="product-price text-xl font-medium text-rose-500">
            {currencyFormatter(product.price)}
          </span>
          <button className="uppercase rounded-md shadow-md shadow-violet-500 hover:shadow-orange-500 bg-violet-500 text-violet-50 hover:bg-orange-500 hover:text-orange-50 font-medium py-3 px-8 duration-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
