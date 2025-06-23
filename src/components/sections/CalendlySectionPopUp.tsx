import { useEffect } from "react";

function CalendlySectionPopUp() {
  useEffect(() => {
    // Avoid injecting scripts multiple times
    if (document.getElementById('calendly-widget-script')) return;

    // Inject CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Inject JS
    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/certaincarl',
          text: 'Schedule time with me',
          color: '#0069ff',
          textColor: '#ffffff',
          branding: true
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
}

export default CalendlySectionPopUp;