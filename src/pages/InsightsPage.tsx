import React from 'react';
import { useParams, Link } from 'react-router-dom';
import FloatingButton from '../utils/FloatingButton';
import { Helmet } from 'react-helmet';

const InsightsPage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>ReadyAI - Insights</title>
        <meta name="description" content="Discover what Shadow AI is, how it relates to Shadow IT, and why it poses a growing risk to enterprise security, compliance, and data" />
        <meta name="keywords" content="Shadow AI" />
      </Helmet>

      <div className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark overflow-hidden">
        {/* Abstract background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 pb-10 md:pt-24 md:pb-14">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Insights</span>
                <span className="block text-2xl mt-4 text-accent">Industry insights and trends</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-4xl text-gray-700 mb-16 text-center">
            What Is Shadow AI And Why It Is A Growing Risk For Enterprises
          </h2>
          <div className="flex flex-col min-h-screen text-xl leading-loose tracking-widest">
            <img
              src="/assets/images/shadow_ai.jpeg"
              alt="Shadow AI"
              className="object-cover w-full md:w-full h-64 rounded-lg mx-auto mb-8 md:mb-20 flex-shrink-0"
            />

            <h4 className="text-2xl font-semibold mt-20 mb-20 text-center">
              What Is Shadow AI And Why It Is A Growing Risk For Enterprises
            </h4>
            <p className="mb-6 font-light">
              What is Shadow AI, and are you ahead or behind this trend? How vigilant is your IT department in handling it? You could be walking on thin ice when it comes to compliance and potential regulatory violations.
            </p>
            <p className="mb-6 font-light">
              Research from a McKinsey report, entitled <a target="_blank" className="text-blue-700" href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/superagency-in-the-workplace-empowering-people-to-unlock-ais-full-potential-at-work">“AI in the Workplace - A Report for 2025,”</a> shows employees are using GenAI more than their leaders. Beyond a doubt, Shadow AI is now becoming a high-priority risk for CIOs, CTOs, and HR leaders.
            </p>
            <p className="mb-6 font-light">
              This article provides an in-depth look at ShadowAI. It explains why it is spreading and outlines the business risks it poses to enterprises. Learn how you can respond as an IT or HR leader with secure, governed AI strategies.
            </p>

            <h4 className="text-2xl font-semibold mt-20 mb-20 text-center">
              What Is Shadow AI?
            </h4>
            <p className="mb-6 font-light">
              The term, Shadow AI, refers to the use of artificial intelligence tools or systems within an organization without formal IT approval, governance, or oversight. These could be items such as:
            </p>
            <ul className="list-disc mb-6 mr-6 pl-8 text-center md:text-left">
              <li>Apps</li>
              <li>Large Language Models (LLMs)</li>
              <li>Plugins</li>
              <li>Tools</li>
            </ul>
            <p className="mb-6 font-light">
              <a target="_blank" className="text-blue-700" href="https://en.wikipedia.org/wiki/Generative_artificial_intelligence">Generative AI (GenAI)</a> has taken enterprises by storm. You can’t blame your employees for using AI. Employees want to use it to make their work easier. The two most common reasons are to complete tasks more quickly and to automate them.
            </p>
            <p className="mb-6 font-light">
              Is this good for business, as surely it can lead to higher productivity rates? Yes and no. Productivity may increase in the short term. But over the longer term, Shadow AI will cause serious problems unless you have IT oversight.
            </p>

            <h4 className="text-2xl font-semibold mt-20 mb-20 text-center">
              Real-World Examples of Shadow AI
            </h4>
            <p className="mb-6 font-light">
              It can be hard to think of a time when we were not using some form of AI in our lives. As its usage becomes more commonplace, people are becoming more used to it. That is why Shadow AI has become such an issue. Here are some examples:
            </p>
            <ul className="list-disc mb-6 mr-6 pl-8">
              <li>Developers are using AI code assistants like Copilot and GitHub without obtaining a license.</li>
              <li>HR teams are generating interview questions or feedback summaries using free AI tools.</li>
              <li>Marketing teams are using ChatGPT to write all their content across different platforms.</li>
            </ul>

            <h4 className="text-2xl font-semibold mt-20 mb-20 text-center">
              What Is The Difference Between Shadow AI and Shadow IT?
            </h4>
            <p className="mb-6 font-light">
              You might have heard the term Shadow IT as well and wondered what the difference is between the two. The difference is:
            </p>
            <ul className="mb-6 mr-6 pl-8 list-disc">
              <li>Shadow AI is an unauthorized intelligent system that can make or influence decisions</li>
              <li>Shadow IT is unauthorized software or hardware</li>
            </ul>

            <h4 className="text-2xl font-semibold mt-20 mb-20 text-center">
              Why is Shadow AI More Dangerous?
            </h4>
            <p className="mb-6 font-light">
              Both are challenging for IT and HR leaders to manage, but Shadow AI is far more dangerous than Shadow IT. It's because the outputs from Shadow AI could be acted on directly in your organization.
            </p>
            <p className="mb-6 font-light">
              Think about areas in your business such as AI-generated emails, policies, and reports. Additionally, AI learns from inputs, and this can raise various long-term privacy and IP issues.
            </p>
            <p className="mb-6 font-light">
              If you have not considered Shadow AI in your leadership role, it’s time to take it seriously. Indeed, the same report from McKinsey found 47% of the C-suite felt they were developing GenAI too slowly, although 69% invested more than a year ago.
            </p>

            <h4 className="text-2xl font-semibold mt-20 mb-20 text-center">
              Why Shadow AI Is Growing in Enterprises
            </h4>
            <p className="mb-6 font-light">
              There are several reasons why Shadow AI is growing in enterprises. Here are five of the most common reasons, so you can understand how to assess them in your organization:
            </p>
            <ul className="pl-8 pb-6 font-semibold list-decimal">
              <li>
                Fragmented Understanding of Risk
                <p className="mb-6 font-light">
                  Not every employee in your organization is going to have the same understanding of the AI tools. Consequently, some employees do not have a grasp of the risks the company could face.
                </p>
              </li>
              <li>
                Innovation Pressure from Leadership
                <p className="mb-6 font-light">
                  “Be more productive,” “Automate more,” “Do more with less.” Do these sound familiar? It can be challenging being a CIO or CTO when pressure comes from the top. Sadly, this pressure can lead to quick decisions with no proactive planning.
                </p>
              </li>
              <li>
                Lack of Internal AI Strategy or Approved Tools
                <p className="mb-6 font-light">
                  At <a target="_blank" href="https://readyai.dev" className="text-blue-700">ReadyAI.dev</a>, we understand your dilemma. AI feels like yet another level of work you must urgently attend to. However, when you are busy, an internal AI strategy might start sliding down your list of urgent things to do.
                </p>
                <p className="mb-6 font-light">
                  Indeed, we find most companies do not have a formal AI governance plan or secure alternatives. It’s a challenging situation to be in. We work closely with IT leaders in your position daily to help them resolve it.
                </p>
              </li>
              <li>
                Rapid Accessibility of Generative AI Tools
                <p className="mb-6 font-light">
                  Free, user-friendly, browser-based tools are everywhere. Understandably, your employees are seeking ways to enhance their productivity and alleviate stress. Ironically, their actions to take on AI quickly are causing more harm than good.
                </p>
              </li>
              <li>
                Remote and Hybrid Work
                <p className="mb-6 font-light">
                  A post-COVID environment has changed the working environment for employees. Now, with hybrid and remote work in nearly every business. There is less visibility into employee tools and their behaviour when they use them.
                </p>
              </li>
            </ul>

            <h4 className="text-2xl font-semibold mt-20 mb-20 text-center">
              The Key Risks of Shadow AI
            </h4>
            <p className="mb-6 font-light">
              While innovation continues to advance at a rapid pace, so do the risks. The rise of employees using GenAI might begin with good intentions. But ungoverned AI can create serious business risks. Here are five areas to consider:
            </p>
            <ul className="pl-6 pb-6 font-semibold list-decimal">
              <li>Data Leakage              
                <p className="mb-6 font-light">
                  Employees are inputting sensitive information (client names, internal documents, code) into AI tools. Many AI tools store or learn from this data unless the settings are changed. There is a high risk of confidential information appearing in future model outputs.
                </p>
              </li>
              <li>Regulatory Non-Compliance              
                <p className="mb-6 font-light">
                  Unvetted AI tools in your organization might be violating:
                </p>
              </li>
              <ul className="pl-6 pb-6 font-semibold list-disc">
                <li>GDPR</li>
                <li>HIPAA</li>
                <li>Industry-specific compliance (e.g., in financial reporting)</li>
              </ul>
              <p className="mb-6 font-light">
                Additionally, you might not have any audit trails, consent logs, or data usage documentation. Also, it’s important to note that liability can fall on the organization, not on the employees.
              </p>
              <li>Operational Silos and Inconsistency
                <p className="mb-6 font-light">
                  Teams might be adopting different tools, but there is no central control. It can lead to inconsistent decision-making, duplicated AI efforts, and conflicting outputs. There is also <a target="_blank" className="text-blue-700" href="https://www.afr.com/policy/economy/how-ai-risks-repeating-the-it-productivity-paradox-20250727-p5mi5j">a high risk of the productivity paradox</a>, with fast but fragmented operations.
                </p>
              </li>
              <li>Security Vulnerabilities
                <p className="mb-6 font-light">
                  Unknown vendors or plugins might introduce malware, phishing, or create backdoor risks. You could have a lack of endpoint control or tool visibility for IT. You also have no clear way to track model versioning, data flow, or your threat exposure.
                </p>
              </li>
              <li>Trust and Reputational Damage
                <p className="mb-6 font-light">
                  Your errors or AI-generated hallucinations could become public knowledge. For example, big law firms are now facing legal issues because they are submitting court filings with <a target="_blank" className="text-blue-700" href="https://www.reuters.com/legal/government/trouble-with-ai-hallucinations-spreads-big-law-firms-2025-05-23/">made-up citations from AI chatbots.</a>
                </p>
                <p className="mb-6 font-light">
                  There have also been cases of AI-generated customer communications with incorrect or biased information. All these instances can lead to a loss of stakeholder trust when data misuse goes public.
                </p>
              </li>
            </ul>

            <h4 className="text-2xl font-semibold mt-20 mb-20 text-center">
              The Cost of Ignoring Shadow AI
            </h4>
            <p className="mb-6 font-light">
              It has reached a point where Shadow AI is too important to ignore. As Reid Hoffman, the Co-Founder of LinkedIn, said, “AI is going to reshape every industry and every job.” Given this situation, it is essential to know the costs of ignoring it:
            </p>

            <p className="font-semibold">Direct Costs</p>
            <ul className="mb-6 mr-6 font-light">
              <li>There could be the costs of breach containment or internal investigations (or both).</li>
              <li>Also, fines for regulatory breaches.</li>
            </ul>

            <p className="font-semibold">Indirect Costs</p>
            <ul className="mb-6 mr-6 font-light">
              <li>It could cause internal disruption because of the sudden freezing of all AI tools.</li>
              <li>Additionally, morale could go down due to overly restrictive AI policies.</li>
            </ul>

            <h4 className="font-semibold">Real-World Scenario</h4>
            <p className="mb-6 font-light">
              To put the costs into perspective, consider the case of three Samsung engineers who <a target="_blank" href="https://www.pcmag.com/news/samsung-bans-chatgpt-after-engineers-use-it-to-fix-proprietary-code" className="text-blue-700">used ChatGPT to fix proprietary code</a>. This action resulted in a total ban of ChatGPT and other GenAI tools across the company.
            </p>

            <h4 className="text-2xl font-semibold mt-20 mb-20 text-center">
              How To Identify and Govern Shadow AI Use
            </h4>
            <p className="mb-6 font-light">
              Now that you understand what Shadow AI is and how it can drastically affect your business. Here are five steps you can follow to start identifying and governing Shadow AI use in your organization.
            </p>

            <ul className="pl-8 pb-6 font-semibold list-decimal">
              <li>Step 1: Acknowledge It Is Already Happening            
                <p className="mb-6 font-light">
                  Accept that Shadow AI is already in use in your enterprise. This acceptance will help you to start from a place of transparency, not punishment.
                </p>
              </li>
              <li>
                Step 2: Audit and Monitor Employee AI Usage            
                <p className="mb-6 font-light">
                  Use endpoint monitoring via surveys or employee interviews. This process will help you map which employees are using what tools and why.
                </p>
              </li>
              <li>
                Step 3: Develop a Clear AI Governance Policy              
                <p className="mb-6 font-light">
                  First, you must define:
                </p>
              </li>
              <ul className="mb-6 mr-6 list-disc pl-8">
                <li>What tools are approved</li>
                <li>What data employees can and cannot use</li>
                <li>What roles are responsible for AI oversight</li>
              </ul>
              <p className="mb-6 font-light">
                Next, include some guidelines for experimentation vs. operational use
              </p>
              <p className="mb-6 font-light">
                Finally, to create a clear AI governance policy, you must integrate the compliance, IT, legal, and department heads.
              </p>
              <li>
                Step 4: Offer Secure, Compliant Alternatives              
                <p className="mb-6 font-light">
                  Provide vetted AI platforms in your enterprise that are:
                </p>
              </li>
              <ul className="mb-6 mr-6 list-disc pl-8">
                <li>Auditable</li>
                <li>GDPR-compliant</li>
                <li>Integrated with enterprise workflows</li>
              </ul>
              <p className="mb-6 font-light">
                For example, <a target="_blank" className="text-blue-700" href="https://readyai.dev/solutions/security">ReadyAI.dev’s secure enterprise AI platform</a> has built-in data safeguards for GDPR, SOC II, and HIPAA.
              </p>              
              <li>
                Step 5: Train Employees and Enable Responsible Use              
                <p className="mb-6 font-light">
                  Offer AI literacy and training for all employees so they can understand what they can and cannot do, and more importantly, why.
                </p>
                <p className="mb-6 font-light">
                  Also, do not forget to keep encouraging innovation. Your role as an IT or HR leader is to promote innovation and growth within the company, but within set guardrails.
                </p>
              </li>
            </ul>
            <h4 className="text-2xl font-semibold mt-20 mb-20 text-center">
              Why Secure Enterprise AI Platforms Are Essential
            </h4>
            <p className="mb-6 font-light">
              To achieve the level of security you need, you must work with a secure AI platform that has the following:
            </p>
            <ul className="mb-6 mr-6 list-disc pl-8">
              <li>Admin oversight and usage analytics</li>
              <li>Data segregation</li>
              <li>End-to-end encryption</li>
              <li>Role-based access control</li>
            </ul>
            <p className="mb-6 font-light">
              In comparison to a public tool, you will have:
            </p>
            <ul className="mb-6 mr-6 list-disc pl-8">
              <li>Consistent performance and policy alignment</li>
              <li>Full audit trails</li>
              <li>Safer data input/output</li>
            </ul>

            <h4 className="text-2xl font-semibold mt-20 mb-20 text-center">
              From Shadow AI to Strategic AI
            </h4>
            <p className="mb-6 font-light">
              You are in a powerful position as an IT or HR leader to make a real difference in your organization. It’s about empowering your employees to use the full potential of AI but in a safe and organized manner.
            </p>
            <p className="mb-6 font-light">
              Shadow AI is not a fringe issue that might become a problem. It’s an enterprise-wide reality. However, if you use the right approach with governance, visibility, and a secure platform, you will manage it.
            </p>
            <p className="mb-6 font-light">
              The future of enterprise AI is not about banning tools but about building trust and control. We can help you bring GenAI under enterprise control. <a target="_blank" href="https://readyai.dev/contact" className="text-blue-700">Book a demo</a> to see ReadyAI.dev in action and learn how it can support your AI strategy.
            </p>

            <h4 className="text-2xl font-semibold mt-20 mb-20 text-center">
              Sources:
            </h4>
            <ul className="mb-6 mr-6 italic text-blue-700 text-sm md:text-base text-center md:text-left">
              <li>
                <a target="_blank" href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/superagency-in-the-workplace-empowering-people-to-unlock-ais-full-potential-at-work">
                  AI in the Workplace: A report for 2025 - McKinsey
                </a>
              </li>
              <li>
                <a target="_blank" href="https://en.wikipedia.org/wiki/Generative_artificial_intelligence">
                  Generative Artificial Intelligence - Wikipedia
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.afr.com/policy/economy/how-ai-risks-repeating-the-it-productivity-paradox-20250727-p5mi5j">
                  How AI Risks Repeating the IT Productivity Paradox - Financial Review
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.reuters.com/legal/government/trouble-with-ai-hallucinations-spreads-big-law-firms-2025-05-23/">
                  Trouble With AI Hallucinations Spreads To Big Law Firms - Reuters
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.pcmag.com/news/samsung-bans-chatgpt-after-engineers-use-it-to-fix-proprietary-code">
                  Samsung Bans ChatGPT After Engineers Use it to Fix Proprietary Code - PC Mag
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <FloatingButton url="https://devs.ai/signup?ref=sales%40readyai.dev" label="Explore Platform" />
    </div>
  );
};

export default InsightsPage;