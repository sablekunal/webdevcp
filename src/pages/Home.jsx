import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/50 via-slate-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Tournament Manager for Grassroots Sports
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Smarter Tournaments. <span className="text-blue-600">Better Sports.</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Knockout brackets, round-robin points tables with Cricket NRR, automated conflict-free fixtures, and live team draws. Share a single real-time link — zero app installs or signups required for players.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link to="/features" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base shadow-xl shadow-blue-500/25 hover:-translate-y-0.5 transition-all">
                  <span className="material-symbols-outlined text-xl">sports_score</span>
                  Explore Features
                </Link>
                <Link to="/tools" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-base border border-slate-200 shadow-sm transition-all">
                  <span className="material-symbols-outlined text-xl">construction</span>
                  Free Matchday Tools
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">3,000+</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tournaments</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">45,000+</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Matches Run</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-blue-600">100% Free</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">To Organize</div>
                </div>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl shadow-blue-500/5 relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                      <span className="material-symbols-outlined text-base">emoji_events</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Pune Open Cup 2026</h3>
                      <span className="text-[11px] text-slate-500">Semi-Finals • Live Updates</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    LIVE
                  </span>
                </div>

                {/* Bracket Match 1 */}
                <div className="space-y-3 mb-6">
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Semi-Final 1 • Ground 1</div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-slate-800">Thunder Strikers</span>
                      <span className="font-mono font-black text-sm bg-blue-600 text-white px-2 py-0.5 rounded-md">2</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-500 text-sm">
                      <span>Pune Titans</span>
                      <span className="font-mono font-medium px-2 py-0.5">1</span>
                    </div>
                  </div>

                  {/* Bracket Match 2 */}
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Semi-Final 2 • Ground 2</div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-slate-800">Deccan Warriors</span>
                      <span className="font-mono font-black text-sm bg-blue-600 text-white px-2 py-0.5 rounded-md">3</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-500 text-sm">
                      <span>Falcon Kings</span>
                      <span className="font-mono font-medium px-2 py-0.5">0</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-blue-900">Grand Final: Thunder Strikers vs Deccan Warriors</span>
                  <span className="font-mono font-bold text-blue-700">04:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Banner for Throwball Event */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-8 sm:p-10 shadow-xl shadow-blue-600/15 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">verified</span>
              Dedicated Event Microsite
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Rt. Rev. Fr. Thomas Barco, SJ Memorial Throwball Tournament for Girls
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Presented by St. Xavier's Youth • 6-A-Side • 16 Teams • 4 Groups • 27 Matches • ₹20,000 Cash Prizes • October 4, 2026 at Barco Hall Ground, Camp, Pune.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/tournament" className="px-6 py-3.5 rounded-2xl bg-white text-blue-700 font-extrabold text-sm hover:bg-blue-50 transition shadow-lg flex items-center justify-center gap-2">
              <span>Explore Event Microsite</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* The SportIQ Difference Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">The SportIQ Difference</h2>
            <p className="text-slate-600 text-sm sm:text-base">Why grassroots organizers across India choose SportIQ over spreadsheets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Without SportIQ */}
            <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-100 space-y-4">
              <div className="flex items-center gap-2.5 text-rose-700 font-bold text-base">
                <span className="material-symbols-outlined text-xl">close</span>
                Without SportIQ
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-rose-500 text-base shrink-0 mt-0.5">remove_circle</span>
                  <span>3 separate Excel spreadsheets that break when match delays happen.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-rose-500 text-base shrink-0 mt-0.5">remove_circle</span>
                  <span>Unruly WhatsApp groups with 40 people arguing over seedings and points.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-rose-500 text-base shrink-0 mt-0.5">remove_circle</span>
                  <span>Handwritten bracket charts taped to a ground fence in the rain.</span>
                </li>
              </ul>
            </div>

            {/* With SportIQ */}
            <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100 space-y-4">
              <div className="flex items-center gap-2.5 text-blue-700 font-bold text-base">
                <span className="material-symbols-outlined text-xl">check_circle</span>
                With SportIQ
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 text-base shrink-0 mt-0.5">check</span>
                  <span>1 live public link and QR code showing real-time scores and bracket progression.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 text-base shrink-0 mt-0.5">check</span>
                  <span>Automated points tables with Net Run Rate, Goal Diff, and tiebreaker logic.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 text-base shrink-0 mt-0.5">check</span>
                  <span>Fair live draws with audit history that eliminate captain disputes instantly.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
