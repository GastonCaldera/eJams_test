import GuaranteeLogo from "../../assets/img/image-6.png";

function GuaranteeBox() {
  return (
    <div className="flex w-full items-center">
      <img
        src={GuaranteeLogo}
        alt="GuaranteeLogo"
        className="w-[48px] lg:w-[88px] mr-3"
      ></img>
      <p className="text-[#4D5254] text-xs lg:text-base font-normal font-manrope mb-4 mt-2">
        If you are not completely thrilled with your Clarifion - We have a{" "}
        <b>30 day satisfaction guarantee.</b> Please refer to our return policy
        at the bottom of the page for more details. Happy Shopping!
      </p>
    </div>
  );
}

export default GuaranteeBox;
