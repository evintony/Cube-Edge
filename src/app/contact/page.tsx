export default function Contact() {
  return (
    <div className="flex flex-col bg-[#020617]">
      <section className="bg-gradient-to-b from-[#010413] to-[#020617] py-20 md:py-24 border-b border-slate-800 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to learn more about our services? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#020617] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-[#0f172a]/50 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-slate-800 shadow-2xl backdrop-blur-sm order-2 lg:order-1">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-8">Send us a Message</h2>
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-slate-300 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-600 text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-slate-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-600 text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs md:text-sm font-semibold text-slate-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-600 text-sm"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-semibold text-slate-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-600 text-sm"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white font-bold py-3.5 md:py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98] text-sm md:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-8 text-center lg:text-left">Contact Information</h2>
              <div className="space-y-6 md:space-y-8 mb-4 md:mb-12">
                {[
                  {
                    title: "Our Office",
                    detail: "Cube Edge IT Solutions, 10/1744, First Floor, Sowbagya building, Athani, Kakkanad, Ernakulam, Kerala, India - 682030",
                    icon: (
                      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Email Us",
                    detail: "support@cubeitedgesolutions.com",
                    icon: (
                      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )
                  },
                  {
                    title: "GSTIN",
                    detail: "32AAWFC1480C1ZN",
                    icon: (
                      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4 md:space-x-5 group">
                    <div className="bg-slate-900 p-3 md:p-4 rounded-lg md:rounded-xl border border-slate-800 group-hover:border-blue-500/30 transition-all shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base md:text-lg">{item.title}</h4>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
