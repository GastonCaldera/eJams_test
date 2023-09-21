import GreyLock from "../../assets/svg/lock-grey.svg";
import Visa from "../../assets/svg/visa.svg";
import ShopPay from "../../assets/svg/shop-pay.svg";
import PayPal from "../../assets/svg/paypal.svg";
import MasterCard from "../../assets/svg/mastercard.svg";
import Gpay from "../../assets/svg/gpay.svg";
import ApplePay from "../../assets/svg/apple-pay.svg";
import Amex from "../../assets/svg/amex.svg";

function PayInfoBox() {
  return (
    <div className="w-full border border-[#CFCFCF] rounded-[10px] divide-y lg:divide-y-0 lg:divide-x p-2 flex flex-col lg:flex-row lg:justify-between items-center">
      <div className="flex divide-x justify-between">
        <div className="flex pr-2 lg:px-4 items-center">
          <p className="text-xs font-manrope">Free shipping</p>
        </div>
        <div className="flex pl-2 lg:px-2 items-center justify-center">
          <img src={GreyLock} alt={"GreyLock"} className="m-2.5 w-3"></img>
          <p className="text-xs font-manrope">Secure 256-bit SSL encryption.</p>
        </div>
      </div>
      <div className="flex pl-2 lg:pl-4 items-center py-2 lg:mt-0 mt-2 w-full lg:w-auto justify-center">
        <img src={Visa} alt={"Visa"} className="w-6 h-3.5"></img>
        <img src={ShopPay} alt={"ShopPay"} className="w-6 h-3.5"></img>
        <img src={PayPal} alt={"PayPal"} className="w-6 h-3.5"></img>
        <img src={MasterCard} alt={"MasterCard"} className="w-6 h-3.5"></img>
        <img src={Gpay} alt={"Gpay"} className="w-6 h-3.5"></img>
        <img src={ApplePay} alt={"ApplePay"} className="w-6 h-3.5"></img>
        <img src={Amex} alt={"Amex"} className="w-6 h-3.5"></img>
      </div>
    </div>
  );
}

export default PayInfoBox;
