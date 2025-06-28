import React from 'react';
import { Shield, RefreshCw, Cpu, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const Banner1Section = () => {
  const features = [
    {
      icon: Shield,
      title: 'Private AI Workspaces',
      description: 'A secure environment for your team and data'
    },
    {
      icon: RefreshCw,
      title: 'One-Click Model Deployment',
      description: 'Stay ahead of the AI lifecycle with every new model release'
    },
    {
      icon: Cpu,
      title: 'No-Code Agent Builder',
      description: 'Empower anyone to create AI agents—no code required'
    }
  ];

  return (
    <div className="h-screen bg-gradient-to-b from-accent-light to-accent2 py-24 px-8 relative overflow-hidden">
      {/* Background Icon */}
      <Brain className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-accent2-light opacity-5 w-[1000px] h-[1000px] pointer-events-none select-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-accent2-light text-2xl font-light mb-4 tracking-wide">Ready.ai</h2>
          <h1 className="text-white text-6xl font-bold">Solution</h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 border-4 border-accent-light rounded-lg flex items-center justify-center bg-transparent">
                  <feature.icon className="w-12 h-12 text-accent2-light" strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="text-white text-2xl font-bold mb-6 leading-tight">{feature.title}</h3>
              <p className="text-accent-light text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Banner1Section;