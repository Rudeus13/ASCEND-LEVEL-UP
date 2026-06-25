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

    // Find the leaderboard link
    const leaderboardLink = document.querySelector('a[href="/leaderboard.html"]');
    if (!leaderboardLink) return;

    // Create referral link
    const referralLink = document.createElement('a');
    referralLink.href = '/referral.html';
    referralLink.style.cssText = `
      color: #ff4d4d;
      text-decoration: none;
      font-size: 13px;
      margin-left: 16px;
      transition: all 0.3s ease;
      display: inline-block;
      padding: 4px 8px;
      border-radius: 4px;
      border: 1px solid transparent;
    `;
    referralLink.textContent = '🔗 Referral';
    
    // Hover effect
    referralLink.addEventListener('mouseenter', function() {
      this.style.borderColor = '#ff4d4d';
      this.style.background = 'rgba(255, 77, 77, 0.1)';
    });
    
    referralLink.addEventListener('mouseleave', function() {
      this.style.borderColor = 'transparent';
      this.style.background = 'transparent';
    });

    // Insert after leaderboard link
    leaderboardLink.parentNode.insertBefore(referralLink, leaderboardLink.nextSibling);
  }
})();
