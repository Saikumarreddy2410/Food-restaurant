import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./utils/cartSlice";
import { IMG_CDN_URL } from "./constant";
import Default from "../Images/gray.jpg";
import { FaCircle } from "react-icons/fa";
import { TbTriangleFilled } from "react-icons/tb";

const Menustructure = ({ items }) => {
  // console.log("items", items);

  const cartItems = useSelector((store) => store.cart.items);
  const {
    imageId,
    defaultPrice,
    ribbon,
    name,
    description,
    itemAttribute,
    nextAvailableAtMessage,
  } = items;

  // console.log(cartItems);
  const price = items?.price / 100 || defaultPrice / 100;
  let dispatch = useDispatch();

  const FoodCartItems = (items) => {
    console.log(items);
    dispatch(addItem(items));
  };

  return (
    cartItems && (
      <div className="flex justify-between py-5 border-lightgray border-b ">
        <div className="">
          {/*  --------------- Type Of veg Classifier Icon and BestSeller Ribbon text  ------------------ */}

          <div className="flex items-center gap-2">
            {itemAttribute.vegClassifier &&
            itemAttribute.vegClassifier === "VEG" ? (
              <p className="text-darkgreen text-[9px] border border-darkgreen p-[2px]">
                <FaCircle />
              </p>
            ) : (
              <p className="text-red text-[9px] border border-red p-[2px]">
                <TbTriangleFilled />
              </p>
            )}
            <h3 className="text-[#f77f00] font-semibold py-1 xs:text-sm lg:text-[0.9rem]">
              {ribbon?.text ? "★ " + ribbon?.text : null}
            </h3>
          </div>
          <h3 className="font-medium py-1 xs:text-sm lg:text-[0.9rem] ">
            {name}
          </h3>
          <h3 className="text-sm">{"₹ " + price}</h3>

          <p
            className={`p-1 pt-2 lg:w-[35rem] text-gray-400 text-sm w-[40rem] xs:hidden lg:inline-block`}
          >
            {description}
          </p>
        </div>

        {/*  --------------------  If Item Not Available It Shows a Item Available time ----------------------------- */}
        {nextAvailableAtMessage ? (
          <p className="text-[11px] border w-28 h-10 rounded p-1 text-center shadow-lg m-5">
            {nextAvailableAtMessage}
          </p>
        ) : (
          <div className="flex flex-col items-center">
            <img
              src={imageId ? IMG_CDN_URL + imageId : Default}
              className="xs:w-28 sm:w-32 lg:w-40 rounded-xl object-contain"
              alt={name}
            />

            <button
              className="border px-5 text-lightgreen font-medium my-1 rounded "
              onClick={() => {
                FoodCartItems(items);
              }}
            >
              Add
            </button>
          </div>
        )}
      </div>
    )
  );
};

export default Menustructure;
