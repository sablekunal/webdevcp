import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function CreateTournament() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organizer: '',
    sport: 'Throwball',
    date: '',
    venue: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const docRef = await addDoc(collection(db, "tournaments"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'upcoming'
      });
      
      // Navigate to the dynamic tournament page via React Router
      navigate(`/t/${docRef.id}`);
    } catch (error) {
      console.error("Error creating tournament: ", error);
      alert("Failed to create tournament: " + error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center py-12 px-4">
      <div className="bg-white max-w-lg w-full p-8 rounded-3xl shadow-xl border border-slate-200">
        <h2 className="text-2xl font-black text-slate-900 mb-2">Create New Tournament</h2>
        <p className="text-slate-500 text-sm mb-6">Launch a live tournament page instantly.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Tournament Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="e.g. Summer Throwball Cup" 
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Organizer / Presenter</label>
            <input 
              type="text" 
              name="organizer" 
              required 
              placeholder="e.g. St. Xavier's Youth" 
              value={formData.organizer}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Sport</label>
              <select 
                name="sport" 
                value={formData.sport}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 bg-white outline-none"
              >
                <option value="Throwball">Throwball</option>
                <option value="Volleyball">Volleyball</option>
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Date</label>
              <input 
                type="date" 
                name="date" 
                required 
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 transition outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Venue Location</label>
            <input 
              type="text" 
              name="venue" 
              required 
              placeholder="e.g. Barco Hall Ground, Pune" 
              value={formData.venue}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 transition outline-none"
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 mt-4 ${isSubmitting ? 'bg-blue-400 cursor-not-allowed text-white shadow-none' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30'}`}
          >
            {isSubmitting ? (
              <><i className="fa-solid fa-spinner fa-spin"></i> Creating...</>
            ) : (
              <><i className="fa-solid fa-rocket"></i> Publish Tournament Live</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
