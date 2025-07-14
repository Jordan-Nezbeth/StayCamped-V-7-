// submitCamper.js

const SUPABASE_URL = https://vqoirfycaqbaknfetdxj.supabase.co
const SUPABASE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxb2lyZnljYXFiYWtuZmV0ZHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNzA5NDgsImV4cCI6MjA2Nzc0Njk0OH0.PJaoaaMQkQmBIdRQLPs7rYWzxivhQloOm2Gd6UTc204

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('camperForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      owner_name: form.owner_name.value,
      email: form.email.value,
      phone: form.phone.value,
      camper_make: form.camper_make.value,
      camper_model: form.camper_model.value,
      camper_year: form.camper_year.value,
      length: form.length.value,
      sleeps: form.sleeps.value,
      campground: form.campground.value,
      additional_notes: form.additional_notes.value,
    };

    const { error } = await supabaseClient.from('Camper_Listings').insert([formData]);

    if (error) {
      alert('Error submitting form: ' + error.message);
    } else {
      alert('Form submitted successfully!');
      form.reset();
    }
  });
});
