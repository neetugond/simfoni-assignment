import Layout from "../../components/layout/Layout";

import Newarrivals from "../newarrivals/Newarrivals";
import AddToCartIncDec from "../addToCart/addToCart";

function ProductInformation() {
  return (
    <Layout>
      <div className="p-3 sm:w-1/5  drop-shadow-lg ">
        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
          <p className="leading-relaxed mb-3">
            <AddToCartIncDec />
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              className="focus:outline-none text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <Newarrivals />
    </Layout>
  );
}

export default ProductInformation;
