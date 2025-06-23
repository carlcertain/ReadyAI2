import React from 'react';
import { useEffect } from "react";

const CalendlySection: React.FC = () => {
     useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/certaincarl/30min?hide_gdpr_banner=1"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>     
  );
};

export default CalendlySection;