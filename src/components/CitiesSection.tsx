"use client";
import React, { useRef, useState, useEffect } from "react";
import Cities from "./Cities";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const locationInfo = [
  {
    name: "Lagos",
    description: "Explore the commercial hub of Nigeria",
    image: "lagos.jpg",
  },
  {
    name: "Imo",
    description: "Enjoy the beauty of the east",
    image: "hero_picture2.jpeg",
  },
  {
    name: "Kano",
    description: "The Northern home",
    image: "hero_picture.jpeg",
  },
  {
    name: "Abuja",
    description: "Party with the Federal Capital",
    image: "lagos.jpg",
  },
  {
    name: "Benin",
    description: "Visit the heart of Edo",
    image: "lagos.jpg",
  },
  {
    name: "Sokoto",
    description: "What you're searching for in in your sokoto",
    image: "lagos.jpg",
  },
  {
    name: "Ekiti",
    description: "Visit this record breaking state",
    image: "lagos.jpg",
  },
];

function CitiesSection() {
  // const containerRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);

  const scrollToNextCard = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 303,
        behavior: "smooth",
      });
    }
  };

  const scrollToPreviousCard = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -303,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      setShowLeftButton(containerRef.current.scrollLeft > 0);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div>
      <div className="container relative">
        <h2>Popular cities for Events</h2>
        <div className="">
          {showLeftButton && (
            <div
              className="w-10 h-10 rounded-full flex cursor-pointer flex-row justify-center text-2xl text-red-400 items-center bg-white absolute left-5 top-1/2 z-30 overflow-hidden drop-shadow-2xl shadow-2xl"
              onClick={scrollToPreviousCard}
            >
              <AiOutlineArrowLeft />
            </div>
          )}
          <div
            className="w-10 h-10 rounded-full flex cursor-pointer flex-row justify-center text-2xl text-red-400 items-center bg-white absolute right-5 top-1/2 z-30 overflow-hidden drop-shadow-2xl shadow-2xl"
            onClick={scrollToNextCard}
          >
            <AiOutlineArrowRight />
          </div>
          <div
            className="flex justify-between gap-7 overflow-x-scroll scroll-smooth snap-x snap-mandatory no-scrollbar"
            ref={containerRef}
          >
            {locationInfo.map((place, index) => (
              <div className="w-full snap-always snap-start" key={index}>
                <Cities
                  name={place.name}
                  image={place.image}
                  description={place.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CitiesSection;
