import SlideAnimator from "../../utils/SlideAnimator";

export default function Banner4Section() {
  const layers = [
    {
      title: "Professional Services",
      desc: "Implementation, Integration, Consulting",
      color: "bg-gradient-to-br from-pink-400 to-accent-light",
    },
    {
      title: "AI Lifecycle Management",
      desc: "Data & analytics, Workforce management, Billing",
      color: "bg-gradient-to-br from-accent-dark to-accent",
    },
    {
      title: "Integrated Tools",
      desc: "GitHub, Atlassian, Google, Python,",
      color: "bg-gradient-to-br from-blue-800 to-blue-500",
    },
    {
      title: "Agentic Creation Studio",
      desc: "Workflow builder, Automation, Embedded Agents, RAG, APIs, Instruction sets",
      color: "bg-gradient-to-br from-yellow-900 to-yellow-600",
    },
    {
      title: "Large Language Models",
      desc: "GPT 4o, Claude Sonnet 3.7, R1 and more + Private LLMs",
      color: "bg-gradient-to-br from-purple-700 to-purple-500",
    },
    {
      title: "Secure Environment",
      desc: "Data privacy, Admin tools, CIAM, Azure & On-prem",
      color: "bg-gradient-to-br from-indigo-800 to-indigo-600",
    },
  ];

  return (
    <SlideAnimator direction="left">
    <div className="text-accent2 min-h-[500px] px-8 py-12">
      <div className="grid grid-cols-[1fr_2fr] md:grid-cols-3 gap-12 w-full max-w-7xl mx-auto">
        {/* Column 1: Left Text */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="bg-black text-white p-4 rounded-xl text-2xl font-bold">
            {"</>"}
          </div>
          <h2 className="text-3xl font-semibold leading-tight">
            ReadyAI offers <br />
            the full AI stack
          </h2>
        </div>

        {/* Column 2: Stacked Rotated Layers */}
        <div className="relative h-[500px] flex justify-center">
          <div className="relative w-64">
            {layers.map((layer, index) => (
              <div
                key={layer.title}
                className={`absolute w-full h-60 rounded-xl ${layer.color} shadow-md transform transition-all duration-300`}
                style={{
                  top: `${index * 40}px`,
                  zIndex: layers.length - index,
                  transform: `rotateX(70deg) rotateZ(45deg) scale(0.5)`,
                  opacity: 0.8,
                }}
              />
            ))}
          </div>
        </div>

        {/* Column 3: Layer Titles + Descriptions */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center font-size- md:text-left space-y-8 pt-[20px] mx-auto md:mx-0">
          {layers.map((layer) => (
            <div key={layer.title} className="text-sm text-center md:text-left">
              <p className="font-semibold text-lg md:text-sm text-accent2">{layer.title}</p>
              <p className="text-accent">{layer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </SlideAnimator>
  );
}
