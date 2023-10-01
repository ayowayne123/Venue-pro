"use client";
import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles} bg-rose-500 hover:bg-rose-600 rounded-lg py-3 text-2xl text-white px-4`}
      onClick={handleClick}
    >
      <span className={`flex-1 `}>{title}</span>
    </button>
  );
};

export default CustomButton;
