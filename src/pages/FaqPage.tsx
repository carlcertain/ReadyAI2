import React from 'react';
import { ChevronDown } from 'lucide-react';
import FloatingButton from '../utils/FloatingButton';

const faqs = [
  {
    question: '1. How can the Platform benefit my organization?',
    answer:
      'The Platform is an advanced design to streamline and optimize your IT operations, procurement processes, and technology management, enabling your team to increase efficiency, reduce costs, and improve decision-making.',
  },
  {
    question: '2. How do you help with procurement and vendor management?',
    answer:
      'The platform provides centralized procurement workflows, vendor comparison, and real-time analytics, empowering Procurement and IT leaders to make informed vendor choices and automate purchasing processes.',
  },
  {
    question: '3. Is your platform customizable to meet specific enterprise requirements?',
    answer:
      'Yes. It is highly customizable to align with your organization\'s workflows, security policies, and compliance needs, ensuring it fits seamlessly with your existing IT infrastructure.',
  },
  {
    question: '4. How secure is the platform?',
    answer:
      'Security is our top priority. The Platform employs industry-leading encryption, role-based access controls, and regular security audits to protect your sensitive data and ensure compliance with relevant regulations. Our experienced Security Team is available to meet with you to share the best practices and integration security processes.',
  },
  {
    question: '5. What kind of support and training do you offer?',
    answer:
      'We provide comprehensive onboarding, ongoing training, dedicated customer support, and tailored consultancy to ensure your team gets the most value from the platform. If your team is comfortable starting without our help, we can be a backup to your strategy development or engaged later.',
  },
  {
    question: '6. How can your Platform help IT Directors improve operational efficiency?',
    answer:
      'By automating routine tasks, providing dashboards with key performance metrics, and enabling proactive issue resolution, we help IT Directors reduce downtime and optimize resource allocation, while managing the multi-department launch of different AI LLMs, agents, and integrations.',
  },
  {
    question: '7. Can the platform scale as our business grows?',
    answer:
      'Absolutely. It was built to scale with your organization’s evolving needs, from small teams to large enterprise deployments, without compromising performance. Start with a pilot, develop a rollout plan with our expansive team\'s assistance, and enjoy a successful AI strategy for your entire organization.',
  },
  {
    question: '8. What is the pricing model?',
    answer: '$30/seat/month – that simple!',
  },
  {
    question: '9. How can I get a demo or trial?',
    answer:
      'You can request a personalized demo with the team of AI experts or start a free trial by contacting the sales team at sales@readyai.dev. We’ll guide you through how the platform can meet your specific challenges.',
  },
  {
    question: '10. Can I look at the Platform without contacting the sales team?',
    answer:
      'Absolutely yes!',
  },
];

const FaqPage: React.FC = () => {
  // Update the document title
  React.useEffect(() => {
    document.title = 'FAQs - ReadyAI';
  }, []);

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
              <span className="block">Frequently Asked Questions</span>
            </h1>
          </div>
        </div>
      </div>
      </div>

    <div className="pt-20">   
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Placeholder text as specified in requirements */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-l-4 border-accent-dark pl-6 pr-4 py-4 bg-accent-light/10 rounded-md shadow-sm transition-transform duration-300 ease-out transform hover:scale-105 hover:shadow-md"
            >
              <h3 className="text-xl text-gray-700 font-semibold mb-2">
                {faq.question}
              </h3>
              {index == 9 && (
                <p className="text-accent-dark whitespace-pre-line">{faq.answer}
                  <a
                    href="https://devs.ai/signup?ref=sales%40readyai.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 ml-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Explore Platform
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  );
};

export default FaqPage;