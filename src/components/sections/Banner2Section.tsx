import {
  ShieldCheck,
  Trash2,
  Eye,
  Server,
  Database,
  Settings,
  Key,
  BarChart,
  FileText,
  Shield
} from 'lucide-react';
import SlideAnimator from '../../utils/SlideAnimator.tsx';


const Banner2Section = () => {
  return (
    <SlideAnimator direction="left">
      <section className="relative bg-accent2-light text-white py-20 px-8 overflow-hidden text-lg">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
          {/* Left Side */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-6">
              <ShieldCheck className="text-accent w-10 h-10" />
              <h2 className="text-3xl font-bold">
                <span className="text-accent2">Secure by default</span><br />
                <span className="text-gray-400 text-lg">compliant by design</span>
              </h2>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-6 text-base relative z-10">
            {/* Section 1 */}
            <div>
              <h3 className="text-accent2 font-semibold mb-2">
                Your data. <span className="text-accent">Your rules.</span>
              </h3>
              <div className="space-y-2">
                <Feature icon={<ShieldCheck />} text="Never used to train LLMs" />
                <Feature icon={<Eye />} text="Data visibility controls" />
                <Feature icon={<Trash2 />} text="Delete data anytime" />
                <Feature icon={<Server />} text="US-based servers" />
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-accent2 font-semibold mb-2">
                Enterprise-grade security. <span className="text-accent">Fully compliant.</span>
              </h3>
              <div className="space-y-2">
                <Feature icon={<Database />} text="SOC 2 Compliant" />
                <Feature icon={<Settings />} text="Private Azure instances" />
                <Feature icon={<Settings />} text="GDPR Compliant" />
                <Feature icon={<Server />} text="On-prem deployment options" />
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-accent2  font-semibold mb-2">
                Secure access. <span className="text-accent">Granular control.</span>
              </h3>
              <div className="space-y-2">
                <Feature icon={<Key />} text="SSO verification" />
                <Feature icon={<BarChart />} text="Org-wide analytics" />
                <Feature icon={<Settings />} text="Role-based permissions" />
                <Feature icon={<FileText />} text="Admin chat log access" />
              </div>
            </div>
          </div>
        </div>

        {/* Background Shield Icon */}
        <Shield
          className="absolute left-10 top-1/2 -translate-y-1/2 w-[400px] h-[400px] text-accent2/5 z-0 pointer-events-none"
        />
      </section>
    </SlideAnimator>
  );
};

const Feature = ({ icon, text }: { icon: JSX.Element; text: string }) => (
  <div className="flex items-center space-x-2 text-accent2">
    <div className="text-blue-400">{icon}</div>
    <span>{text}</span>
  </div>
);

export default Banner2Section;
