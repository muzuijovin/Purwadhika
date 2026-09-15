import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export function UseStatePage() {
  const [quantity, setQuantity] = useState<number>(0);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [noted, setNoted] = useState<string>("");
  const [alert, setAlert] = useState<string>("");
  
  const handleDecreaseQuantity = () => {
    setQuantity((prevVal) => {
      if (prevVal < 1) {
        return prevVal;
      } else {
        return prevVal - 1;
      }
    });
  };

  const handleIncreastQuantity = () => {
    setQuantity((prevVal) => {
      if (prevVal > 9) {
        return prevVal;
      } else {
        return prevVal + 1;
      }
    });
  };

  const togglePassword = () => {
    setIsShowPassword((prev) => {
      if (prev === false) {
        return true;
      }
      return false;
    });
  };

  const handleNotedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    if (newText.length > 10) {
      setAlert("Bio max 10 karakter");
      return ;
    }
      setNoted(newText)
      setAlert('')
  };

  return (
    <>
      <div className="flex justify-center p-10 bg-amber-300">
        <div className="flex items-center gap-3">
          <button
            disabled={quantity === 0}
            onClick={handleDecreaseQuantity}
            className="btn btn-success w-5 h-5"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            // disabled={quantity === 10}
            onClick={handleIncreastQuantity}
            className={`btn ${quantity === 10 ? "btn-error" : "btn-success"} w-5 h-5`}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center mt-20 gap-3 bg-amber-600">
        <label className="input">
          <input
            type={isShowPassword === true ? "text" : "password"}
            className="grow"
            placeholder="Search"
          />

          {isShowPassword === true ? (
            <FaRegEyeSlash
              onClick={togglePassword}
              className="cursor-pointer"
            />
          ) : (
            <FaRegEye onClick={togglePassword} className="cursor-pointer" />
          )}
        </label>

        <button className="btn btn-success">Submit</button>
      
      </div>
        <div className="flex justify-center bg-amber-100 mt-20">
        <div>
          <p>{noted}</p>
          <input
            onChange={handleNotedChange}
            type="textarea"
            placeholder="Type here"
            className="input"
          />
          <p className="text-red-500">{alert}</p>
        </div>
      </div>
    </>
  );
  };
