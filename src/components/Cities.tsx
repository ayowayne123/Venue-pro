import React from "react";
import Image from "next/image";
import { CityProps } from "@/types";

function Cities({ name, description, image }: CityProps) {
  return (
    <div>
      <div className="cards ">
        <div className="overlay"> </div>
        <div className="info">
          <span className="font-bold text-2xl drop-shadow-md tracking-wide uppercase">
            {name}
          </span>
          <span className="text-center font-medium text-xl">{description}</span>
        </div>
        <Image
          alt="lagos"
          src={`/../public/${image}`}
          fill
          sizes="100vw"
          className="object-cover "
        />
      </div>
    </div>
  );
}

export default Cities;
