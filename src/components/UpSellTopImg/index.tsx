import ClarifionLogo from "../../assets/img/clarifion_Logo_1.png";
import McAfeeLogo from "../../assets/svg/Frame.svg";
import Norton from "../../assets/svg/norton-antivirus-logo-1.svg";

function UpSellTopImg() {
  return (
    <div className="flex justify-between items-center w-full container my-[30px]">
      <div>
        <img
          src={ClarifionLogo}
          alt={"ClarifionLogo"}
          className="sm:w-48 sm:h-9 w-[106px] h-5"
        />
      </div>
      <div className="flex">
        <img
          src={McAfeeLogo}
          alt={"McAfeeLogo"}
          className="sm:w-[88px] sm:h-8 w-11 h-4 mr-8"
        />
        <img
          src={Norton}
          alt={"ClarifionLogo"}
          className="sm:w-[82px] sm:h-8 w-[41px] h-4"
        />
      </div>
    </div>
  );
}

export default UpSellTopImg;
