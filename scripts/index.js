//form handling
document.addEventListener('DOMContentLoaded', () => {
   const form = document.querySelector('.form');
   const usernameInput = document.getElementById('username');
   const passwordInput = document.getElementById('password');
   const rememberMeCheckbox = document.getElementById('remember-me');

   form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission

      const username = usernameInput.value;
      const password = passwordInput.value;

      // Check if username and password match the credentials
      if (username === 'Binod' && password === 'SuperSecurePassword') {
         // Store username in local storage with an expiration of one week
         if (rememberMeCheckbox.checked) {
            const expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 7); // Set to one week from now
            const data = {
               username: username,
               expiry: expiryDate.getTime() // Store the expiry timestamp
            };
            localStorage.setItem('user', JSON.stringify(data));
         }

         alert("Great!! You're a Tester now 🤓")
         // Redirect to dashboard page
         window.location.href = '/dashboard-main/pages/dashboard.html';
      } else {
         alert('Invalid username or password!');
      }
   });
});

//dynamic box shadow
const card = document.querySelector('.card');
card.addEventListener('mousemove', (event) => {
   const rect = card.getBoundingClientRect(); // Get the card's bounding box
   const x = event.clientX - rect.left; // Calculate x position within the card
   const y = event.clientY - rect.top; // Calculate y position within the card
   const width = rect.width; // Card width
   const height = rect.height; // Card height

   // Calculate border glow based on mouse position
   const glowStrength = 20; // Glow strength
   const borderGlow = Math.min((1 - (y / height)) * glowStrength, glowStrength); // Calculate glow based on y position
   const borderGlowX = Math.min((x / width) * glowStrength, glowStrength); // Calculate glow based on x position

   // Apply styles
   card.style.boxShadow = `${borderGlowX}px ${borderGlow}px 8px rgba(243, 198, 35, 0.5)`;
});

card.addEventListener('mouseleave', () => {
   card.style.boxShadow = 'none';
});


