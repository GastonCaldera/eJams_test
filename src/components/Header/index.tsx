import ArrowLeft from "../../assets/svg/Arrow_left.svg";
import ArrowRight from "../../assets/svg/Arrow_right.svg";
import HeaderButton from "../HeaderButton";
import { useState } from "react";
import { HEADERBUTTONJSON } from "../../data";
function Header() {
  const [buttonIndex, setButtonIndex] = useState<number>(0);

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
    <header className="h-[50px] bg-[#252F3D] w-full flex justify-around items-center">
      {HEADERBUTTONJSON.map((item, index) => {
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
          svg={HEADERBUTTONJSON[buttonIndex].svg}
          alt={HEADERBUTTONJSON[buttonIndex].alt}
          text={HEADERBUTTONJSON[buttonIndex].text}
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
