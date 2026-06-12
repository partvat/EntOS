// Personalized Greeting Card - Advanced Features

// Get current date/time
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    return `📅 ${hours}:${minutes} ${ampm} | ${now.getDate()}/${now.getMonth() + 1}`;
}

// Load saved greeting or use default
function loadSavedGreeting() {
    const savedName = localStorage.getItem('user-name');
    const savedMessage = localStorage.getItem('user-message');

    document.getElementById('user-name').value = savedName || '';
    document.getElementById('user-message').value = savedMessage || '';
}

// Save current greeting to local storage (no popup)
function saveMessage() {
    const name = document.getElementById('user-name').value.trim();
    const message = document.getElementById('user-message').value.trim();

    localStorage.setItem('user-name', name);
    localStorage.setItem('user-message', message);

       // Update pre-view message without alert
    document.getElementById('pre-view-message').textContent =
        name ? `${name}, ${message}` : 'Hello, World!';
}

// Show the greeting with date (no popup)
function showGreeting() {
    const messageBox = document.getElementById('message-box');
    const dateDisplay = document.getElementById('date-display');

       // Get values from inputs
    const name = document.getElementById('user-name').value.trim();
    const customMessage = document.getElementById('user-message').value.trim();

       // Build personalized greeting - include both name and message
    let fullGreeting;
    if (customMessage) {
        fullGreeting = `🎉 <strong>${customMessage}</strong><br/><i>with a special welcome from ${name}</i>`;
        } else if (name) {
        fullGreeting = `<h2 style="color: #667eea;">Hello, ${name}!</h2><p>I'm delighted to show you this greeting! 🌟</p>`;
        } else {
        fullGreeting = '<h2 style="color: #667eea;">Hello, World!</h2><p>Welcome to your personalized greeting card. ✨</p>';
        }

       // Update the popup box with the full greeting (not just the pre-view message)
    messageBox.innerHTML = fullGreeting;

       // Update date display at bottom
    dateDisplay.textContent = getCurrentTime();

       // Show popup with animation effect
    messageBox.style.display = 'block';
    messageBox.classList.add('fade-in');

       // Scroll to message after showing
    setTimeout(function() {
        messageBox.scrollIntoView({behavior: 'smooth'});
        }, 100);

         // Save current values to local storage
    localStorage.setItem('user-name', name || '');
    localStorage.setItem('user-message', customMessage || '');
}

// Toggle between light and dark theme
function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector('.theme-toggle');

    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        icon.textContent = '🌙';
        } else {
        body.classList.add('light');
        body.style.background = 'linear-gradient(135deg, #1e3a5f 0%, #0d1a27 100%)';
        icon.textContent = '☀️';
        }

         // Update button text for visual feedback
    const btnText = document.querySelector('.theme-toggle');
    if (btnText) {
        btnText.title = body.classList.contains('light') ?
              'Toggle to light mode' : 'Toggle to dark mode';
        }
}

// Initialize the page when it loads
document.addEventListener('DOMContentLoaded', function() {
    loadSavedGreeting();
});
