import { useEffect } from "react";
import { PopupWidget } from 'react-calendly';

function CalendlySectionPopUp() {
  return (
    <div>
      <PopupWidget
          url="https://calendly.com/certaincarl" 
          rootElement={document.getElementById('root')} 
          text="Schedule a Call" 
          textColor="#ffffff" 
          color="#0069ff" 
      />
    </div>
  );
};

export default CalendlySectionPopUp;