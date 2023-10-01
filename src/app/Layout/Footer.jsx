import React from "react";
import logo from "../../../public/venuePro_full_white.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" h-[536px] text-white bg-footerBlack w-full">
      <div className="grid lg:grid-cols-footer-lg divide-x divide-[#565656] h-full w-full">
        {/* 1st column on footer */}
        <div className="flex flex-col py-[72px] px-9 justify-between w-full ">
          <div>
            <Image
              src={logo}
              alt="logo of venue pro"
              className="lg:w-[260px] "
            />
          </div>
          <div className="flex flex-col gap-7 w-full ">
            <span className="text-lg">
              Stay in the loop with our weekly newsletter
            </span>
            <form className="w-5/6 max-w-84 ">
              <span className="relative h-[72px] w-full ">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="placeholder:text-white flex w-full  p-6 items-center justify-start h-full rounded-full bg-[#454545] "
                />
                <button className="bg-black absolute top-0 right-0 flex justify-center flex-row items-center h-full rounded-full w-40">
                  <span>Submit </span>
                </button>
              </span>
            </form>
          </div>
        </div>

        {/* 2nd column on footer */}
        <div className="">
          <div>
            <h1 className="uppercase font-black text-lg">Home</h1>
          </div>
        </div>
        <div>Venues</div>
      </div>
    </footer>
  );
};

export default Footer;
