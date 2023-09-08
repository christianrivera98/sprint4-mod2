import React from "react";
import Location from "../../components/location/location";
import useScreenSize from "../../hooks/useScreenSize";
import "./home.scss";
import Promotions from "../../components/promotions/promotions";
import Categories from "../../components/categories/categories";

import ButtonNavigations from "../../components/buttonNavigations/buttonNavigations";
import HeaderMobile from "../../components/headerMobile/headerMobile";
import MainHome from "../../components/mainHome/mainHome";

const Home = () => {
  const { width, height } = useScreenSize();
  console.log(`width: ${width}, height: ${height}`);

  return (
    <>
      {/* This will disappear when the window is less than 500 pixels wide. */}
      {width <= 380 && (
        <div className="bg-gradient-to-b from-white to-[#ffbc74] w-[375px] h-[844px] top-[-464px] left-[-214px] fondo">
          <HeaderMobile />
          <Location />
          <Promotions />
          <Categories />
          <MainHome />
          <ButtonNavigations />
        </div>
      )}
    </>
  );
};

export default Home;
