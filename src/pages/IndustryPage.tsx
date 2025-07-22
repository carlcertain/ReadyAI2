import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { INDUSTRIES } from '../utils/constants';
import Button from '../components/ui/Button';
import ROICalculator from '../components/sections/ROICalculator';
import { 
  Landmark, 
  ShoppingBag, 
  Stethoscope, 
  Factory, 
  Zap, 
  Building,
  ArrowRight
} from 'lucide-react';
import CalendlySectionPopUp from '../components/sections/CalendlySectionPopUp';

const iconMap = {
  'landmark': Landmark,
  'shopping-bag': ShoppingBag,
  'stethoscope': Stethoscope,
  'factory': Factory,
  'zap': Zap,
  'building': Building,
};

const IndustryPage: React.FC = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const selectedIndustry = industryId 
    ? INDUSTRIES.find(industry => industry.id === industryId) 
    : null;

  React.useEffect(() => {
    document.title = selectedIndustry 
      ? `${selectedIndustry.name} - ReadyAI` 
      : 'Industries - ReadyAI';
  }, [selectedIndustry]);

  return (
    <div className="pt-20">
      {!selectedIndustry ? (
        <div>
          <div className="bg-primary py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Industry-Specific AI Solutions
              </h1>
              <p className="mt-4 text-xl text-gray-100 max-w-3xl">
                Discover how the platform can be tailored to meet the unique challenges and opportunities in your industry.
              </p>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES.map(industry => {
                const Icon = iconMap[industry.icon as keyof typeof iconMap];
                
                return (
                  <Link 
                    key={industry.id} 
                    to={`/industry/${industry.id}`}
                    className="group flex flex-col bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <div className="p-6 flex-grow">
                      {Icon && (
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                      )}
                      <h3 className="text-xl font-semibold text-primary group-hover:text-accent">
                        {industry.name}
                      </h3>
                      <p className="mt-3 text-gray-600">
                        {industry.description}
                      </p>
                    </div>
                    <div className="p-6 pt-0 mt-auto">
                      <span className="text-accent font-medium inline-flex items-center group-hover:underline">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-16">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-7">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Calculate Your Potential Savings
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">
                    No matter your industry, our platform can help you reduce costs while expanding AI capabilities 
                    Use our ROI calculator to see how much you could save by switching to our platform
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    Our fixed price of $30 per user per month provides access to all platform features, 
                    including unlimited AI agents, all supported LLMs, and our comprehensive management tools
                  </p>
                </div>
                <div className="lg:col-span-5 mt-8 lg:mt-0">
                  <ROICalculator />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-primary py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div>
                  <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                    {selectedIndustry.name}
                  </h1>
                  <p className="mt-4 text-xl text-gray-100 max-w-3xl">
                    {selectedIndustry.description}
                  </p>
                </div>
                <div className="mt-5 lg:mt-0">
                  <Link to="/industry">
                    <Button variant="outline" className="border-accent text-white hover:bg-primary-dark">
                      All Industries
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
              {industryId === 'financial' && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                    AI Solutions for Financial Services
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    In the fast-paced world of financial services, AI is revolutionizing everything from customer service to risk management
                    Our platform provides a secure, compliant platform that enables financial institutions to deploy AI solutions with confidence
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Key Applications</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Fraud Detection</strong> - AI agents that monitor transactions in real-time and flag suspicious activities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Customer Service</strong> - Intelligent assistants that handle routine customer inquiries while maintaining compliance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Document Processing</strong> - Automated extraction and analysis of financial documents</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Risk Assessment</strong> - Advanced models for credit scoring and risk evaluation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Regulatory Compliance</strong> - AI-powered monitoring to ensure adherence to changing regulations</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Industry-Specific Benefits</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>SOC 2 and ISO 27001 compliance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Granular access controls</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Comprehensive audit trails</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Core banking integration</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Data residency options</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {industryId === 'retail' && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                    AI Solutions for Retail
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The retail industry faces intense competition and rapidly changing consumer expectations
                    Our platform helps retailers create personalized experiences, optimize operations, and build 
                    stronger customer relationships through intelligent AI applications
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Key Applications</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Personalized Recommendations</strong> - AI agents that analyze customer behavior to suggest relevant products</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Inventory Management</strong> - Predictive models that optimize stock levels and reduce waste</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Customer Service</strong> - Omnipresent support across digital channels with seamless human handoff</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Pricing Optimization</strong> - Dynamic pricing models based on demand, competition, and inventory</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Customer Insights</strong> - Deep analysis of customer feedback and behavior patterns</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Industry-Specific Benefits</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Integration with major e-commerce platforms</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Support for omnichannel experiences</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Real-time analytics capabilities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Point-of-sale system integration</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>GDPR and CCPA compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {industryId === 'healthcare' && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                    AI Solutions for Healthcare & Life Sciences
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Healthcare organizations face unique challenges in balancing innovation with patient safety and regulatory compliance
                    Our platform provides a secure platform for deploying AI solutions that improve patient outcomes while maintaining the 
                    highest standards of data protection and compliance
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Key Applications</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Clinical Documentation</strong> - AI-assisted note taking and summarization for providers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Patient Engagement</strong> - Intelligent communication tools for education and care coordination</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Research Analysis</strong> - Processing and analyzing large datasets for clinical research</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Administrative Automation</strong> - Streamlining billing, scheduling, and other administrative tasks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Clinical Decision Support</strong> - Providing relevant information to assist healthcare providers</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Industry-Specific Benefits</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>HIPAA compliance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>EHR system integration</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Complete audit trails</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>PHI handling compliance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Flexible deployment options</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {industryId === 'manufacturing' && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                    AI Solutions for Manufacturing
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    In today's competitive manufacturing environment, efficiency and quality are paramount. 
                    Our platform helps manufacturers implement AI solutions that optimize production processes, 
                    improve quality control, and reduce downtime through predictive maintenance.
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Key Applications</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Predictive Maintenance</strong> - AI models that forecast equipment failures before they occur</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Quality Control</strong> - Computer vision systems for automated defect detection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Supply Chain Optimization</strong> - Intelligent forecasting and inventory management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Production Planning</strong> - AI-driven scheduling to maximize throughput and efficiency</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Safety Monitoring</strong> - Real-time analysis of operational data to enhance workplace safety</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Industry-Specific Benefits</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>IoT system integration</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Edge computing support</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Real-time processing</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>MES/ERP compatibility</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Manufacturing versatility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {industryId === 'energy' && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                    AI Solutions for Energy & Utilities
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The energy and utilities sector is undergoing a profound transformation driven by renewable energy sources,
                    smart grids, and changing consumer expectations. Our platform helps energy companies leverage AI to optimize 
                    operations, improve reliability, and accelerate the transition to sustainable energy systems.
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Key Applications</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Grid Management</strong> - AI systems that optimize energy distribution and reduce losses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Predictive Maintenance</strong> - Forecasting equipment failures for utility infrastructure</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Energy Forecasting</strong> - Accurate prediction of renewable energy production and demand</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Customer Engagement</strong> - Personalized tools for helping consumers manage energy usage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Asset Optimization</strong> - Maximizing the efficiency and lifespan of equipment</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Industry-Specific Benefits</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>SCADA integration</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Time-series analysis</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Infrastructure security</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Regulatory compliance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Renewable compatibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {industryId === 'public' && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                    AI Solutions for Public Sector
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Government agencies and public sector organizations face unique challenges in delivering efficient services 
                    while maintaining transparency and protecting citizen data. Our platform provides secure, compliant AI solutions 
                    that help public sector entities improve service delivery and operational efficiency.
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Key Applications</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Citizen Services</strong> - AI assistants that provide 24/7 access to government information and services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Document Processing</strong> - Automated classification and extraction of information from forms and documents</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Fraud Detection</strong> - Identifying patterns that may indicate fraudulent activity in benefit programs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Resource Allocation</strong> - Optimizing the deployment of public resources based on need and impact</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                        <span><strong>Emergency Response</strong> - Coordinating and prioritizing actions during emergencies</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Industry-Specific Benefits</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Data residency options</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Accessibility features</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Transparent AI decisions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent" />
                        <span>Legacy system support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Calculate Your Potential Savings
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  See how much your organization could save by adopting our platform.
                  Our consolidated approach typically reduces AI licensing costs by 70-85%.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Beyond direct cost savings, our customers report significant operational improvements,
                  faster deployment times, and reduced maintenance overhead.
                </p>
                
                <div className="mt-8">
                  <Link to="/contact">
                    <Button size="lg">
                      Contact Our Industry Specialists
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:col-span-5">
                <ROICalculator />
              </div>
            </div>
          </div>
        </div>
      )}

      <CalendlySectionPopUp />
      
    </div>
  );
};

export default IndustryPage;