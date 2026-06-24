// Premium Button Injector - Safe, isolated, can be deleted anytime
(function() {
  // Wait for DOM to load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addPremiumButton);
  } else {
    addPremiumButton();
  }

  function addPremiumButton() {
    // Check if wrap element exists (app loaded)
    const appWrap = document.querySelector('.wrap');
    if (!appWrap) return;

    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 999;
    `;

    // Create the button
    const button = document.createElement('a');
    button.href = '/premium.html';
    button.textContent = '⭐ Premium';
    button.style.cssText = `
      display: inline-block;
      background: linear-gradient(135deg, #fbbf24, #ff8c00);
      color: #060912;
      padding: 10px 16px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 700;
      font-family: 'Rajdhani', sans-serif;
      font-size: 13px;
      cursor: pointer;
      box-shadow: 0 0 16px rgba(251, 191, 36, 0.4);
      transition: all 0.3s ease;
      letter-spacing: 1px;
    `;

    // Hover effect
    button.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 0 24px rgba(251, 191, 36, 0.6)';
      this.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 0 16px rgba(251, 191, 36, 0.4)';
      this.style.transform = 'scale(1)';
    });

    // Append button to container
    buttonContainer.appendChild(button);

    // Add to page
    document.body.appendChild(buttonContainer);

    // Mobile responsive
    if (window.innerWidth < 480) {
      buttonContainer.style.cssText = `
        position: fixed;
        top: 12px;
        right: 12px;
        z-index: 999;
      `;
      button.style.padding = '8px 12px';
      button.style.fontSize = '12px';
    }
  }
})();
