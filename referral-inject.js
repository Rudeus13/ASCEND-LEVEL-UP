// Referral Button Injector - Adds referral link to app
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addReferralButton);
  } else {
    addReferralButton();
  }

  function addReferralButton() {
    const wrap = document.querySelector('.wrap');
    if (!wrap) return;

    // Find the leaderboard link to add button after it
    const leaderboardLink = document.querySelector('a[href="/leaderboard.html"]');
    if (!leaderboardLink) return;

    // Create referral link as button (matching leaderboard style)
    const referralLink = document.createElement('a');
    referralLink.href = '/referral.html';
    referralLink.style.cssText = `
      display: inline-block;
      padding: 10px 20px;
      background: linear-gradient(135deg, #ff4d4d, #ff6b6b);
      color: #060912;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 700;
      font-family: 'Rajdhani', sans-serif;
      font-size: 13px;
      cursor: pointer;
      border: 2px solid #ff4d4d;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;
      box-shadow: 0 0 12px rgba(255, 77, 77, 0.3);
    `;
    referralLink.textContent = '🔗 Referral';
    
    // Hover effect
    referralLink.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 0 20px rgba(255, 77, 77, 0.5)';
      this.style.transform = 'scale(1.05)';
    });
    
    referralLink.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 0 12px rgba(255, 77, 77, 0.3)';
      this.style.transform = 'scale(1)';
    });

    // Insert after leaderboard link
    leaderboardLink.parentNode.insertBefore(referralLink, leaderboardLink.nextSibling);
  }
})();
