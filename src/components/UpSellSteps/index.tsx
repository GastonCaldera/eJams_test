import CheckIcon from "../../assets/svg/tick-circle.svg";

function UpSellSteps() {
  return (
    <div className="flex justify-between items-center w-full container my-[30px]">
      <div className="flex flex-col sm:flex-row items-center ">
        <div className="w-5 h-5 bg-[#85BF55] flex items-center justify-center rounded-full mr-0 sm:w-10 sm:h-10 sm:mr-5">
          <img src={CheckIcon} alt={"CheckIcon"} className="w-4 h-4" />
        </div>
        <div className="flex">
          <p className="mr-1 hidden md:inline text-xs sm:text-sm py-2 font-manrope font-normal flex">
            Step 1 :
          </p>
          <p className="text-xs sm:text-sm py-2 font-manrope font-normal flex">
            Cart Review
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center">
        <div className="w-5 h-5 bg-[#85BF55] flex items-center justify-center rounded-full mr-0 sm:w-10 sm:h-10 sm:mr-5">
          <img src={CheckIcon} alt={"CheckIcon"} className="w-4 h-4" />
        </div>
        <div className="flex">
          <p className="mr-1 hidden md:inline text-xs sm:text-sm py-2 font-manrope font-normal flex">
            Step 2 :
          </p>
          <p className="text-xs sm:text-sm py-2 font-manrope font-normal flex">
            Checkout
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center ">
        <div className="w-5 h-5 bg-[#2C7EF8] flex items-center justify-center rounded-full mr-0 sm:w-10 sm:h-10 sm:mr-5">
          <p className="text-xs sm:text-sm py-2 font-manrope font-normal text-white">
            3
          </p>
        </div>
        <div className="flex">
          <p className="mr-1 hidden md:inline text-xs sm:text-sm py-2 font-manrope font-normal flex">
            Step 3 :
          </p>
          <p className="text-xs sm:text-sm py-2 font-manrope font-normal flex">
            Special Offer
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center ">
        <div className="w-5 h-5 border-[#2C7EF8] border-2 flex items-center justify-center rounded-full mr-0 sm:w-10 sm:h-10 sm:mr-5">
          <p className="text-xs sm:text-sm py-2 font-manrope font-normal text-[#2C7EF8]">
            4
          </p>
        </div>
        <div className="flex">
          <p className="mr-1 hidden md:inline text-xs sm:text-sm py-2 font-manrope font-normal flex">
            Step 4 :
          </p>
          <p className="text-xs sm:text-sm py-2 font-manrope font-normal flex">
            Confirmation
          </p>
        </div>
      </div>
    </div>
  );
}

export default UpSellSteps;
