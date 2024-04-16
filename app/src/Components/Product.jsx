import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Product(props) {
  return (
    <div
      onClick={() => props.toggler()} // just added
      className="max-w-xs rounded overflow-hidden shadow-lg my-4"
    >
      <img
        className="w-full"
        src="https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Images/Web/dodatki/kubelki_1os-frytki_web.png"
        alt="Sunset in the mountains"
      />

      <div className="flex justify-between px-6 py-4">
        <div className="font-bold text-xl">The Coldest Sunset</div>
        <div className="font-bold font-mono text-xl text-red-700">$35</div>
      </div>
    </div>
  );
}
