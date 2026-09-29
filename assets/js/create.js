import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

document.getElementById('create-tournament-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const btn = document.getElementById('submit-btn');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating...';
  btn.disabled = true;

  try {
    const tournamentData = {
      name: document.getElementById('t-name').value,
      organizer: document.getElementById('t-organizer').value,
      sport: document.getElementById('t-sport').value,
      date: document.getElementById('t-date').value,
      venue: document.getElementById('t-venue').value,
      createdAt: serverTimestamp(),
      status: 'upcoming'
    };

    // Add to Firebase Firestore
    const docRef = await addDoc(collection(db, "tournaments"), tournamentData);
    
    // Show success (using global toast if available)
    if(window.showToast) window.showToast('Tournament created successfully!');
    
    // Redirect to the dynamic tournament page using our clean Vercel URL rewrite
    setTimeout(() => {
      window.location.href = `/t/${docRef.id}`;
    }, 1000);

  } catch (error) {
    console.error("Error creating tournament: ", error);
    if(window.showToast) window.showToast('Error saving to database.', 'error');
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
});
