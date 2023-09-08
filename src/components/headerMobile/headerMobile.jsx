import React, { useEffect, useState } from "react";
import { currentTime } from "../../services/currentTime.js";
import { BsFillBarChartFill } from "react-icons/bs";
import { IoWifi, IoBatteryFullSharp } from "react-icons/io5";

const HeaderMobile = () => {
  const [time, setTime] = useState(currentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      <section className="time text-[10px] m-1 ml-4">{time}</section>
      <section className="icons flex justify-end items-start space-x-1 absolute top-0 right-0 mt-1 mr-3 w-12">
        <BsFillBarChartFill />
        <IoWifi />
        <IoBatteryFullSharp />
      </section>
    </div>
  );
};

export default HeaderMobile;
