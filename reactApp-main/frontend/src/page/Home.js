import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GrPrevious, GrNext } from "react-icons/gr";
import HomeCard from "../component/HomeCard";
import CardFeature from "../component/CardFeature";
import AllProduct from "../component/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(16, 19); // Dynamic display of 4 products
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetable"
  );

  const slideProductRef = useRef();

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };

  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  const TypingText = () => {
    const [text, setText] = useState('');
    const phrases = ['Sharma Ji Grocery Store','Welcome to our e-commerce store!', 'Discover the best deals here.', 'Shop now for amazing discounts.'];

    useEffect(() => {
      let currentIndex = 0;
      let currentText = '';
      let isDeleting = false;
      let interval;

      const type = () => {
        const currentPhrase = phrases[currentIndex];
        if (!isDeleting) {
          currentText = currentPhrase.substring(0, currentText.length + 1);
        } else {
          currentText = currentPhrase.substring(0, currentText.length - 1);
        }

        setText(currentText);

        if (!isDeleting && currentText === currentPhrase) {
          isDeleting = true;
          clearInterval(interval);
          interval = setTimeout(type, 2000);
        } else if (isDeleting && currentText === '') {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % phrases.length;
          clearInterval(interval);
          interval = setTimeout(type, 500);
        } else {
          clearInterval(interval);
          interval = setTimeout(type, isDeleting ? 50 : 100);
        }
      };

      interval = setTimeout(type, 1000);

      return () => clearTimeout(interval);
    }, []);

    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold text-gray-800">
          {text.split(' ').map((word, index) => (
            <span key={index} className={index % 2 === 0 ? 'text-red-500' : 'text-amber-500'}>
              {word}{' '}
            </span>
          ))}
        </h1>
      </div>
    );
  };

  return (
    <div className="p-2 md:p-4" style={{ backgroundImage: "url('https://hips.hearstapps.com/hmg-prod/images/online-buying-and-delivery-concept-royalty-free-image-1675370119.jpg?crop=0.563xw:1.00xh;0.216xw,0&resize=640:*')", width:"100%",height:"500vh", backgroundPosition: "center" }}>
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2 md:flex flex-col justify-center">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-2xl md:text-4xl font-bold text-red-700"> Delivery On Doorstep</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-24 md:h-32"
              alt="Bike Icon"
            />
          </div>
          <TypingText />
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md btn btn-lg btn-animate">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList.map((el) => (
            <HomeCard
              key={el._id}
              id={el._id}
              image={el.image}
              name={el.name}
              price={el.price}
              category={el.category}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mt-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={prevProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-2 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-2 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables.map((el) => (
            <CardFeature
              key={el._id + "vegetable"}
              id={el._id}
              image={el.image}
              name={el.name}
              price={el.price}
              category={el.category}
            />
          ))}
        </div>
      </div>
      <AllProduct heading={"Your Product"} />
    </div>
  );
};

export default Home;