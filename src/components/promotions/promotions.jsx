import React from "react";
import "./promotions.scss";
import { imgsPromotion } from "../imgs/imgs";
const Promotions = () => {
  return (
    <div>
      <section className="relative w-[259px] h-20 top-[10px] left-4">
        <div className="flex mr-2">
          {imgsPromotion.map((img) => (
            <img
              key={img.id}
              src={img.url}
              alt={img.description}
              className="mr-2"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Promotions;
