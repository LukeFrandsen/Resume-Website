// Collect form data into an object
export function getFormData(formElement) {
    const formData = new FormData(formElement);
    const data = {};
  
    formData.forEach((value, key) => {
      data[key] = value; // Populate the object with key-value pairs
    });
  
    return data;
  }
  
  // Validate the form data
  export function validateData(data) {
    const errors = [];
  
    // Check if all fields are filled
    Object.entries(data).forEach(([key, value]) => {
      if (!value.trim()) errors.push(`${key} is required`);
    });
  
    return errors;
  }
  
  // Prepare a mailto URL
  export function createMailtoLink(data) {
    const { email, name, message } = data;
    return `mailto:${email}?subject=Message from ${name}&body=${encodeURIComponent(message)}`;
  }