import ListBox from "../ListBox";
import PreviewBox from "../Preview";
import PercentageIcon from "../../assets/svg/percentage.svg";
import ClaimButton from "../ClaimButton";

function StepThreeLeft() {
  return (
    <div className="w-full max-w-[575px]">
      <div className="hidden md:inline flex">
        <h1 className="text-[32px] font-manrope font-normal capitalize mr-1">
          <b className="text-[#2C7EF8] mr-1 font-normal uppercase">
            ONE TIME ONLY
          </b>{" "}
          special price for 6 extra Clarifion for only{" "}
          <b className="text-[#2C7EF8] mr-1 font-normal">$14 each</b>
        </h1>
        <h1 className="text-[32px] font-manrope font-normal capitalize">
          ($84.00 total!)
        </h1>
      </div>
      <PreviewBox />
      <div className="w-full lg:hidden inline">
        <p className="text-[##4D5254] text-xs font-normal font-manrope text-center mb-4">
          Simply plug a Clarifion into any standard outlet and replace bulky,
          expensive air purifiers with a simple.
        </p>
      </div>
      <ListBox />
      <div className="flex items-center">
        <img
          src={PercentageIcon}
          alt={"PercentageIcon"}
          className="mr-4 w-6 md:w-8"
        ></img>
        <p className="md:text-base font-normal font-manrope">
          Save <b className="font-normal text-[#2C7EF8]">53%</b> and get{" "}
          <b className="font-normal text-[#2C7EF8]">6 extra Clarifision</b> for
          only <b className="font-normal text-[#2C7EF8]">$14 Each</b>.
        </p>
      </div>
      <ClaimButton />
    </div>
  );
}

export default StepThreeLeft;
