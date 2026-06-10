import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Custom SVGs to replace external icons
  const Icons = {
    Facebook: () => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9.101 24v-11H6.149V9.43h2.952V6.799c0-4.056 2.422-6.252 6.071-6.252 1.747 0 3.248.13 3.685.188v4.27h-2.527c-1.967 0-2.348.934-2.348 2.305v3.02h4.728l-.616 3.57h-4.112V24h-4.003z"/></svg>
    ),
    LinkedIn: () => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.125 2.062 2.062 0 010 4.125zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
    X: () => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298L17.61 20.643z"/></svg>
    ),
    MapPin: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    ),
    Phone: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    ),
    Mail: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    ),
    ArrowRight: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    )
  };

  return (
    <footer className="bg-slate-950 text-white border-t-4 border-[#D62828] font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <Image 
              src="/Logo/Logo.webp" 
              alt="Rack-Regis Logo" 
              width={160} 
              height={50} 
              className="h-auto w-40 brightness-0 invert" 
            />
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
              Precision-engineered racking and structural solutions for modern industrial excellence. Built for strength, designed for safety.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="p-2.5 bg-slate-900 hover:bg-[#D62828] transition-all rounded-sm text-white">
                <Icons.Facebook />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 hover:bg-[#D62828] transition-all rounded-sm text-white">
                <Icons.LinkedIn />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 hover:bg-[#D62828] transition-all rounded-sm text-white">
                <Icons.X />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[3px] mb-6 text-white">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item === 'Home' ? '' : item.toLowerCase()}`} className="text-slate-400 text-[11px] font-bold uppercase tracking-widest hover:text-[#D62828] hover:translate-x-1 transition-all inline-flex items-center gap-2 group">
                    <span className="h-[1px] w-0 bg-[#D62828] group-hover:w-3 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[3px] mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-xs">
                <div className="text-[#D62828] shrink-0 mt-0.5"><Icons.MapPin /></div>
                <span className="leading-tight">123 Industrial Area, Sector 5,<br />Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-xs">
                <div className="text-[#D62828] shrink-0"><Icons.Phone /></div>
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-xs">
                <div className="text-[#D62828] shrink-0"><Icons.Mail /></div>
                <span>info@rackregis.com</span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[3px] mb-6 text-white">Newsletter</h4>
            <p className="text-slate-500 text-[10px] uppercase font-bold mb-4 tracking-wider">Stay updated with our latest projects.</p>
            <div className="flex bg-slate-900 p-1 border border-slate-800">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none text-[11px] px-3 focus:ring-0 w-full outline-none text-white font-medium"
              />
              <button className="bg-[#D62828] p-2 hover:bg-red-700 transition-colors text-white">
                <Icons.ArrowRight />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[9px] uppercase font-black tracking-[2px]">
            © {currentYear} RACK-REGIS ENGINEERING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-slate-500 text-[9px] uppercase font-black tracking-[2px]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;