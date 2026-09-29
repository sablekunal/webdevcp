import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">sports_volleyball</span>
              </div>
              <span className="font-bold text-xl text-white">SportIQ</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              Free tournament management for sports organizers. Run brackets, group stages, live draws, and share real-time match results instantly.
            </p>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 100% Free Forever
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/features" className="hover:text-white transition-colors">All Features</Link></li>
              <li><Link to="/features/knockout" className="hover:text-white transition-colors">Knockout Brackets</Link></li>
              <li><Link to="/features/groups" className="hover:text-white transition-colors">Group Stages</Link></li>
              <li><Link to="/features/draws" className="hover:text-white transition-colors">Live Team Draw</Link></li>
              <li><Link to="/features/scheduler" className="hover:text-white transition-colors">Fixture Scheduler</Link></li>
              <li><Link to="/features/share" className="hover:text-white transition-colors">Live QR Sharing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Free Tools</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/tools/coin-toss" className="hover:text-white transition-colors">Virtual Coin Toss</Link></li>
              <li><Link to="/tools/picker-wheel" className="hover:text-white transition-colors">Picker Wheel</Link></li>
              <li><Link to="/tools/team-generator" className="hover:text-white transition-colors">Random Team Generator</Link></li>
              <li><Link to="/tools/budget-calculator" className="hover:text-white transition-colors">Budget Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Events & Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/tournament" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">Throwball 2026 Event</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About SportIQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Support</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 SportIQ Technologies. Made for grassroots sports in India.</p>
          <p className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-slate-400">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-400">Terms</Link>
            <Link to="/contact" className="hover:text-slate-400">hello@sportiq.in</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
