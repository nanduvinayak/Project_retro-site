
document.addEventListener('DOMContentLoaded', function () {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  const currentPageURL = window.location.href;

  // Load header
  fetch('header.html')
    .then(response => response.text())
    .then(content => {
      headerPlaceholder.innerHTML = content;

      // Highlight active link
      const links = document.querySelectorAll('.nav-link');
      links.forEach(link => {
        if (link.href === currentPageURL) {
          link.classList.add('active');
        }
      });
    });

  // Load footer
  fetch('footer.html')
    .then(response => response.text())
    .then(content => {
      footerPlaceholder.innerHTML = content;
    });

  // Add pop-up modal functionality
  const popupBtns = document.querySelectorAll('.popup-btn');
  const closePopupBtns = document.querySelectorAll('.close-popup-btn');
  const popupOverlay = document.getElementById('popupOverlay');

  popupBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      popupOverlay.style.display = 'flex';
    });
  });

  closePopupBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      popupOverlay.style.display = 'none';
    });
  });

  // Alert button functionality
  const alertButtons = document.querySelectorAll('.alert-button');

  function showAlert() {
    alert("Sorry, Site is under maintanence ");
  }

  alertButtons.forEach(button => {
    button.addEventListener('click', showAlert);
  });
});




