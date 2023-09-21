import { HeaderButtonProps } from "../../types";
function HeaderButton({ svg, alt, text }: HeaderButtonProps) {
  return (
    <button className="flex items-center" onClick={() => console.log(text)}>
      <img src={svg} alt={alt} className="w-[22px] h-[22px]" />
      <p className="font-manrope font-medium text-white text-xs ml-2 uppercase ">
        {text}
      </p>
    </button>
  );
}

export default HeaderButton;
