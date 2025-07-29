// ✅ Load camper listings dynamically from Supabase

// Use your new anon key here (not the leaked one)
const supabase = supabase.createClient(
  'https://vqoirfycaqbaknfetdxj.supabase.co',
  'YOUR-NEW-ANON-KEY-HERE'
);

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
