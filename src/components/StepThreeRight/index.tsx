import FrontImage from "../../assets/svg/image-4.svg";
import Avatar from "../../assets/img/avatar.png";
import Stars from "../../assets/svg/Stars.svg";
import Verify from "../../assets/svg/verify-1.svg";

function StepThreeRight() {
  return (
    <div className="w-full max-w-[575px] mr-4">
      <div className="inline md:hidden">
        <h1 className="text-2xl font-manrope font-normal capitalize text-center mb-6">
          <b className="text-[#2C7EF8] mr-1 font-normal uppercase">
            ONE TIME ONLY
          </b>{" "}
          special price for 6 extra Clarifion for only{" "}
          <b className="text-[#2C7EF8] mr-1 font-normal">$14 each</b>
          ($84.00 total!)
        </h1>
      </div>
      <img src={FrontImage} className="w-full" alt="FrontImage"></img>
      <div className="hidden md:inline">
        <div className="bg-white p-6 rounded-[10px] mt-6">
          <div className="flex items-center">
            <img src={Avatar} alt={"Avatar"} className="w-12 h-12 mr-3"></img>
            <div>
              <img src={Stars} alt={"Stars"} className="w-[78px]"></img>
              <div className="flex">
                <p className="text-sm font-manrope font-bold mr-2 t-[##333333]">Ken T.</p>
                <img src={Verify} alt={"Verify"} className="w-4 mr-2"></img>
                <p className="text-sm font-manrope font-normal">
                  Verified Customer
                </p>
              </div>
            </div>
          </div>
          <p className="text-base font-manrope font-normal text-[#4D5254]">
            As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StepThreeRight;
