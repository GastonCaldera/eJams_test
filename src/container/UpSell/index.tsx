import UpSellSteps from "../../components/UpSellSteps";
import UpSellTitle from "../../components/UpSellTitle";
import UpSellTopImg from "../../components/UpSellTopImg";
import StepThreeRight from "../../components/StepThreeRight";
import StepThreeLeft from "../../components/StepThreeLeft";

function UpSell() {
  return (
    <div className="flex flex-col items-center px-6">
      <UpSellTopImg />
      <UpSellTitle />
      <UpSellSteps />
      <div className="container md:bg-[#FAFAFA] rounded-[10px] md:p-10 flex flex-col md:flex-row md:justify-between  items-center">
        <StepThreeRight />
        <StepThreeLeft />
      </div>
    </div>
  );
}

export default UpSell;
