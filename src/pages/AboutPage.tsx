import React from 'react';
import FloatingButton from '../utils/FloatingButton';

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 pb-10 md:pt-24 md:pb-14">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">About</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-left">
          <div className="flex flex-col min-h-screen text-xl leading-loose tracking-widest">
            <h4 className="text-2xl font-semibold mb-20 text-center">
              AI Confidence for Modern Enterprises
            </h4>

            <p className="pt-8 pb-8">AI is changing how businesses operate, innovate, and compete. But with all that promise comes a growing sense of confusion, complexity, and risk.</p>

            <p className="pt-8 pb-8">For tech and HR leaders, making mission-critical decisions is becoming far more stressful:</p>

            <ul className="list-disc pl-6 mb-6">
              <li>Shadow AI tools are popping up without oversight</li>
              <li>Misinformation everywhere</li>
              <li>ROI is unclear</li>
              <li>Security and compliance risks are lurking in every click</li>
            </ul>

            <p className="pt-8 pb-8 font-semibold">ReadyAI.dev exists to change that.</p>

            <p className="pt-8 pb-8">We provide a secure, enterprise-grade AI platform built by a global technology leader, trusted by Fortune 500 companies and government agencies.</p>

            <h4 className="text-2xl font-semibold mt-12 mb-6">Our Mission</h4>

            <p className="pt-8 pb-8 font-semibold">To be the trusted bridge between enterprise innovation and AI risk mitigation.</p>
            <p className="pt-8 pb-8">We believe AI adoption doesn’t have to be risky, rushed, or chaotic.</p>
            <p className="pt-8 pb-8">Our mission is to help organizations embrace AI with clarity, confidence, and compliance.</p>
            <p className="pt-8 pb-8">We guide organizations through strategic AI journeys, especially in high-stakes sectors like healthcare, finance, education, and government.</p>

            <h4 className="text-2xl font-semibold mt-12 mb-6">What Makes Us Different</h4>

            <p className="pt-8 pb-8">We don’t just sell AI tools.</p>
            <p className="pt-8 pb-8">We walk alongside your team to ensure safe adoption, transparent governance, and measurable ROI. That’s the ReadyAI.dev difference.</p>
            <p className="pt-8 pb-8">We’ve seen what works. And more importantly, where enterprises struggle.</p>
            <p className="pt-8 pb-8 font-semibold">American enterprises are using our infrastructure in the real world, and it scales as fast as you do.</p>
            <p className="pt-8 pb-8">The ReadyAI.dev team is equally rock-solid. IT veterans, AI strategists, engineers, and consultants with decades of experience guiding companies through digital transformation.</p>

            <h4 className="text-2xl font-semibold mt-12 mb-6">Who We Help</h4>

            <p className="pt-8 pb-8">Our platform supports:</p>

            <ul className="list-disc pl-6 mb-6">
              <li>C-Level leaders</li>
              <li>Directors</li>
              <li>HR teams</li>
              <li>Researchers</li>
              <li>Educational institutions</li>
              <li>Government agencies</li>
            </ul>

            <p className="pt-8 pb-8">Whether you're exploring LLM integration, AI-powered workflows, or organizational AI governance, our platform can help you.</p>

            <h4 className="text-2xl font-semibold mt-12 mb-6">Why We Do It</h4>

            <p className="pt-8 pb-8">We’ve lived through the biggest tech revolutions.</p>
            <p className="pt-8 pb-8">We understand the excitement, the risk, and the immense potential of AI.</p>
            <p className="pt-8 pb-8">The rise of SaaS and the spread of cloud computing.</p>
            <p className="pt-8 pb-8">Companies fail when they move too fast or believe the hype.</p>
            <p className="pt-8 pb-8">We don't want your company to suffer from AI. We want you to excel and grow as a business.</p>

            <h4 className="text-2xl font-semibold mt-12 mb-6">Meet the People Behind the Platform</h4>

            <img src="/assets/images/readyai-carol-eastman.jpeg" alt="ReadyAI -Carol Eastman" className="rounded-full shadow-md h-60 w-60 ml-24 mt-6" />

            <p className="pt-8 pb-8"><a className="text-blue-600" href="https://www.linkedin.com/in/carol-eastman/">Carol Eastman</a>, our CEO, has spent her career leading multi-million dollar tech companies from startup to successful acquisition.</p>
            <p className="pt-8 pb-8">She brings unmatched depth in IT strategy, business operations, and executive leadership.</p>
            <p className="pt-8 pb-8">Carol is joined by an elite team of AI engineers, cybersecurity specialists, and customer success professionals.</p>
            <p className="pt-8 pb-8">Together, we’re ReadyAI.dev.</p>

            <h4 className="text-2xl font-semibold mt-12 mb-6">A Partnership That Builds Trust</h4>

            <p className="pt-8 pb-8">Partnered with a technology powerhouse based in Northern California.</p>
            <p className="pt-8 pb-8">ReadyAI.dev is proud to bring this world-class infrastructure to organizations so they can <span className="font-semibold">embrace AI safely.</span></p>
            <p className="pt-8 pb-8">Don't just take our word for it.</p>
            <p className="pt-8 pb-8">While ReadyAI.dev is new, our global enterprise AI provider has helped thousands of organizations succeed with enterprise technology.</p>
            <p className="pt-8 pb-8">Curious about the secure platform behind ReadyAI.dev? <a className="text-blue-600" href="https://readyai.dev/contact">Let's talk.</a></p>
          </div>
        </div>
      </div>

      <FloatingButton url="https://devs.ai/signup?ref=sales%40readyai.dev" label="Explore Platform" />
    </div>
  );
};

export default AboutPage;