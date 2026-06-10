import React from 'react';

const Testimonials = () => {
  const testimonialsRow1 = [
    { name: "Ahmed Khan", role: "Warehouse Manager", company: "Metro Logistics", text: "Rack-Regis transformed our storage efficiency. Their structural design is top-notch!" },
    { name: "Sarah Williams", role: "Operations Head", company: "Retail Corp", text: "The checkout counters are not only durable but also look very premium in our stores." },
    { name: "Zubair Sheikh", role: "Site Engineer", company: "Build-Pro", text: "Precision engineering at its best. Their safety audits gave us total peace of mind." },
    { name: "John Doe", role: "CEO", company: "Doha Mart", text: "Fastest installation team we have ever worked with. Highly recommended!" },
  ];

  const testimonialsRow2 = [
    { name: "Usman Ali", role: "Supply Chain Manager", company: "Panda Supermarket", text: "The quality of steel and finish is unmatched. Truly industrial grade." },
    { name: "Maria Garcia", role: "Project Manager", company: "Logi-Tech", text: "Their custom mezzanine floors saved us 40% more space. Fantastic work!" },
    { name: "Tariq Mahmood", role: "Safety Officer", company: "Safe-Storage", text: "Compliance with ISO standards was our priority, and Rack-Regis delivered perfectly." },
    { name: "David Smith", role: "Director", company: "Global Traders", text: "Excellent customer service and very detailed technical drawings." },
  ];

  const StarIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#D62828" stroke="#D62828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
  );

  const QuoteIcon = () => (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" className="opacity-10"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
  );

  const TestimonialCard = ({ item }) => (
    <div className="flex-shrink-0 w-[350px] mx-4 bg-white border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
      {/* Background Quote Icon */}
      <div className="absolute -top-2 -right-2 text-slate-100 group-hover:text-red-50 transition-colors">
        <QuoteIcon />
      </div>
      
      <div className="flex gap-1 mb-4 relative z-10">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      
      <p className="text-slate-600 italic text-sm mb-6 relative z-10 leading-relaxed">
        "{item.text}"
      </p>
      
      <div className="flex flex-col border-t border-slate-50 pt-4 relative z-10">
        <span className="font-black text-slate-900 uppercase text-xs tracking-widest">{item.name}</span>
        <span className="text-[#D62828] text-[10px] font-bold uppercase mt-1">{item.role} @ {item.company}</span>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-slate-50 overflow-hidden font-sans">
      {/* CSS for Scrolling Marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: scrollLeft 40s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: scrollRight 40s linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="container mx-auto px-6 mb-16 text-center">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[#D62828] font-black uppercase tracking-[5px] text-[10px]">Voices of Trust</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9]">
            What Our <span className="text-[#D62828]">Clients Say.</span>
          </h2>
        </div>
      </div>

      {/* Row 1: Left to Right (Actually moves left infinitely) */}
      <div className="relative flex overflow-hidden mb-8">
        <div className="animate-marquee-left">
          {[...testimonialsRow1, ...testimonialsRow1].map((t, i) => (
            <TestimonialCard key={i} item={t} />
          ))}
        </div>
      </div>

      {/* Row 2: Right to Left */}
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee-right">
          {[...testimonialsRow2, ...testimonialsRow2].map((t, i) => (
            <TestimonialCard key={i} item={t} />
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-400 font-mono text-[10px] uppercase tracking-[4px] font-bold">
          Join 250+ Satisfied Companies Worldwide
        </p>
      </div>
    </section>
  );
};

export default Testimonials;