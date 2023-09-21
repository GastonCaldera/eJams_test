import Preview from "../../assets/img/image-removebg-preview.png";
import Star from "../../assets/svg/ant-design_star-filled.svg";
import PointIcon from "../../assets/svg/Group.svg";

function PreviewBox() {
  return (
    <div className="flex my-4 w-full">
      <img
        src={Preview}
        alt={"Preview"}
        className={"h-[80px] md:h-[164px]"}
      ></img>
      <div className="w-full ml-6">
        <div className="w-full flex justify-between mb-3">
          <p className="text-sm md:text-xl font-normal font-manrope">
            Clarifion Air Ionizer
          </p>
          <div className="flex items-center">
            <p className="text-[10px] md:text-base flex font-semibold text-[#969696] line-through mr-2.5 font-manrope">
              $180
            </p>
            <p className="text-[#2C7EF8] text-sm md:text-[22px] no-underline font-manrope">
              $84
            </p>
          </div>
        </div>
        <div className="flex mb-3">
          <img src={Star} alt={"Star"} className="w-3 md:w-[18px]"></img>
          <img src={Star} alt={"Star"} className="w-3 md:w-[18px]"></img>
          <img src={Star} alt={"Star"} className="w-3 md:w-[18px]"></img>
          <img src={Star} alt={"Star"} className="w-3 md:w-[18px]"></img>
          <img src={Star} alt={"Star"} className="w-3 md:w-[18px]"></img>
        </div>
        <div className="flex mb-3">
          <img src={PointIcon} alt={"PointIcon"} className="w-3 md:w-4"></img>
          <p className="text-[##4D5254] text-xs md:text-base ml-4 font-light font-manrope">
            12 left in Stock
          </p>
        </div>
        <div className="flex mb-3 max-xl:hidden inline">
          <p className="text-[##4D5254] text-base font-normal font-manrope">
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PreviewBox;
