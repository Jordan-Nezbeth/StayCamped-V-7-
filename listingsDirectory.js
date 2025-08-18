// scripts/listingsDirectory.js
import { loadListings } from './loadListings.js';

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('listing-container');

  if (!container) {
    console.error('❌ Missing #listing-container in the HTML');
    return;
  }

  container.textContent = 'Loading…';

  const listings = await loadListings();

  if (!listings || listings.length === 0) {
    container.textContent = 'No campers found (make sure status = "approved").';
    return;
  }

  // Clear loading text
  container.textContent = '';

  listings.forEach((l) => {
    const card = document.createElement('div');
    card.className = 'listing-card';
    card.style.cssText = 'background:#2a2a2a;border-radius:10px;padding:12px;width:320px;margin:10px;';
    card.innerHTML = `
      <img src="${l.image_url || ''}" alt="${l.camper_model || 'Camper'}"
           style="width:100%;height:200px;object-fit:cover;border-radius:8px;margin-bottom:8px;background:#111;" />
      <h3 style="margin:6px 0;color:#ffa500;">${l.camper_model || 'Camper'}</h3>
      <div style="opacity:.9;">
        ${(l.campground || '')} ${l.site_number ? '– Site ' + l.site_number : ''}
      </div>
    `;
    container.appendChild(card);
  });
});
