import { Link } from "react-router-dom";
import { currencyFormatter } from "../utilities/CurrencyFormatter.js";
import Products from "./Products.js";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreseCartQuantity,
  getSubtalPrice,
  removeFromCart,
} from "../features/products/cartSlice.js";
import { useEffect } from "react";

const Cart = () => {
  const { cartItems: data, cartTotalAmout: subtotal } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubtalPrice());
  }, [data, dispatch]);

  return (
    <div className="cart-section container mx-auto">
      <div>
        <h3 className="text-center py-5 text-gray-700 font-medium uppercase text-xl">
          {data.length > 0
            ? `You have ${data.length} cart item${data.length > 1 ? "s" : ""}`
            : "Your cart is empty"}
        </h3>
        {data.length === 0 && (
          <Link
            to="/products"
            element={<Products />}
            className="flex items-center gap-3 text-teal-400 justify-center"
          >
            <BsArrowLeft />
            <p>Continue shopping</p>
          </Link>
        )}
        {data.length > 0 && (
          <>
            <div className="cartHeadline grid grid-cols-5 border-b pb-3 uppercase font-medium">
              <div className=" col-span-2">Products</div>
              <div className="cart-unit-price">unit price</div>
              <div className="cart-quantity">quantity</div>
              <div className="cart-total-price ml-auto">total price</div>
            </div>

            <div className="cart-main-grid grid-col-5">
              {data?.map((product) => (
                <div
                  className="grid grid-cols-5 border-b py-2"
                  key={product.id}
                >
                  <div className="cart-products-details col-span-2 flex gap-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-32 h-32"
                    />
                    <div className="details-in-cart flex flex-col items-start">
                      <h3>{product.name}</h3>
                      <button
                        onClick={() => dispatch(removeFromCart(product))}
                        className="hover:text-rose-500 uppercase duration-300 font-medium"
                      >
                        remove
                      </button>
                    </div>
                  </div>

                  <div className="cart-products-price">
                    {currencyFormatter(product.price)}
                  </div>

                  <div className="cart-products-quantity flex">
                    <button
                      onClick={() => dispatch(decreseCartQuantity(product))}
                      className="w-10 h-10 bg-gray-200 border border-gray-300 active:bg-gray-700 active:text-gray-50"
                    >
                      -
                    </button>
                    <span className="w-10 h-10 flex justify-center items-center border border-gray-300 bg-gray-200">
                      {product.cartQuantity}
                    </span>
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="w-10 h-10 bg-gray-200 border border-gray-300  active:bg-gray-700 active:text-gray-50"
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-products-total-price ml-auto">
                    {currencyFormatter(product.price * product.cartQuantity)}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-cheackout-section flex justify-between py-5">
              <div className="clear-chat-left">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="bg-rose-50 hover:bg-rose-200 duration-300 text-rose-400 hover:text-red-500 uppercase font-medium tracking-widest py-3 px-6 border border-rose-300"
                >
                  clear chat
                </button>
              </div>
              <div className="checkout flex flex-col gap-4">
                <h2 className="flex justify-between capitalize text-teal-400 font-semibold">
                  <span>subtotal</span>
                  <span>{currencyFormatter(subtotal)}</span>
                </h2>
                <p className="text-sm text-gray-500">
                  Taxes and shipping costs are calculated at the checkout
                </p>
                <Link
                  to="/checkout"
                  className="bg-teal-500 text-teal-50 block text-center uppercase font-medium tracking-widest py-3 px-6 w-full"
                >
                  cheackout
                </Link>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
