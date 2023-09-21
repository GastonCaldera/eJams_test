function NoThanksButton() {
  return (
    <button
      className="flex w-full justify-center mt-4"
      onClick={() => console.log("No thanks, I don’t want this.")}
    >
      <p className="text-[#F82C2C] font-normal font-manrope font-medium uppercase underline transition duration-300 ease-out hover:text-[#2C7EF8]">
        No thanks, I don’t want this.
      </p>
    </button>
  );
}

export default NoThanksButton;
