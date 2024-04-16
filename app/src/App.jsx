import React from "react";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Modal from "./Components/Modal";
import useToggle from "./Hooks/useToggle";


export default function App() {
  const { on, toggler } = useToggle();

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <Product toggler={toggler} />
      </div>
      {on && <Modal toggler={toggler} />}
    </>
  );
}

