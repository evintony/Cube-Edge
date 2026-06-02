import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#010413] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white tracking-tight">CubeEdge</span>
              <span className="text-2xl font-light text-blue-400 ml-1">Solutions</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses through innovative IT solutions and digital transformation. We turn your vision into reality with cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-blue-400 transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/products" className="hover:text-blue-400 transition-colors text-sm">Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <svg className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-400 text-sm leading-relaxed">Cube Edge IT Solutions, 10/1744, First Floor, Sowbagya building, Athani, Kakkanad, Ernakulam, Kerala, India - 682030</span>
              </li>
              <li className="flex items-start space-x-4">
                <svg className="h-8 w-8 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-slate-400 text-sm leading-relaxed self-center">support@cubeitedgesolutions.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">Stay updated with our latest news and offers.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-900 text-white px-4 py-2.5 rounded-lg text-sm border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-500"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} CubeEdge IT Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
