import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export default function LiveTournament() {
  const { id: paramId } = useParams();
  const [searchParams] = useSearchParams();
  const id = paramId || searchParams.get('id');

  const [tournament, setTournament] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);

  useEffect(() => {
    if (!id) return;
    const docRef = doc(db, 'tournaments', id);
    const unsub = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setTournament(docSnap.data());
      }
    });
    return () => unsub();
  }, [id]);

  useEffect(() => {
    if (!tournament?.date) return;

    const timer = setInterval(() => {
      const eventDate = new Date(tournament.date).getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        setIsRegistrationOpen(false);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((difference % (1000 * 60)) / 1000)
        });
        setIsRegistrationOpen(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [tournament?.date]);

  if (!id) return <div className="p-12 text-center text-slate-500">No Tournament ID provided.</div>;
  if (!tournament) return <div className="p-12 text-center text-slate-500 animate-pulse">Loading live data...</div>;

  const formattedDate = new Date(tournament.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const shareText = `🏆 Check out the live scores and brackets for ${tournament.name || 'the tournament'}!\n\nFollow live here: ${window.location.href}`;
  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/50 via-slate-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold">
                <span className="material-symbols-outlined text-base text-blue-600">sports_volleyball</span>
                {tournament.organizer} • {tournament.sport} Tournament
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                {tournament.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                League + Knockout Stages • <strong className="text-slate-900">{formattedDate}</strong> at {tournament.venue}.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  disabled={!isRegistrationOpen}
                  className={`px-8 py-4 rounded-2xl font-extrabold text-sm shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 ${isRegistrationOpen ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25' : 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'}`}
                >
                  <span className="material-symbols-outlined text-lg">{isRegistrationOpen ? 'how_to_reg' : 'block'}</span>
                  {isRegistrationOpen ? 'Register Your Team' : 'Registration Closed'}
                </button>
                <a href={waUrl} target="_blank" rel="noreferrer" className="px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-sm shadow-xl shadow-[#25D366]/25 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                  <i className="fa-brands fa-whatsapp text-lg"></i> Share to WhatsApp
                </a>
              </div>
            </div>

            {/* Countdown Card */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg text-center space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {isRegistrationOpen ? 'Tournament Countdown' : 'Event Started'}
                </span>
                
                <div className="grid grid-cols-4 gap-2 pt-2">
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                    <div className="text-2xl font-black text-slate-900 font-mono">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Days</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                    <div className="text-2xl font-black text-slate-900 font-mono">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Hours</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                    <div className="text-2xl font-black text-slate-900 font-mono">{String(timeLeft.mins).padStart(2, '0')}</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Mins</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                    <div className="text-2xl font-black text-blue-600 font-mono">{String(timeLeft.secs).padStart(2, '0')}</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Secs</div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 border-t border-slate-100 pt-3">
                  Venue: {tournament.venue}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Empty State for Teams / Brackets */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 rounded-full bg-slate-50 mb-4">
            <span className="material-symbols-outlined text-4xl text-slate-400">group_off</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800">No Teams Registered Yet</h3>
          <p className="text-slate-500 mt-2">Teams and groups will appear here once registration begins.</p>
        </div>
      </section>
    </div>
  );
}
