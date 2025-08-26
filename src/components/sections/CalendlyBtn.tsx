import React from "react";
import { PopupButton } from "react-calendly";

interface CalendlyButtonProps {
  url?: string;
  text?: string;
  className?: string;
  pageSettings?: Record<string, unknown>;
  utm?: Record<string, string>;
  prefill?: Record<string, any>;
}

const CalendlyBtn: React.FC<CalendlyButtonProps> = ({
  url = "https://calendly.com/readyai-sales",
  text = "Schedule a Call",
  className = "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700",
  pageSettings,
  utm,
  prefill,
}) => {
  return (
    <PopupButton
      url={url}
      rootElement={document.getElementById("root") as HTMLElement}
      text={text}
      className={className}
      pageSettings={pageSettings}
      utm={utm}
      prefill={prefill}
    />
  );
};

export default CalendlyBtn;