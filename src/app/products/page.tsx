"use client";

import LinkNext from "next/link";
import Image from "next/image";

export default function ProductCaseStudy() {
  const pillars = [
    {
      id: "01",
      title: "Supportive Listening",
      subtitle: "Empathetic Human Connection",
      desc: "Our platform connects you with trained representatives who provide dedicated supportive listening services, creating a safe space for expression and emotional wellness.",
      metrics: ["Trained Professionals", "Safe Environment", "Real-time Support"]
    },
    {
      id: "02",
      title: "Wellness Guidance",
      subtitle: "Personal Growth Journey",
      desc: "CallBee is a dedicated platform for wellness consultations. Our representatives offer expert guidance to help you navigate your journey towards a healthier, more balanced life.",
      metrics: ["Personalized Plans", "Holistic Approach", "Progress Tracking"]
    },
    {
      id: "03",
      title: "Motivation & Video",
      subtitle: "Visual & Vocal Inspiration",
      desc: "Engage in high-quality voice and video sessions designed to motivate and inspire. Access specialized consultation services wherever you are, on any device.",
      metrics: ["HD Video Consults", "Motivational Sessions", "Global Accessibility"]
    }
  ];

  return (
    <div className="flex flex-col bg-[#020617] text-slate-400 font-sans selection:bg-blue-500/30">
      
      {/* Case Study Header */}
      <section className="relative pt-32 pb-20 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-4xl">
              <div className="text-blue-500 font-black tracking-[.3em] uppercase text-xs mb-4">Case Study: Flagship Platform</div>
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
                CALLBEE<span className="text-blue-600">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                A dedicated platform for wellness, supportive listening, and specialized personal growth consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge & Vision - Redesigned for High Impact */}
      <section className="py-32 bg-[#010413] relative overflow-hidden">
        {/* Background Depth */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-blue-500 uppercase bg-blue-500/5 border border-blue-500/20 rounded-full">
              Strategic Vision
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Core Mission</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Central Narrative */}
            <div className="lg:col-span-12 mb-12">
              <div className="bg-[#0f172a]/30 backdrop-blur-xl p-10 lg:p-16 rounded-[3rem] border border-slate-800 shadow-2xl relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000"></div>
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light relative z-10">
                  Callbee is more than just an app; it&apos;s a <span className="text-white font-bold">dedicated platform</span> where users access specialized consultation services. Our mission is to ensure you receive the <span className="text-blue-500 font-black">best guidance</span> in your journey towards wellness and personal growth.
                </p>
              </div>
            </div>

            {/* Sub-Focus Cards */}
            <div className="lg:col-span-6">
              <div className="h-full bg-slate-900/40 p-10 rounded-[2.5rem] border border-slate-800 hover:border-blue-500/30 transition-all group">
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600/20 transition-colors">
                  <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Personal Empowerment</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  We provide voice and video consultation services through trained representatives for your wellness, supportive listening, and motivation needs.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full bg-slate-900/40 p-10 rounded-[2.5rem] border border-slate-800 hover:border-blue-500/30 transition-all group">
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600/20 transition-colors">
                  <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Human-Centric Tech</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Our representatives provide services on behalf of Callbee, bridging the gap between cutting-edge technology and authentic human empathy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Visual Showcase - Redesigned as Premium Device Mockup */}
      <section className="py-24 lg:py-40 bg-[#020617] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
            
            {/* Left Content - Focused Value */}
            <div className="lg:w-1/2 space-y-10 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-12 bg-blue-600"></div>
                  <div className="text-blue-500 font-black uppercase text-xs tracking-[0.3em]">Technical Deep-Dive</div>
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[1.1]">
                  A Interface <br /> Built for <span className="text-blue-500">Clarity.</span>
                </h3>
                <p className="leading-relaxed text-slate-400 text-xl font-medium">
                  We engineered the CallBee interface to eliminate friction. Every pixel is optimized to ensure your journey towards personal growth is supported by a seamless, distraction-free environment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Fluid Navigation", desc: "Intuitive gesture-based controls for effortless session management." },
                  { title: "Adaptive UI", desc: "Dark-mode optimized interface that reduces eye strain during long sessions." }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <div className="text-white font-bold uppercase tracking-tight text-sm">{item.title}</div>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <LinkNext 
                  href="https://callbeeapp.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-500 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.2)] active:scale-95 uppercase tracking-widest inline-block"
                >
                  Experience the App
                </LinkNext>
              </div>
            </div>

            {/* Right Content - Sleek Phone Mockup */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative mx-auto w-full max-w-[320px] group">
                {/* 3D Background Glows */}
                <div className="absolute inset-0 bg-blue-600/20 rounded-[3.5rem] blur-[80px] -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
                
                {/* Phone Frame */}
                <div className="relative z-10 bg-[#020617] rounded-[3rem] border-[10px] border-slate-800 shadow-2xl overflow-hidden aspect-[9/19]">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-800 rounded-b-2xl z-20"></div>

                  {/* Actual Product Image */}
                  <div className="relative w-full h-full bg-slate-900">
                    <Image 
                      src="/images/callbee-product.png" 
                      alt="CallBee App Interface" 
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>


                </div>

                {/* Floating UI Badges */}
                <div className="absolute -top-6 -right-12 bg-[#0f172a]/80 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-2xl z-20 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">99% Stability</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Pillars of Solution - Redesigned as System Architecture */}
      <section className="py-32 bg-[#020617] border-t border-slate-800/50 relative overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl opacity-5 bg-blue-600 rounded-full filter blur-[150px] animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-blue-500 uppercase bg-blue-500/5 border border-blue-500/20 rounded-full">
              System Foundations
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
              The <span className="text-blue-600">Technical Core</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {pillars.map((pillar, i) => (
              <div key={i} className="group relative">
                {/* Connecting Line (Only Desktop) */}
                {i < 2 && (
                  <div className="hidden lg:block absolute top-1/4 left-[80%] w-full h-[1px] bg-gradient-to-r from-blue-500/30 to-transparent z-0"></div>
                )}
                
                <div className="relative z-10 h-full bg-[#0f172a]/40 backdrop-blur-md p-8 rounded-[2.5rem] border border-slate-800 group-hover:border-blue-500/40 group-hover:bg-[#0f172a]/60 transition-all duration-500 flex flex-col shadow-2xl group-hover:shadow-blue-900/10">
                  {/* Glowing ID Marker */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-4xl font-black text-slate-800 group-hover:text-blue-500/20 transition-colors duration-500 italic leading-none">{pillar.id}</div>
                    <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="text-blue-500 font-black uppercase text-[10px] tracking-[0.2em]">{pillar.subtitle}</div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{pillar.title}</h3>
                    <p className="leading-relaxed text-slate-400 text-base">{pillar.desc}</p>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-slate-800">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Core Capacities</div>
                    <div className="flex flex-wrap gap-2">
                      {pillar.metrics.map((m, j) => (
                        <span key={j} className="text-[9px] font-bold uppercase tracking-wider bg-slate-900 text-slate-300 px-2.5 py-1.5 rounded-lg border border-slate-800 group-hover:border-blue-500/20 transition-colors">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary CTA */}
      <section className="py-32 bg-[#020617] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none uppercase">
            Start Your Journey <br /> <span className="text-blue-600">To Wellness.</span>
          </h2>
          <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Connect with our representatives today and experience the specialized guidance that only CallBee can provide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <LinkNext 
              href="https://callbeeapp.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-500 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)] active:scale-95 uppercase tracking-widest"
            >
              Consult an Expert
            </LinkNext>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full filter blur-[120px] -z-0"></div>
      </section>

    </div>
  );
}
