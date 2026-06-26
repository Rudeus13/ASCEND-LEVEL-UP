// Master Button Alignment - Ensures all navigation buttons are uniform and fit properly
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', styleAllButtons);
  } else {
    styleAllButtons();
  }

  function styleAllButtons() {
    // Wait for all inject scripts to create buttons
    setTimeout(() => {
      // Style the button container for flex wrapping
      const wrap = document.querySelector('.wrap');
      if (wrap) {
        wrap.style.cssText = `
          display: flex !important;
          flex-wrap: wrap !important;
          gap: 6px !important;
          align-items: center !important;
          padding: 12px 16px !important;
        `;
      }

      const buttonStyle = `
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 8px 10px !important;
        border-radius: 6px !important;
        font-weight: 700 !important;
        font-family: 'Rajdhani', sans-serif !important;
        font-size: 10px !important;
        cursor: pointer !important;
        border: 2px solid !important;
        transition: all 0.3s ease !important;
        text-transform: uppercase !important;
        letter-spacing: 0.2px !important;
        white-space: nowrap !important;
        text-decoration: none !important;
        flex-shrink: 0 !important;
      `;

      // Style Leaderboard button
      const leaderboard = document.querySelector('a[href="/leaderboard.html"]');
      if (leaderboard) {
        leaderboard.style.cssText = buttonStyle + `
          background: linear-gradient(135deg, #ff8c00, #fbbf24) !important;
          color: #060912 !important;
          border-color: #ff8c00 !important;
          box-shadow: 0 0 12px rgba(255, 140, 0, 0.3) !important;
        `;
        leaderboard.textContent = '📊 Board';
        leaderboard.addEventListener('mouseenter', function() {
          this.style.boxShadow = '0 0 20px rgba(255, 140, 0, 0.5) !important';
          this.style.transform = 'scale(1.05)';
        });
        leaderboard.addEventListener('mouseleave', function() {
          this.style.boxShadow = '0 0 12px rgba(255, 140, 0, 0.3) !important';
          this.style.transform = 'scale(1)';
        });
      }

      // Style Referral button
      const referral = document.querySelector('a[href="/referral.html"]');
      if (referral) {
        referral.style.cssText = buttonStyle + `
          background: linear-gradient(135deg, #ff4d4d, #ff6b6b) !important;
          color: #060912 !important;
          border-color: #ff4d4d !important;
          box-shadow: 0 0 12px rgba(255, 77, 77, 0.3) !important;
        `;
        referral.textContent = '🔗 Refer';
        referral.addEventListener('mouseenter', function() {
          this.style.boxShadow = '0 0 20px rgba(255, 77, 77, 0.5) !important';
          this.style.transform = 'scale(1.05)';
        });
        referral.addEventListener('mouseleave', function() {
          this.style.boxShadow = '0 0 12px rgba(255, 77, 77, 0.3) !important';
          this.style.transform = 'scale(1)';
        });
      }

      // Style Weekly button
      const weekly = document.querySelector('a[href="/weekly-quests.html"]');
      if (weekly) {
        weekly.style.cssText = buttonStyle + `
          background: linear-gradient(135deg, #fbbf24, #ff8c00) !important;
          color: #060912 !important;
          border-color: #fbbf24 !important;
          box-shadow: 0 0 12px rgba(251, 191, 36, 0.3) !important;
        `;
        weekly.textContent = '🏆 Weekly';
        weekly.addEventListener('mouseenter', function() {
          this.style.boxShadow = '0 0 20px rgba(251, 191, 36, 0.5) !important';
          this.style.transform = 'scale(1.05)';
        });
        weekly.addEventListener('mouseleave', function() {
          this.style.boxShadow = '0 0 12px rgba(251, 191, 36, 0.3) !important';
          this.style.transform = 'scale(1)';
        });
      }

      // Style Support button
      const support = document.getElementById('supportBtn');
      if (support) {
        support.style.cssText = buttonStyle + `
          background: linear-gradient(135deg, #fbbf24, #ff8c00) !important;
          color: #060912 !important;
          border-color: #fbbf24 !important;
          box-shadow: 0 0 12px rgba(251, 191, 36, 0.3) !important;
        `;
        support.textContent = '☕ Help';
      }
    }, 500);
  }
})();
