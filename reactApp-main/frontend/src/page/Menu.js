import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AllProduct from "../component/AllProduct";
import { addCartItem } from "../redux/productSlice";

const Menu = () => {
  const { filterby } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);
  const productDisplay = productData.find((el) => el._id === filterby);

  // Ensure productDisplay is defined before using it
  if (!productDisplay) {
    return <div>Loading...</div>;
  }

  const handleAddCartProduct = () => {
    // Dispatch addCartItem action only if productDisplay is defined
    dispatch(addCartItem(productDisplay));
  };

  const handleBuy = () => {
    dispatch(addCartItem(productDisplay));
    navigate("/cart");
  };

  return (
    <div className="p-2 md:p-4" style={{ backgroundImage: "url('https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/05/09131032/090518lemarch.jpg')", width:"100%",height:"500vh", backgroundPosition: "center" }}>
      <div className="w-full max-w-4xl m-auto md:flex bg-white">
        <div className="max-w-sm overflow-hidden w-full p-5">
          <img
            src={productDisplay.image}
            className="hover:scale-105 transition-all h-full"
            alt={productDisplay.name}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-600 capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className="text-slate-500 font-medium text-2xl">
            {productDisplay.category}
          </p>
          <p className="font-bold md:text-2xl">
            <span className="text-red-500">₹</span>
            <span>{productDisplay.price}</span>
          </p>
          <div className="flex gap-3">
            <button
              className="bg-amber-400 py-1 mt-2 rounded hover:bg-red-600 min-w-[100px]"
              onClick={handleBuy}
            >
              Buy
            </button>
            <button
              onClick={handleAddCartProduct}
              className="bg-amber-400 py-1 mt-2 rounded hover:bg-red-600 min-w-[100px]"
            >
              Add Cart
            </button>
          </div>
          <div>
            <p className="text-slate-600 font-medium">Description:</p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>
      <AllProduct heading={"Related Product"} />
    </div>
  );
};

export default Menu;
