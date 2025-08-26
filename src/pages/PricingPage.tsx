import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PricingSection1 from '../components/sections/PricingSection1';
import FloatingButton from '../utils/FloatingButton';
import CalendlySectionPopUp from '../components/sections/CalendlyBtn';
import CalendlyBtn from '../components/sections/CalendlyBtn';
import CalendlySection from '../components/sections/CalendlySection';

const PricingPage: React.FC = () => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `linear-gradient(
          45deg,
          #f5f5f5 0%,
          #f5f5f5 33%,   /* first stripe */
          #ffffff 33%,
          #ffffff 66%,   /* second stripe */
          #f5f5f5 66%,
          #f5f5f5 100%   /* third stripe */
        )`
      }}
    >
      {/* Top Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-700 to-gray-300">
        {/* Abstract background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 pb-10 md:pt-24 md:pb-14">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Plans &amp; Enterprise Options</span>
                <span className="block text-2xl mt-4 text-accent">
                  Advisory-led pathways to secure enterprise AI success
                </span>
              </h1>
              <p className="mt-6 text-lg text-white max-w-3xl mx-auto">
                Every enterprise has a unique AI journey. ReadyAI.dev provides advisory-led pathways to help you explore, evaluate, and scale with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>   
            
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">   

        {/* Highlightable Boxes */}
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          
          {/* Pilot Program */}
          <div className="bg-accent2-lightest rounded-2xl shadow-md p-8 text-center transition transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-accent-dark">Pilot Program</h2>
            <p className="mt-4 text-lg text-accent2">
              Try before you buy. Run a low-risk proof of concept with your team, guided by our enterprise AI advisors. 
              Perfect for validating ROI, testing workflows, and building executive alignment.
            </p>
            <div className="mt-6">
              <CalendlyBtn
                text="Request a Pilot"
                className="bg-accent text-white px-5 py-2 rounded-lg shadow hover:bg-accent-dark"
              />
            </div>
          </div>

          {/* Executive Evaluation */}
          <div className="bg-accent2-lightest rounded-2xl shadow-md p-8 text-center transition transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-accent-dark">Executive Evaluation</h2>
            <p className="mt-4 text-lg text-accent2">
              Strategy-led evaluation for leaders. Tailored demos and advisory sessions for CIOs, CTOs, and HR leaders. 
              ReadyAI.dev helps you align with your governance, compliance, and transformation goals.
            </p>
            <div className="mt-6">
              <CalendlyBtn
                text="Book and Executive Session"
                className="bg-accent text-white px-5 py-2 rounded-lg shadow hover:bg-accent-dark"
              />
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-accent2-lightest rounded-2xl shadow-md p-8 text-center transition transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-accent-dark">Enterprise Plan</h2>
            <p className="mt-4 text-lg text-accent2">
              Scale with confidence. When you’re ready to deploy enterprise-wide, ReadyAI.dev delivers all the power of 30+ AI models in one secure platform.
            </p>
            <ul className="mt-6 text-lg text-accent2 list-disc list-inside space-y-2">
              <li>$30/seat per month (annual billing)</li>
              <li>Governance and compliance tools</li>
              <li>Enterprise-grade security and support</li>
              <li>User permissions and advanced analytics</li>
              <li>All integrations, workflows, and APIs</li>
              <li>Unlimited chat history and 20GB storage</li>
            </ul>
            <div className="mt-6">
              <CalendlyBtn
                text="Speak to an AI Strategy Advisor"
                className="bg-accent text-white px-5 py-2 rounded-lg shadow hover:bg-accent-dark"
              />
            </div>
          </div>
        </div>

        {/* Why Enterprises Choose ReadyAI.dev */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          {/* Colored Header */}
          <div className="mt-20 bg-accent2-light py-6 px-8">
            <h2 className="text-3xl text-accent-dark text-center tracking-widest">
              Why Enterprises Choose ReadyAI.dev
            </h2>
          </div>
          {/* Body */}
          <div className="bg-accent2-lightest px-8 py-10">
            <p className="mt-4 text-lg text-accent2">
              Buying AI subscriptions separately is costly: <strong>$60</strong> OpenAI + <strong>$60</strong> Anthropic + <strong>$30</strong> Gemini + <strong>$19</strong> Cohere + <strong>$40</strong> Grok + more.
            </p>
            <p className="mt-12 text-lg text-accent2">
              That’s over <strong>$210</strong>/seat/month. With ReadyAI.dev, our enterprise platform includes all AI subscriptions.
              At only <strong>$30</strong>/seat/month, your employees can access everything in one place.
            </p>
            <p className="mt-12 text-lg text-accent2">
              You also have the added benefits of working with a platform backed by a global partner that specializes 
              in governance, compliance, and enterprise security.
            </p>
          </div>
        </div>

        {/* Pathways */}
        <div className="mx-auto pt-20 pb-40 max-w-2xl">
          <h2 className="text-2xl font-semibold text-accent-dark text-left">Get Started the Way That Fits You</h2>
          <ul className="mt-6 text-lg text-accent2 space-y-8 text-left">
            <li><strong>Pilot →</strong> Low-risk proof of concept with expert guidance</li>
            <li><strong>Executive Evaluation →</strong> Strategic review for leadership teams</li>
            <li><strong>Enterprise Plan →</strong> Scale with enterprise-grade security & governance</li>
          </ul>
          <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <CalendlyBtn
              text="Book a Pilot"
              className="bg-accent text-white px-5 py-2 rounded-lg shadow hover:bg-accent-dark"
            />
            <CalendlyBtn
              text="Book an Executive Session"
              className="bg-accent text-white px-5 py-2 rounded-lg shadow hover:bg-accent-dark"
            />    
            <CalendlyBtn
              text="Speak to an AI Strategy Advisor"
              className="bg-accent text-white px-5 py-2 rounded-lg shadow hover:bg-accent-dark"
            />
          </div>

        </div>

        {/* Personal Plans */}
        <div className="text-center mt-1 pt-10 pb-10">
          <h2 className="text-xl font-semibold text-accent-dark">Just Exploring AI on Your Own?</h2>
          <p className="mt-4 text-lg text-accent2">
            Start small with our <a href="https://devs.ai/signup?ref=sales%40readyai.dev" className="text-accent underline">Free & Personal Plans →</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;