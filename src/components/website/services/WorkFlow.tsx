import React from 'react';

// 1. Workflow item ki type define ki taaki TS ko pata chale data kya hai
type WorkflowStep = {
  step: string;
  title: string;
  desc: string;
  icon: React.FC<React.ComponentProps<'svg'>>; // Bataya ke icon ek SVG component hai
};

const Workflow = () => {
  // 2. Array ko WorkflowStep type di
  const steps: WorkflowStep[] = [
    {
      step: "01",
      title: "Engineering & Design",
      desc: "Our CAD experts create detailed 3D blueprints and structural calculations tailored to your facility's layout.",
      // 3. (props) ko (props: React.ComponentProps<'svg'>) mein badal diya
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5 4 4"></path><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path><path d="m8 6 2-2"></path><path d="m2 22 7.6-7.6"></path><path d="M12.5 10.5 22 20"></path><path d="m15 15 2 2"></path><path d="m20 12-2 2"></path><path d="m18 18 4 4"></path></svg>
      ),
    },
    {
      step: "02",
      title: "Precision Manufacturing",
      desc: "Using high-grade steel and automated welding, we manufacture components that exceed international safety standards.",
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20V10l10-5 10 5v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg>
      ),
    },
    {
      step: "03",
      title: "On-Site Installation",
      desc: "Our certified installation teams execute the project with surgical precision, ensuring perfect alignment and safety.",
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V2H10z"></path><path d="M14 17h1a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3 3 3 0 0 1 3-3h1"></path><path d="M13 17V9"></path><path d="M9 17V9"></path></svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden font-sans">
      {/* Blueprint background effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-[#D62828] font-black tracking-[0.5em] uppercase mb-4 text-[10px]">
            The Execution Pipeline
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            From Blueprint <br className="md:hidden" /> to <span className="text-slate-400">Reality</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-0 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-[#D62828]/30 z-0" />

          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative px-8 flex flex-col items-center text-center group"
            >
              {/* Step Icon Container */}
              <div className="w-24 h-24 bg-slate-900 border-2 border-[#D62828] flex items-center justify-center mb-8 relative z-20 group-hover:bg-[#D62828] transition-all duration-500 rounded-sm">
                {/* step.icon call ho raha hai */}
                <item.icon className="w-10 h-10 text-[#D62828] group-hover:text-white transition-colors duration-500" />
                
                {/* Step Number Badge */}
                <span className="absolute -top-4 -right-4 bg-white text-slate-950 font-black px-2 py-1 text-[10px] uppercase tracking-tighter shadow-xl">
                  STEP {item.step}
                </span>
              </div>
              
              {/* Content */}
              <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter group-hover:text-[#D62828] transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light">
                {item.desc}
              </p>

              {/* Mobile Decorative Divider */}
              <div className="mt-8 h-8 w-[1px] bg-[#D62828]/30 md:hidden last:hidden" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D62828]/20 to-transparent"></div>
    </section>
  );
};

export default Workflow;