"use client";
import React from "react";

export default function ContactInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Phone */}
          <div className="group p-8 border border-slate-100 bg-slate-50 hover:border-red-600 transition-all duration-500 transform hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mb-6 group-hover:scale-110 transition-transform">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <h4 className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-2">Project Consultation</h4>
            <p className="text-lg font-black uppercase text-slate-900 mb-1 leading-tight">+92 300 1234567</p>
            <p className="text-xs text-slate-500 font-medium">Mon - Sat, 9am to 6pm</p>
          </div>

          {/* Card 2: Mail */}
          <div className="group p-8 border border-slate-100 bg-slate-50 hover:border-red-600 transition-all duration-500 transform hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mb-6 group-hover:scale-110 transition-transform">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <h4 className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-2">Technical Support</h4>
            <p className="text-lg font-black uppercase text-slate-900 mb-1 leading-tight">eng@rack-regis.com</p>
            <p className="text-xs text-slate-500 font-medium">Response within 24 hours</p>
          </div>

          {/* Card 3: MapPin */}
          <div className="group p-8 border border-slate-100 bg-slate-50 hover:border-red-600 transition-all duration-500 transform hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mb-6 group-hover:scale-110 transition-transform">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <h4 className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-2">Headquarters</h4>
            <p className="text-lg font-black uppercase text-slate-900 mb-1 leading-tight">Plot #12, Industrial Estate</p>
            <p className="text-xs text-slate-500 font-medium">Gujranwala, Pakistan</p>
          </div>

          {/* Card 4: Clock */}
          <div className="group p-8 border border-slate-100 bg-slate-50 hover:border-red-600 transition-all duration-500 transform hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mb-6 group-hover:scale-110 transition-transform">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <h4 className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-2">Working Hours</h4>
            <p className="text-lg font-black uppercase text-slate-900 mb-1 leading-tight">09:00 AM - 06:00 PM</p>
            <p className="text-xs text-slate-500 font-medium">Sunday Closed</p>
          </div>

        </div>
      </div>
    </section>
  );
}