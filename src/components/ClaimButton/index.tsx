import LineArrowRight from "../../assets/svg/Line-1.svg";
function ClaimButton() {
  return (
    <button
      className="flex justify-center items-center w-full h-[59px] bg-[#59AE43] rounded-full mt-4 mb-6 transition duration-300 ease-out hover:bg-[#2C7EF8]"
      onClick={() => console.log("Claim my discount")}
    >
      <p className="text-sm lg:text-xl uppercase text-white mr-5 font-bold font-manrope">
        Yes - Claim my discount
      </p>
      <img
        src={LineArrowRight}
        alt={"LineArrowRight"}
        className="w-3 lg:w-4"
      ></img>
    </button>
  );
}

export default ClaimButton;
