import { loadListings } from './loadListings-fixed.js'


document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('listing-container')
  container.innerHTML = '' // Clear "Loading listings..."

  const listings = await loadListings()

  if (!listings.length) {
    container.innerHTML = '<p>No campers found.</p>'
    return
  }

  listings.forEach((listing) => {
    const card = document.createElement('div')
    card.className = 'listing-card'
    card.innerHTML = `
      <img src="${listing.image_url}" alt="${listing.camper_model}" style="width:100%; max-height:200px; object-fit:cover; border-radius:6px; margin-bottom:10px;" />
      <h3>${listing.camper_model}</h3>
      <p>${listing.campground} – Site ${listing.site_number}</p>
      <a class="btn" href="#">View Details</a>
    `
    container.appendChild(card)
  })
})

  
