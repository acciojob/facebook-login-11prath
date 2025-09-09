//your JS code here. If required.
// This file is optional since no behavior is required.
// But we can add a simple demo alert when the form is submitted.

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent actual submit
  alert('Login button clicked! (Demo only)');
});