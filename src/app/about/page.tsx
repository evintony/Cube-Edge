import LinkNext from "next/link";

export default function About() {
  return (
    <div className="flex flex-col bg-[#020617]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-20 md:py-24 relative overflow-hidden px-4">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight">About CubeEdge IT Solutions</h1>
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            A team of passionate technologists dedicated to solving complex business challenges through innovation and expertise.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full filter blur-[100px]"></div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-24 bg-[#010413]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-base md:text-lg text-slate-400 mb-6 leading-relaxed">
                At CubeEdge, our mission is to empower organizations of all sizes with the technology and insights they need to thrive in a rapidly evolving digital world. We believe that technology should be an enabler, not a barrier.
              </p>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                We strive to deliver excellence in every project, fostering long-term partnerships built on trust, transparency, and tangible results.
              </p>
            </div>
            <div className="bg-[#0f172a] p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">Our Vision</h2>
              <p className="text-base md:text-lg text-slate-400 mb-8 md:mb-6 leading-relaxed relative z-10">
                To be the global leader in digital transformation, recognized for our ability to turn complex technical concepts into simple, powerful business solutions.
              </p>
              <div className="flex flex-col space-y-4 relative z-10 items-center lg:items-start">
                {[
                  "Innovation First",
                  "Customer Centricity",
                  "Integrity & Transparency",
                  "Continuous Improvement"
                ].map((val, i) => (
                  <div key={i} className="flex items-center space-x-3 w-full max-w-xs lg:w-auto">
                    <div className="h-6 w-6 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                      <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-semibold text-slate-200 text-sm md:text-base">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Transition Section */}
      <section className="py-24 md:py-32 bg-[#020617] border-t border-slate-800 relative overflow-hidden px-4">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-600/5 rounded-full filter blur-[120px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-[#0f172a]/50 backdrop-blur-sm p-8 md:p-12 lg:p-20 rounded-[2rem] md:rounded-[3rem] border border-slate-800 shadow-2xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 md:mb-8 text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/5 border border-blue-500/20 rounded-full">
              The Culmination of Our Expertise
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-8 tracking-tighter uppercase">
              Our Products Are Our <span className="text-blue-500">Masterpieces</span>
            </h2>
            <p className="text-base md:text-xl text-slate-400 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              We don&apos;t just build solutions; we engineer digital identities. Explore how our flagship product, CallBee, is redefining the boundaries of private communication.
            </p>
            <LinkNext 
              href="/products" 
              className="group relative inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3.5 md:px-12 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/30 active:scale-95 overflow-hidden w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-widest">
                Discover
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </LinkNext>
          </div>
        </div>
      </section>
    </div>
  );
}
