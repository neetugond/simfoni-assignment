import { useState, useEffect } from "react";

import ProductFilter from "../productfilter/ProductFilter";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSuggestions,
  productListByName,
} from "../../store/actions/apiActions";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Filter() {
  const [searchTerm, setSearchTerm] = useState(null);

  const searchResultsDrp = useSelector(
    (state) => state.reducer["productDetails"]
  );
  console.log("searchResultsDrp", searchResultsDrp);
  const dispatch = useDispatch(); // Initialize the useDispatch hook

  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.reducer["isLoading"]);
  console.log("isLoading", isLoading);
  useEffect(() => {
    dispatch(fetchSuggestions(searchTerm));
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  const handleResultClick = (selectedBlock) => {
    
    console.log(selectedBlock.value);
    dispatch(productListByName(selectedBlock));
    navigate("/NewArrivals");
    
  };

  return (
    <div>

      <div className=" container mx-auto px-4 mt-5 ">
        <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200">
          <div>
            <div className="pt-4">
              <div className="relative grid grid-cols-3">
                

                <div className="relative" >
  <div className="flex items-center border border-solid border-gray-300 rounded  bg-white">
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Search..."
      className="flex-1"
    />

    {searchTerm ? (
      <FaTimes
        className="clear-icon"
        onClick={() => setSearchTerm("")}
      />
    ) : (
      <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6">
        <FaSearch className="text-white" />
      </button>
    )}

  </div>
  <ul className="list-none p-0 m-0 bg-white">
    {isLoading ? (
      <li className="py-2 cursor-pointer transition duration-300">Loading...</li>
    ) : (
      searchResultsDrp?.map((result) => (
        <li
          key={result.value}
          onClick={() => handleResultClick(result)}
        >
          {result.value}
        </li>
      ))
    )}
  </ul>
</div>

                <div className="px-2">
                  <button className="border-2 py-1 px-2 rounded-lg border-teal-600  font-bold text-teal-600">
                    Upload
                  </button>
                </div>
                {/* <div></div> */}
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                  <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                    <option value="Filter">Filter</option>
                  </select>
                  <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                    <option value="Sortby">Sort by</option>
                  </select>
                </div>




                <ProductFilter />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 30 }}>
        <div className="container mx-auto px-4 mt-5 ">
          <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200">
            <div>
              <div className="flex  gap-4 mt-4">
                <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="All categories">All categories</option>
                  <option value="Facilities Management">
                    Facilities Management
                  </option>
                  <option value="Cleaning Suplies">Cleaning Supplies</option>
                  <option value="Cutting Tools">Cutting Tools</option>
                  <option value="Food&Beverage">Food & Beverage</option>
                  <option value="Furnature">Furniture</option>
                  <option value="Maintance,Repair And Operations">
                    Maintenance,Repair And Operations
                  </option>
                  <option value="Inks&Toners">Inks & Toners</option>
                  <option value="Hand Tools">Hand Tools</option>
                  <option value="Office Furnature&Supplies">
                    Office Furniture & Supplies
                  </option>
                  <option value="Office Suplies">Office Supplies</option>
                </select>
                <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="Fruits">Fruits</option>
                </select>
                <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="Vegitables">Vegetables</option>
                </select>
                <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="Dairy">Dairy</option>
                </select>
                <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="Meat&Poultry">Meat & Poultry</option>
                </select>
                <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="Sea food">Sea food</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
