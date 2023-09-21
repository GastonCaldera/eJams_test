import UpSellSteps from "../../components/UpSellSteps";
import UpSellTitle from "../../components/UpSellTitle";
import UpSellTopImg from "../../components/UpSellTopImg";
import StepThreeRight from "../../components/StepThreeRight";
import StepThreeLeft from "../../components/StepThreeLeft";
import NoThanksButton from "../../components/NoThanksButton";
import GuaranteeBox from "../../components/GuaranteeBox";

function UpSell() {
  return (
    <div className="flex flex-col items-center px-6 mb-8">
      <UpSellTopImg />
      <UpSellTitle />
      <UpSellSteps />
      <div className="container md:bg-[#FAFAFA] rounded-[10px] md:p-10 flex flex-col md:flex-row md:justify-between md:items-start items-center">
        <StepThreeRight />
        <StepThreeLeft />
      </div>
      <div className="max-xl:inline hidden container max-w-[575px]">
        <NoThanksButton />
        <GuaranteeBox />
      </div>
    </div>
  );
}

export default UpSell;
