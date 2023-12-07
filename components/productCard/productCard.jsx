import AddToCartIncDec from "../addToCart/addToCart";


function ProductCard() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            BEST SELLING ITEMS
          </h1>
          <div className="h-1 w-20 bg-teal-500 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-3 sm:w-1/5  drop-shadow-lg ">
            <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Fresh-Organic-Tangerine-Oranges-with-Leaves.webp"
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Simfoni
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Robinsons Orange Fruits No Added Sugar 1 4119043
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p className="leading-relaxed mb-3">
                  ₹ 500
                  <AddToCartIncDec />
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 sm:w-1/5  drop-shadow-lg ">
            <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Fresh-Organic-Tangerine-Oranges-with-Leaves.webp"
                  alt="blog"
                />
              </div>
              <div className="p-3 border-t-2">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  simpony
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Tate and Lycle Granulated sugar 1kg(Pack of 5)
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p className="leading-relaxed mb-3">
                  ₹ 500
                  <AddToCartIncDec />
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 sm:w-1/5  drop-shadow-lg ">
            <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Fresh-Organic-Tangerine-Oranges-with-Leaves.webp"
                  alt="blog"
                />
              </div>
              <div className="p-3 border-t-2">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  simpony
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Tate and Lycle Granulated sugar 1kg(Pack of 5)
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p className="leading-relaxed mb-3">
                  ₹ 500
                  <AddToCartIncDec />
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 sm:w-1/5  drop-shadow-lg ">
            <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Fresh-Organic-Tangerine-Oranges-with-Leaves.webp"
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  simpony
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Nescafe Decaffeinated Instant Coffe 500g
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p className="leading-relaxed mb-3">
                  ₹ 500
                  <AddToCartIncDec />
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 sm:w-1/5  drop-shadow-lg">
            <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Fresh-Organic-Tangerine-Oranges-with-Leaves.webp"
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  simpony
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Robinsons Summer Fruits No Added Sugar 1
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p className="leading-relaxed mb-3">
                  ₹ 500
                  <AddToCartIncDec />
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
