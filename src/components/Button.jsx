import React from "react";

const Button = (buttonText) => {
    let text = 'defaultText';

    if (buttonText) {
        text=buttonText
    }
  return (
    <div>
      <button>{text}</button>
    </div>
  );
};

export default Button;
