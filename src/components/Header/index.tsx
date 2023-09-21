import StarBurst from "../../assets/svg/fluent_checkmark-starburst-20-regular.svg";
import Truck from "../../assets/svg/ph_truck-light.svg";
import Heart from "../../assets/svg/mdi_cards-heart-outline.svg";
import CheckMark from "../../assets/svg/fluent_arrow-sync-checkmark-20-regular.svg";
import ArrowLeft from "../../assets/svg/Arrow_left.svg";
import ArrowRight from "../../assets/svg/Arrow_right.svg";
import HeaderButton from "../HeaderButton";
import { useState } from "react";
function Header() {
  const [buttonIndex, setButtonIndex] = useState<number>(0);
  const headerButtonsArray = [
    {
      svg: StarBurst,
      alt: "StarBurst_SVG",
      text: "30-DAY SATISFACTION GUARANTEE",
    },
    {
      svg: Truck,
      alt: "Truck_SVG",
      text: "Free delivery on orders over $40.00",
    },
    {
      svg: Heart,
      alt: "Heart_SVG",
      text: "Free delivery on orders over $40.00",
    },
    {
      svg: CheckMark,
      alt: "CheckMark_SVG",
      text: "100% Money Back Guarantee",
    },
  ];
  const handleClickRight = () => {
    setButtonIndex((prevs: number) => {
      if (prevs - 1 < 0) {
        return 3;
      }
      return prevs - 1;
    });
  };
  const handleClickLeft = () => {
    setButtonIndex((prevs: number) => {
      if (prevs + 1 > 3) {
        return 0;
      }
      return prevs + 1;
    });
  };
  return (
    <header className="h-[50px] bg-[#252F3D] w-screen flex justify-around items-center">
      {headerButtonsArray.map((item, index) => {
        return (
          <div key={index} className="hidden lg:inline">
            <HeaderButton svg={item.svg} alt={item.alt} text={item.text} />
          </div>
        );
      })}
      <div className="flex justify-between items-center w-screen max-w-[350px] lg:hidden px-2">
        <img
          src={ArrowRight}
          alt={"ArrowRight"}
          className="w-5 h-5 cursor-pointer"
          onClick={handleClickRight}
        />
        <HeaderButton
          svg={headerButtonsArray[buttonIndex].svg}
          alt={headerButtonsArray[buttonIndex].alt}
          text={headerButtonsArray[buttonIndex].text}
        />
        <img
          src={ArrowLeft}
          alt={"ArrowLeft"}
          className="w-5 h-5 cursor-pointer"
          onClick={handleClickLeft}
        />
      </div>
    </header>
  );
}

export default Header;
