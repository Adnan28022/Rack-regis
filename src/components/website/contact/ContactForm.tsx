"use client";
import React from "react";

export default function ContactForm() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* 1. Background Technical Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-600/10 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-0 border border-white/10">
          
          {/* LEFT PANEL: Technical Briefing */}
          <div className="lg:w-1/3 bg-slate-900/50 backdrop-blur-md p-10 border-r border-white/10 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                {/* Pulse Animation */}
                <div className="w-2 h-2 bg-red-600 animate-pulse" />
                <span className="text-red-500 font-black text-[10px] uppercase tracking-[5px]">Project Initiation</span>
              </div>
              
              <h3 className="text-4xl font-black text-white uppercase leading-none mb-6 italic tracking-tighter">
                Ready to <br /> <span className="text-red-600">Scale?</span>
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-10 font-medium">
                Our engineering team will analyze your requirements to draft a structural blueprint within 24 hours.
              </p>

              <div className="space-y-6">
                {/* Phase 01 - Terminal Icon SVG */}
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-red-600 transition-colors">
                      <polyline points="4 17 10 11 4 5"></polyline>
                      <line x1="12" y1="19" x2="20" y2="19"></line>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[8px] font-black text-red-600 uppercase tracking-widest">Phase 01</p>
                    <p className="text-xs font-bold text-white uppercase group-hover:text-red-500 transition-colors">Requirement Analysis</p>
                  </div>
                </div>

                {/* Phase 02 - Activity Icon SVG */}
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-red-600 transition-colors">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[8px] font-black text-red-600 uppercase tracking-widest">Phase 02</p>
                    <p className="text-xs font-bold text-white uppercase group-hover:text-red-500 transition-colors">CAD Design & Simulation</p>
                  </div>
                </div>

                {/* Phase 03 - ShieldCheck Icon SVG */}
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-red-600 transition-colors">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[8px] font-black text-red-600 uppercase tracking-widest">Phase 03</p>
                    <p className="text-xs font-bold text-white uppercase group-hover:text-red-500 transition-colors">Structural Certification</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative ID Number */}
            <div className="absolute -bottom-10 -left-10 text-[10rem] font-black text-white/[0.02] select-none">
              RG-01
            </div>
          </div>

          {/* RIGHT PANEL: Industrial Form */}
          <div className="lg:w-2/3 bg-slate-950 p-10 md:p-16">
            <form className="grid md:grid-cols-2 gap-x-12 gap-y-10" onSubmit={(e) => e.preventDefault()}>
              
              {/* Input Group: Full Name */}
              <div className="relative group">
                <label className="absolute -top-3 left-3 bg-slate-950 px-2 text-[9px] font-black uppercase tracking-[3px] text-red-600 z-20">
                  Authorized Personnel
                </label>
                <div className="relative border border-white/10 group-hover:border-white/30 focus-within:border-red-600 transition-all p-1">
                   <input 
                    type="text" 
                    placeholder="ENTER FULL NAME"
                    className="w-full bg-slate-900/50 text-white p-4 outline-none font-bold text-xs tracking-widest placeholder:text-slate-700"
                   />
                </div>
              </div>

              {/* Input Group: Email */}
              <div className="relative group">
                <label className="absolute -top-3 left-3 bg-slate-950 px-2 text-[9px] font-black uppercase tracking-[3px] text-red-600 z-20">
                  Communication Link
                </label>
                <div className="relative border border-white/10 group-hover:border-white/30 focus-within:border-red-600 transition-all p-1">
                   <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-slate-900/50 text-white p-4 outline-none font-bold text-xs tracking-widest placeholder:text-slate-700"
                   />
                </div>
              </div>

              {/* Input Group: Project Type */}
              <div className="relative group">
                <label className="absolute -top-3 left-3 bg-slate-950 px-2 text-[9px] font-black uppercase tracking-[3px] text-red-600 z-20">
                  System Category
                </label>
                <div className="relative border border-white/10 group-hover:border-white/30 focus-within:border-red-600 transition-all p-1">
                   <select className="w-full bg-slate-900/50 text-white p-4 outline-none font-bold text-xs tracking-widest appearance-none cursor-pointer">
                      <option>PALLET RACKING</option>
                      <option>MEZZANINE STRUCTURES</option>
                      <option>AUTOMATED AS/RS</option>
                      <option>RETAIL EQUIPMENT</option>
                   </select>
                </div>
              </div>

              {/* Input Group: Location */}
              <div className="relative group">
                <label className="absolute -top-3 left-3 bg-slate-950 px-2 text-[9px] font-black uppercase tracking-[3px] text-red-600 z-20">
                  Deployment Zone
                </label>
                <div className="relative border border-white/10 group-hover:border-white/30 focus-within:border-red-600 transition-all p-1">
                   <input 
                    type="text" 
                    placeholder="CITY / COUNTRY"
                    className="w-full bg-slate-900/50 text-white p-4 outline-none font-bold text-xs tracking-widest placeholder:text-slate-700"
                   />
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-2 relative group">
                <label className="absolute -top-3 left-3 bg-slate-950 px-2 text-[9px] font-black uppercase tracking-[3px] text-red-600 z-20">
                  Project Brief & Dimensions
                </label>
                <div className="relative border border-white/10 group-hover:border-white/30 focus-within:border-red-600 transition-all p-1">
                   <textarea 
                    rows={4}
                    placeholder="DESCRIBE LOAD REQUIREMENTS, CEILING HEIGHT, AND FACILITY SIZE..."
                    className="w-full bg-slate-900/50 text-white p-4 outline-none font-bold text-xs tracking-widest placeholder:text-slate-700 resize-none"
                   />
                </div>
              </div>

              {/* Submit Button with Slide Hover Animation */}
              <div className="md:col-span-2">
                <button className="relative w-full h-16 bg-red-600 group overflow-hidden transition-all active:scale-[0.98]">
                  {/* The white background that slides in */}
                  <div className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-500 ease-in-out" />
                  
                  <span className="relative z-10 flex items-center justify-center gap-3 text-white group-hover:text-black font-black uppercase tracking-[4px] text-xs transition-colors duration-500">
                    Execute Inquiry 
                    {/* Inline Chevron Right SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}