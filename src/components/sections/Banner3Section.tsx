import { Shield, Upload, Cloud, Globe2, Zap, QrCode } from "lucide-react";
import SlideAnimator from "../../utils/SlideAnimator";

export default function Banner3Section() {
  return (

    <SlideAnimator direction="right">
      
      <div className="text-white min-h-[400px] flex items-center justify-center px-8 py-8 relative overflow-hidden">
        
        {/* QR Code Background Pattern */}
        <QrCode className="absolute left-10 top-10 w-24 h-24 text-accent-light/10 z-0" />
        <QrCode className="absolute right-20 top-1/3 w-16 h-16 text-accent-light/10 z-0" />
        <QrCode className="absolute left-1/4 bottom-16 w-20 h-20 text-accent-light/10 z-0" />
        <QrCode className="absolute right-1/4 bottom-24 w-28 h-28 text-accent-light/10 z-0" />
        <QrCode className="absolute left-1/2 top-1/4 w-16 h-16 text-accent-light/10 z-0" />


        <div className="grid grid-cols-2 gap-12 w-full max-w-7xl items-center relative z-10">
          {/* Left Side */}
          <div className="flex flex-col items-center text-left space-y-6">
            <h2 className="text-3xl text-accent2 font-semibold">
              Built for the <span className="text-accent">Agent Era</span>
            </h2>
          </div>

          {/* Right Side Diagram */}
          <div className="relative">
            {/* Center Agent */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 rounded-full border-4 border-accent-light overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="AI Agent"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Top - LLM */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center">
              <div className="bg-white rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                  alt="LLM"
                  className="w-6 h-6"
                />
              </div>
              <p className="text-sm text-accent-dark mt-2">LLM</p>
            </div>

            {/* Top Left - Upload files */}
            <div className="absolute top-20 left-6 text-center">
              <div className="bg-accent p-3 rounded-full mx-auto">
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-sm text-accent-dark mt-2">Upload files</p>
            </div>

            {/* Left - User input */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-center">
              <div className="bg-accent p-3 rounded-full mx-auto">
                <Shield className="w-5 h-5" />
              </div>
              <p className="text-sm text-accent-dark mt-2">User input</p>
            </div>

            {/* Bottom Left - Crawl Website */}
            <div className="absolute bottom-20 left-6 text-center">
              <div className="bg-accent p-3 rounded-full mx-auto">
                <Globe2 className="w-5 h-5" />
              </div>
              <p className="text-sm text-accent-dark mt-2">Crawl Website</p>
            </div>

            {/* Bottom Right - APIs */}
            <div className="absolute bottom-20 right-6 text-center">
              <div className="bg-accent p-3 rounded-full mx-auto">
                <Cloud className="w-5 h-5" />
              </div>
              <p className="text-sm text-accent-dark mt-2">APIs</p>
            </div>

            {/* Right - Output */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-center">
              <div className="bg-accent p-3 rounded-full mx-auto">
                <Zap className="w-5 h-5" />
              </div>
              <p className="text-sm text-accent-dark mt-2">Output</p>
            </div>

            {/* Top Right - Connect Data */}
            <div className="absolute top-20 right-6 text-center">
              <div className="flex space-x-1 justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" className="w-5 h-5" alt="Excel" />
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="w-5 h-5" alt="GitHub" />
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" className="w-5 h-5" alt="Google Drive" />
              </div>
              <p className="text-sm text-accent-dark mt-2">Connect Data</p>
            </div>
          </div>
        </div>
      </div>
    </SlideAnimator>
  );
}