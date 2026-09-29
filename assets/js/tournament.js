import { db } from './firebase.js';
import { doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const tournamentId = urlParams.get('id');

  if (tournamentId) {
    // We have a dynamic tournament ID, fetch the data!
    console.log(`Fetching tournament: ${tournamentId}`);
    
    // Listen for real-time updates
    const docRef = doc(db, "tournaments", tournamentId);
    onSnapshot(docRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        
        // Update DOM Elements
        if (data.name) document.getElementById('dyn-title').innerText = data.name;
        if (data.organizer) document.getElementById('dyn-organizer').innerText = data.organizer;
        if (data.sport) document.getElementById('dyn-sport').innerText = data.sport + " Tournament";
        
        // Format Date
        if (data.date) {
            const dateObj = new Date(data.date);
            const formattedDate = dateObj.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            document.getElementById('dyn-date').innerText = formattedDate;
        }
        
        if (data.venue) document.getElementById('dyn-venue').innerText = data.venue;
        
        // Generate WhatsApp Share Link
        const currentUrl = window.location.href;
        const shareText = `🏆 Check out the live scores and brackets for the ${data.name || 'Tournament'}!\n\nFollow live here: ${currentUrl}`;
        const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
        
        const waBtn = document.getElementById('share-whatsapp-btn');
        if(waBtn) waBtn.href = waUrl;
        
        // We can add logic to update brackets and scores later
        if(window.showToast) window.showToast('Live Data Connected!', 'success');
        
      } else {
        console.error("No such tournament!");
        if(window.showToast) window.showToast('Tournament not found', 'error');
      }
    }, (error) => {
      console.error("Error listening to tournament: ", error);
    });
  } else {
    console.log("No tournament ID in URL, showing default template.");
  }
});
