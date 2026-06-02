"use client";

import LinkNext from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [codeIndex, setCodeIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const codeSnippet = `// CubeEdge IT Solutions
const transform = (business) => {
  return {
    ...business,
    status: 'optimized',
    growth: 'accelerated',
    tech: 'cutting-edge'
  };
};

// Ready to scale?
transform(yourBusiness);`;

  useEffect(() => {
    // Simple typing effect for the About section visual
    const timer = setInterval(() => {
      setCodeIndex((prev) => (prev < codeSnippet.length ? prev + 1 : prev));
    }, 30);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [codeSnippet.length]);

  return (
    <div className="flex flex-col bg-[#020617]">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-[#020617]">
        {/* Interactive Background Layers */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          <div 
            className="absolute pointer-events-none w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/10 rounded-full filter blur-[80px] transition-transform duration-300 ease-out"
            style={{ 
              transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)` 
            }}
          ></div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-10 bg-blue-600 rounded-full filter blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-8 text-xs font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/5 border border-blue-500/10 rounded-full backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Leading IT Innovation
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 md:mb-8 max-w-3xl mx-auto tracking-tight">
              Empowering Your Business with <span className="text-blue-500">Innovative IT Solutions</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
              CubeEdge IT Solutions delivers cutting-edge technology and strategic consulting to help you navigate the digital landscape and achieve sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <LinkNext
                href="/about"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold text-base sm:text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 active:scale-95"
              >
                Learn More
              </LinkNext>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section with Coding Visual */}
      <section className="relative py-20 md:py-28 bg-[#010413] border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 md:mb-8 text-sm font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/5 border border-blue-500/20 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
                Our Story
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-10 leading-[1.15]">
                Crafting Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Digital Transformation</span>
              </h2>
              <div className="space-y-4 md:space-y-6 text-base sm:text-lg text-slate-400 leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0">
                <p>
                  Founded with a vision to bridge the gap between complex technology and business success, CubeEdge IT Solutions has grown into a trusted partner for organizations seeking to innovate and scale.
                </p>
                <p>
                  We believe that every business has a unique digital fingerprint. Our approach is to deeply understand your operations and provide bespoke solutions that drive efficiency and growth.
                </p>
              </div>
              <LinkNext 
                href="/about" 
                className="inline-flex items-center gap-3 bg-slate-900/50 hover:bg-slate-900 text-blue-400 hover:text-blue-300 font-bold px-8 py-4 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all group mx-auto lg:mx-0"
              >
                Read our full mission
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </LinkNext>
            </div>
            
            {/* Right Content - Code Editor Visual */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-12 lg:mt-0 px-2 md:px-0">
              <div className="relative w-full max-w-lg aspect-[4/3] group">
                <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-blue-400 rounded-[2.5rem] -rotate-3 opacity-5 group-hover:-rotate-6 transition-transform duration-700"></div>
                <div className="relative z-10 bg-[#0f172a] rounded-[2rem] md:rounded-[2.5rem] border border-slate-800 shadow-2xl h-full flex flex-col overflow-hidden backdrop-blur-sm">
                  {/* Editor Header */}
                  <div className="bg-slate-900/80 px-4 md:px-6 py-3 md:py-4 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                    </div>
                    <div className="text-[9px] md:text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">cubeedge-solution.ts</div>
                    <div className="w-4"></div>
                  </div>
                  
                  {/* Code Area */}
                  <div className="p-4 md:p-8 font-mono text-xs md:text-sm leading-relaxed overflow-hidden">
                    <pre className="text-slate-300">
                      <code className="whitespace-pre-wrap">
                        {codeSnippet.substring(0, codeIndex)}
                        <span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse"></span>
                      </code>
                    </pre>
                  </div>

                  {/* Terminal Footer */}
                  <div className="mt-auto bg-slate-900/40 px-4 md:px-6 py-3 md:py-4 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Main Branch</span>
                      </div>
                    </div>
                    <div className="text-[9px] md:text-[10px] font-bold text-blue-500 uppercase tracking-tighter animate-pulse">Live Code...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-[#020617] text-center relative overflow-hidden px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-blue-600/5 rounded-full filter blur-[120px]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 tracking-tight">Ready to Transform Your Digital Future?</h2>
          <p className="text-base md:text-xl text-slate-400 mb-8 md:mb-10 max-w-2xl mx-auto">Join hundreds of successful businesses that trust CubeEdge for their IT needs.</p>
          <LinkNext
            href="/contact"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3.5 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 active:scale-95"
          >
            Schedule a Consultation
          </LinkNext>
        </div>
      </section>
    </div>
  );
}
