import Lock from "../../assets/svg/lock.svg";
function Footer() {
  return (
    <footer className="h-[88px] bg-[#252F3D] flex justify-center">
      <div className="container flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="flex divide-x py-4">
          <p className="px-2 text-white font-manrope font-normal text-xs md:text-base ">
            Copyright (c) 2023
          </p>
          <p className="px-2 text-white font-manrope font-normal text-xs md:text-base">
            Clarifionsupport@clarifion.com
          </p>
        </div>
        <div className="flex">
          <img
            src={Lock}
            alt={"Lock"}
            className="w-4 w-4 cursor-pointer mr-4"
          />
          <p className="text-white font-manrope font-normal text-xs md:text-base">
            Secure 256-bit SSL encryption.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
