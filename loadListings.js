// ✅ scripts/loadListings.js

const supabase = supabase.createClient(
  'https://vqoirfycaqbaknfetdxj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxb2lyZnljYXFiYWtuZmV0ZHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNzA5NDgsImV4cCI6MjA2Nzc0Njk0OH0.PJaoaaMQkQmBIdRQLPs7rYWzxivhQloOm2Gd6UTc204'
);

async function loadListings() {
  const { data, error } = await supabase.from('Camper_Listing').select('*'); // ✅ Fixed table name

  if (error) {
    console.error('Error loading listings:', error);
    document.getElementById('camper-listings').innerHTML = `<p style="color: red;">Failed to load listings.</p>`;
    return;
  }

  if (!data || data.length === 0) {
    document.getElementById('camper-listings').innerHTML = `<p>No listings available yet. Please check back soon!</p>`;
    return;
  }

  const listingHtml = data.map(item => `
    <div class="card">
      <h3>${item.camper_model || 'Untitled Camper'}</h3>
      <p><strong>Location:</strong> ${item.campground || 'Not specified'}</p>
      <p><strong>Description:</strong> ${item.description || 'No description provided.'}</p>
      <p><strong>Amenities:</strong> ${item.amenities || 'Standard'}</p>
      <p><strong>Price per Night:</strong> $${item.price_per_night || 'TBD'}</p>
      <p><strong>Available Dates:</strong> TBD (Calendar Coming Soon!)</p>
      <button class="btn">Request to Book</button>
    </div>
  `).join('');

  document.getElementById('camper-listings').innerHTML = listingHtml;
}

loadListings();
