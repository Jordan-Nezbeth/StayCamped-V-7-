// ✅ Supabase setup
const supabase = supabase.createClient(
  'https://vqoirfycaqbaknfetdxj.supabase.co',
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxb2lyZnljYXFiYWtuZmV0ZHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNzA5NDgsImV4cCI6MjA2Nzc0Njk0OH0.PJaoaaMQkQmBIdRQLPs7rYWzxivhQloOm2Gd6UTc204// Replace with your actual anon key
);

// ✅ Load camper listings
async function loadFeaturedListings() {
  const { data, error } = await supabase
    .from('Camper_Listings')
    .select('*')
    .eq('status', 'active')
    .limit(10);

  const container = document.getElementById('camper-listings');

  if (error || !data || data.length === 0) {
    container.innerHTML = `<p>No listings available at the moment. Check back soon!</p>`;
    return;
  }

  container.innerHTML = data
    .map(listing => `
      <div class="card">
        <h3>${listing.camper_model}</h3>
        <p><strong>Location:</strong> ${listing.campground}</p>
        <p>${listing.description}</p>
        <p><strong>Price:</strong> $${listing.price_per_night}/night</p>
        <button class="btn">View Details</button>
      </div>
    `)
    .join('');
}

loadFeaturedListings();
