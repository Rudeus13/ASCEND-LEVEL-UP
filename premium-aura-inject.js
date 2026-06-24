// Premium Aura Display Injector - Shows aura icons for premium users
(function() {
  // Wait for DOM to load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addAuraDisplay);
  } else {
    addAuraDisplay();
  }

  function addAuraDisplay() {
    // Wait for the app to render (it has a boot animation)
    setTimeout(() => {
      const nameInput = document.getElementById('nameInput');
      if (!nameInput) return;

      // Check if premium aura already added
      if (document.getElementById('auraIcon')) return;

      // Get premium tier from localStorage
      const isPremium = localStorage.getItem('ascendPremium');
      const tier = localStorage.getItem('ascendPremiumTier');

      if (!isPremium || !tier) {
        // User is not premium, nothing to do
        return;
      }

      // Create aura icon element
      const auraIcon = document.createElement('span');
      auraIcon.id = 'auraIcon';
      auraIcon.style.cssText = `
        display: inline-block;
        margin-left: 8px;
        font-size: 18px;
        animation: auraGlow 2s ease-in-out infinite;
      `;

      // Set icon and color based on tier
      let icon = '';
      let auraColor = '';
      let glowColor = '';

      if (tier === 'orange') {
        icon = '🟠';
        auraColor = '#ff8c00';
        glowColor = 'rgba(255, 140, 0, 0.5)';
      } else if (tier === 'red') {
        icon = '🔴';
        auraColor = '#ff4d4d';
        glowColor = 'rgba(255, 77, 77, 0.5)';
      } else if (tier === 'purple') {
        icon = '💜';
        auraColor = '#a78bfa';
        glowColor = 'rgba(167, 139, 250, 0.5)';
      }

      auraIcon.textContent = icon;

      // Add CSS animation for glow effect
      if (!document.getElementById('auraStyles')) {
        const style = document.createElement('style');
        style.id = 'auraStyles';
        style.textContent = `
          @keyframes auraGlow {
            0%, 100% {
              text-shadow: 0 0 8px ${glowColor};
              transform: scale(1);
            }
            50% {
              text-shadow: 0 0 16px ${glowColor};
              transform: scale(1.1);
            }
          }
        `;
        document.head.appendChild(style);
      }

      // Insert aura icon after name input
      nameInput.parentNode.insertBefore(auraIcon, nameInput.nextSibling);

      // Optional: Add aura glow to Hunter status card
      addAuraGlowToCard(auraColor, glowColor);

    }, 2000); // Wait for boot animation to finish
  }

  function addAuraGlowToCard(auraColor, glowColor) {
    // Find the Hunter status frame
    const statusFrame = document.querySelector('.frame.pulse');
    if (!statusFrame) return;

    // Add subtle glow to the frame border
    statusFrame.style.boxShadow = `0 0 20px ${glowColor}, 0 0 10px ${glowColor}`;
  }
})();
