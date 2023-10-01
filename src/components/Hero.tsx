"use client";
import React, { useState } from "react";
import wedding from "../../public/hero_picture.jpeg";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { IoPersonOutline, IoLocationOutline } from "react-icons/io5";
import CustomButton from "./CustomButton";

const events = [
  "Birthday",
  "Wedding",
  "Conference",
  "Baby Shower",
  "Graduation",
  "Anniversary",
  "Corporate Event",
  "Music Festival",
  "Charity Gala",
  "Sports Tournament",
  "Art Exhibition",
  "Product Launch",
  "Holiday Party",
  "Networking Event",
  "Workshop",
  "Fashion Show",
];

const locations = [
  "Lagos",
  "Abuja",
  "Kano",
  "Ibadan",
  "Kaduna",
  "Port Harcourt",
  "Benin City",
  "Maiduguri",
  "Zaria",
  "Aba",
  "Jos",
  "Ilorin",
  "Oyo",
  "Enugu",
  "Abeokuta",
  "Onitsha",
  "Warri",
  "Sokoto",
  "Calabar",
  "Uyo",
];

const Hero = () => {
  const [open, setOpen] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const filteredEvents = events.filter((event) =>
    event.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchLocation.toLowerCase())
  );
  const handleOptionClick = (event: string) => {
    setSearchText(event);
    setOpen(false);
  };
  const handleInputChange = (e: any) => {
    setSearchText(e.target.value);
    setOpen(true);
  };

  const handleLocationClick = (event: string) => {
    setSearchLocation(event);
    setOpen(false);
  };

  const handleLocationChange = (e: any) => {
    setSearchLocation(e.target.value);
    setOpen(true);
  };

  //   const handleScroll = () => {};
  return (
    <div className=" h-[650px] w-full relative font-sans ">
      <div className="h-full w-full relative ">
        <Image
          alt="wedding venue"
          src={wedding}
          fill
          sizes="100vw"
          className="object-cover "
        />
      </div>
      <div className="absolute h-full w-full opacity-30 bg-black  inset-0 "></div>
      <div className="h-full top-0 flex flex-col gap-20 inset-x-0 container  absolute ">
        <div className="flex flex-row justify-between py-3">
          <span className="font-bold text-green-300 text-4xl">Logo</span>
          <span className="text-white text-xl">Account things</span>
        </div>
        <div className="flex flex-col gap-12">
          <span className="text-white font-[600] text-7xl text-center">
            Find and book venues{" "}
          </span>
          <span className="text-white font-[400] text-5xl text-center">
            for any event imaginable
          </span>
        </div>
        <div className="bg-white w-full h-24 rounded-lg flex flex-row">
          <form className="flex flex-row h-full divide-x divide-inherit w-3/4 items-center justify-between p-4 ">
            <span className="flex flex-row gap-1 items-center w-1/3 ">
              <span className="text-3xl h-full font-thin">
                <BiSearch />
              </span>
              <span className="flex flex-col pl-4 gap-2 text-base w-full pr-4 relative">
                <label className="uppercase tracking-widest">Event type </label>
                <input
                  type="text"
                  className=" appearance-none border-none bg-white w-full rounded-md py-2 text-gray-700 leading-tight focus:outline-none focus:ring-0"
                  placeholder="What event are you planning?"
                  value={searchText}
                  onChange={handleInputChange}
                />
                {searchText.length > 0 && open && (
                  <div className="absolute z-10 w-full mb-1 bg-white border border-gray-300 rounded-md shadow-lg top-16">
                    {filteredEvents.map((event, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleOptionClick(event)}
                      >
                        {event}
                      </div>
                    ))}
                  </div>
                )}
              </span>
            </span>
            <span className="flex flex-row gap-1 items-center w-1/3 pl-4 ">
              <span className="text-3xl h-full font-thin">
                <IoPersonOutline />
              </span>
              <span className="flex flex-col pl-4 gap-2  ">
                <label className="uppercase tracking-widest">Guests </label>
                <input
                  className=""
                  type="number"
                  placeholder="Number of guests"
                />
              </span>
            </span>
            <span className="flex flex-row gap-1 items-center w-1/3 pl-4  ">
              <span className="text-3xl h-full font-thin">
                <IoLocationOutline />
              </span>
              <span className="flex flex-col pl-4 gap-2 relative w-full">
                <label className="uppercase tracking-widest">Location </label>
                <input
                  type="text"
                  className=" appearance-none border-none bg-white w-full rounded-md py-2 text-gray-700 leading-tight focus:outline-none focus:ring-0"
                  placeholder="Where is your Location?"
                  value={searchLocation}
                  onChange={handleLocationChange}
                />
                {searchLocation.length > 0 && open && (
                  <div className="absolute z-10 w-full mb-1 bg-white border border-gray-300 rounded-md shadow-lg top-16">
                    {filteredLocations.map((event, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleLocationClick(event)}
                      >
                        {event}
                      </div>
                    ))}
                  </div>
                )}
              </span>
            </span>
          </form>
          <div className="items-center justify-end flex  w-1/4 pr-4 ">
            {" "}
            <CustomButton title="Submit" containerStyles="w-44" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
