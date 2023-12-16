
function toggleForms() {
    var loginSection = document.getElementById('user-login');
    var registrationSection = document.getElementById('user-registration');
  
    if (loginSection.style.display === 'none') {
      loginSection.style.display = 'block';
      registrationSection.style.display = 'none';
    } else {
      loginSection.style.display = 'none';
      registrationSection.style.display = 'block';
    }
  }
  