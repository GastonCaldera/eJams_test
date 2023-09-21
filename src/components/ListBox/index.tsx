import CheckBlue from "../../assets/svg/tick-circle-blue.svg";
function ListBox() {
  return (
    <div>
      <div className="flex mb-5 items-center">
        <img src={CheckBlue} alt={"CheckBlue"} className="mr-3 h-4 md:h-[22px]"></img>
        <p className="text-xs md:text-base font-normal font-manrope text-[#4D5254]">
          Negative Ion Technology may <b>help with allergens</b>
        </p>
      </div>
      <div className="flex mb-5 items-center">
        <img src={CheckBlue} alt={"CheckBlue"} className="mr-3 h-4 md:h-[22px]"></img>
        <p className="text-xs md:text-base font-normal font-manrope text-[#4D5254]">
          Designed for<b> air rejuvenation</b>
        </p>
      </div>
      <div className="flex mb-5 items-center">
        <img src={CheckBlue} alt={"CheckBlue"} className="mr-3 h-4 md:h-[22px]"></img>
        <p className="text-xs md:text-base font-normal font-manrope text-[#4D5254]">
          <b>Perfect for every room</b> in all types of places.
        </p>
      </div>
    </div>
  );
}

export default ListBox;
