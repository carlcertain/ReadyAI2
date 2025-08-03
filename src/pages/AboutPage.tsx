import React from 'react';
import { useParams, Link } from 'react-router-dom';
import FloatingButton from '../utils/FloatingButton';

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark overflow-hidden">
        {/* Abstract background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 pb-10 md:pt-24 md:pb-14">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">About</span>
                {/* <span className="block text-2xl mt-4 text-accent">ReadyAI.dev is proudly American</span> */}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-left">
          <div className="flex flex-col min-h-screen text-xl leading-loose tracking-widest">   
            <h4 className="text-2xl font-semibold mb-20 text-center">
              ReadyAI is proudly American
            </h4>
            <p className="pt-8 pb-8">ReadyAI.dev is a proudly American company dedicated to empowering organizations to unlock the full potential of artificial intelligence—securely, compliantly, and confidently. As a trusted partner of a multi-billion-dollar AI platform designed for enterprises and government, we specialize in helping CIOs, CTOs, and HR leaders bridge the critical gap between innovation and safety in today’s AI-driven workplace.</p>
            <p className="pt-8 pb-8">Our team of experienced AI security consultants, engineers, data scientists, and industry specialists work collaboratively to guide executives along a clear, secure path to AI adoption. We understand the unique challenges and opportunities that come with implementing AI at scale and provide expert support every step of the way.</p>
            <p className="pt-8 pb-8">In the rapidly evolving digital office, employees often adopt AI tools without approval or oversight. This practice—known as Shadow AI—exposes companies to significant compliance violations, data breaches, and reputational risks that can be catastrophic.</p>
            <p className="pt-8 pb-8">Our mission is to eliminate Shadow AI by providing a platform built on the pillars of privacy, compliance, and scalability. ReadyAI.dev enables you to roll out AI solutions across your global workforce or formalize AI governance policies without exposing your organization to risk.</p>
            <p className="pt-8 pb-8">We safeguard your sensitive data and ensure compliance through:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Industry-leading encryption</li>
              <li>Role-based access controls</li>
              <li>Rigorous, regular security audits</li>
            </ul>
            <p className="pt-8 pb-8">Backed by stringent certifications including SOC 2 Type II, HIPAA, GDPR, and ISO 27001, our platform offers unparalleled visibility, control, and operational efficiency.</p>
            <p className="pt-8 pb-8">Beyond technology, we support your success with comprehensive onboarding, continuous training, and dedicated customer support—so your team can confidently harness the power of AI to drive innovation while strengthening compliance.</p>
            <p className="font-semibold">ReadyAI.dev – Your trusted partner for secure, compliant AI adoption.</p>
          </div>
        </div>
      </div>

      <FloatingButton url="https://devs.ai/signup?ref=sales%40readyai.dev" label="Explore Platform" />
    </div>
  );
};

export default AboutPage;