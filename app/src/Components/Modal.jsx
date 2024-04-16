import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Modal.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  {
    url: "https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Images/Web/kanapki/cheeseburger.png",
  },
  {
    url: "https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Images/Web/dodatki/sos5.png",
  },
  {
    url: "https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Images/Web/dodatki/sos1.png",
  },
  {
    url: "https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Images/Web/dodatki/sos6.png",
  },

  {
    url: "https://sawepecomcdn.blob.core.windows.net/kfc-web-ordering/KFC/Rok2023grafika/NowaGrafikaPepsi/napoje/kubek_zero-splash_240.png",
  },
];

const ButtonGroup = ({ next, previous }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div className="sliderButtons">
        <button onClick={previous}>
          <BsArrowLeftCircle size={30} />
        </button>
        <button onClick={next}>
          <BsArrowRightCircle size={30} />
        </button>
      </div>
    </div>
  );
};

export default function Modal(props) {
  return (
    <div className="static">
      <div className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75"></div>
      {/** Just added */}
      <div className="fixed top-0 right-0 left-0 z-20 flex justify-center modalWindowContainer">
        <div className="modalWindow">
          <div className="modalMain">
            <div className="modalMainTop">
              <table className="topIcons">
                <tr>
                  <td>
                    <div>
                      <button className="Quit" onClick={() => props.toggler()}>
                        <FaArrowLeft />
                      </button>
                    </div>
                  </td>
                  <td align="right">
                    <div className="heartContainer">
                      <button className="Heart">
                        <FaRegHeart />
                      </button>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div className="modalMainBottom">
              <div className="productImageContainer">
                <img
                  className="productImage"
                  src="https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Images/Web/dodatki/kubelki_1os-frytki_web.png"
                  alt="Sunset in the mountains"
                />
              </div>
              <div className="productNameAndInfo">
                <div className="productName">
                  <span>Kubełek Frytek</span>
                </div>
                <div className="productPrice">
                  <span>9,99</span>
                </div>
              </div>
              <div className="productInfo">
                Lekko solone, złociste i chrupiące frytki. Kubełek - 240 g.
              </div>
            </div>
            <div className="sliderPart">
              <div className="titleText">
                <span>DODAJ TO CO LUBISZ</span>
              </div>
              <div className="Slideshow">
                <Carousel
                  responsive={responsive}
                  autoPlay={false}
                  swipeable={false}
                  draggable={false}
                  showDots={false}
                  infinite={false}
                  partialVisible={false}
                  arrows={false}
                  renderButtonGroupOutside={true}
                  customButtonGroup={<ButtonGroup />}
                >
                  {sliderImageUrl.map((imageUrl, index) => {
                    return (
                      <div className="slider" key={index}>
                        <img src={imageUrl.url} alt="food" />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
            <div className="modalBottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
