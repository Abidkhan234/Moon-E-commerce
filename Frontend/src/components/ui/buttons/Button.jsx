import React from "react";

const Button = ({
  btnType = "text",
  btnText = "",
  showBorder = true,
  color = "",
  clickHandler,
  icon = null,
}) => {
  return (
    <button
      type={btnType}
      className={`uppercase w-full sm:text-lg text-sm font-medium text-[#${color}] ${
        showBorder ? "border " : "border-none"
      } border-[#${color}] py-2 cursor-pointer ${
        icon && "flex items-center gap-1 justify-center"
      }`}
      onClick={() => clickHandler && clickHandler()}
    >
      {btnText}
      {icon && <span className="text-base">{icon}</span>}
    </button>
  );
};

export default Button;
