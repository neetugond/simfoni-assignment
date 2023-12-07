import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

function IncreaseDecrease() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
  };



  return (
    <div className="col-md-3 mt-3 flex justify-between">
    <div className="border flex p-1">
      <div  onClick={handleDecrement}>
        <button  type="button">-</button>
      </div>
      <input type="text" value={quantity} readOnly className="w-16 mx-4 text-center border-none " />
      <div onClick={handleIncrement}>
        <button type="button">+</button>
      </div>
    </div>
  
    <div className="items-end flex-end  p-2 bg-teal-500 text-white" >
      <AiOutlineHeart />
    </div>
  </div>
  
   
  );
}

export default IncreaseDecrease;
