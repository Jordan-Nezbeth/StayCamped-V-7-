const supabaseUrl = 'https://your-project-name.supabase.co'; // ✅ Replace this with your Project URL
const supabaseKey = 'your-anon-public-key'; // ✅ Replace this with your anon public key

const database = supabase.createClient(supabaseUrl, supabaseKey);

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('camperForm');
  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = {
      full_name: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      camper_type: document.getElementById('camperType').value,
      year: document.getElementById('year').value,
      make: document.getElementById('make').value,
      model: document.getElementById('model').value,
      length: document.getElementById('length').value,
      condition: document.getElementById('condition').value,
      location: document.getElementById('location').value,
      message: document.getElementById('message').value,
    };

    const { data, error } = await database.from('camper_submissions').insert([formData]);

    if (error) {
      alert('Submission failed: ' + error.message);
    } else {
      alert('Your camper has been submitted successfully!');
      form.reset();
    }
  });
});
