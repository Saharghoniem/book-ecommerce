import React, { useRef } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
// import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";
import { AiFillCar } from "react-icons/ai";


const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(15, 20);
  const homeProductCartListVegetables = productData.filter(

    (el) => el.category === "children",
    []
  );
  const loadingArray = new Array(16).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };



 


  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-green-300 w-36 px-2 items-center rounded-full">
            <p className="text-2xl  text-slate-900">Delivery</p>
            
            <AiFillCar className="text-2xl"/>
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The best Delivery in{" "}
            <span className="text-green-600 text-">Your Hand</span>
          </h2>
          <h3>Welcome to our modern library, where knowledge meets innovation. Discover a world of possibilities and expand your horizons with our extensive collection of books, magazines, and digital resources. With state-of-the-art facilities and expert staff, we're dedicated to providing you with a unique and enriching experience. Come and explore the wonders of the modern library today!</h3>
          <br/>
          <p className="py-3 text-xl ">
          Our library is distinguished by professionalism, diversity, and fast delivery. We provide everything you wish for to nourish your mind and develop your ideas.
          </p>
          <button className="font-bold bg-yellow-500 text-green-200 px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index+"loading"} loading={"Loading..."} />;
              })}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4 hover:bg-red-800">
            All books you need in one place
            </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id+"children"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el,index) => (
                <CardFeature loading="Loading..." key={index+"cartLoading"} />
              ))}
        </div>
      </div>
      
      <AllProduct heading={"Your Product"}/>
    </div>
  );
};

export default Home;
