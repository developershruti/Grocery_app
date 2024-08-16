import React from "react";
import { TbMinus, TbPlus } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../redux/productSlice";

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:w-1/4">
        <img src={image} alt={name} className="object-cover w-full h-auto" />
      </div>
      <div className="md:w-3/4 p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg md:text-xl text-gray-800">
              {name}
            </h3>
            <div
              className="cursor-pointer text-gray-500 hover:text-red-500"
              onClick={() => dispatch(deleteCartItem(id))}
            >
              <AiFillDelete />
            </div>
          </div>
          <p className="text-gray-600 font-medium">{category}</p>
          <p className="font-bold text-base">
            <span className="text-red-500">₹</span>
            <span>{price}/kg</span>
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => dispatch(increaseQty(id))}
              className="bg-gray-200 py-1 px-2 rounded hover:bg-gray-300"
            >
              <TbPlus />
            </button>
            <p className="font-semibold">{qty}</p>
            <button
              onClick={() => dispatch(decreaseQty(id))}
              className="bg-gray-200 py-1 px-2 rounded hover:bg-gray-300"
            >
              <TbMinus />
            </button>
          </div>
          <div className="flex items-center font-bold text-gray-700">
            <p>Total :</p>
            <p className="ml-1">
              <span className="text-red-500">₹</span>
              {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
