import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "../constant";

let useRestaurantMenu = (resid) => {
  let [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    Getrestaurantmenuinfo();
  }, []);

  async function Getrestaurantmenuinfo() {
    try {
      const data = await fetch(
        RESTAURANT_MENU_URL + resid + "&submitAction=ENTER"
      );
      // console.log(data);
      if (data.status !== 200) {
        throw new Error("API Internal Error");
      } else {
        const json = await data.json();
        // console.log(json);
        setRestaurantMenu(json?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return { restaurantMenu };
};

export default useRestaurantMenu;
