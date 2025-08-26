import React from "react";
import { PopupWidget } from "react-calendly";

interface CalendlySectionPopUpProps {
  url?: string;       // Calendly link
  text?: string;      // Button text
  textColor?: string; // Button text color
  color?: string;     // Button background color
}

const CalendlyBtn: React.FC<CalendlySectionPopUpProps> = ({
  text = "Schedule a Call",
  textColor = "#ffffff",
  color = "#0069ff",
}) => {
  return (
    <div>
      <PopupWidget
        url="https://calendly.com/readyai-sales"
        rootElement={document.getElementById("root") as HTMLElement}
        text={text}
        textColor={textColor}
        color={color}
      />
    </div>
  );
};

export default CalendlyBtn;