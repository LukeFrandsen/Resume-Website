import { getFormData, validateData, createMailtoLink } from './formHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('messageForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = getFormData(form); // Get form data as an object
    const errors = validateData(formData); // Validate data

    if (errors.length > 0) {
      alert(`Form Errors:\n${errors.join('\n')}`);
    } else {
      const mailtoLink = createMailtoLink(formData); // Generate mailto link
      window.location.href = mailtoLink; // Open email client with pre-filled data
    }
  });
});