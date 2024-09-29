// Handle user registration
document.getElementById('signupForm')?.addEventListener('submit', async function(event) {
    event.preventDefault();
    const userData = {
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };
  
    const response = await fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
  
    const result = await response.json();
    alert(result.message);
  });
  
  // Handle user login
  document.getElementById('loginForm')?.addEventListener('submit', async function(event) {
    event.preventDefault();
    const loginData = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };
  
    // Perform login logic here
  });
  
  // More functions to handle courses, payments, and user profile can be added
  