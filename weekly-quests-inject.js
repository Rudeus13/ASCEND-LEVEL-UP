// Weekly Quests Button Injector - Adds weekly quests link to app
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addWeeklyQuestsButton);
  } else {
    addWeeklyQuestsButton();
  }

  function addWeeklyQuestsButton() {
    const wrap = document.querySelector('.wrap');
    if (!wrap) return;

    // Find the referral link to add button after it
    const referralLink = document.querySelector('a[href="/referral.html"]');
    if (!referralLink) return;

    // Create weekly quests link as button (matching consistent style)
    const weeklyLink = document.createElement('a');
    weeklyLink.href = '/weekly-quests.html';
    weeklyLink.style.cssText = `
      display: inline-block;
      padding: 10px 14px;
      background: linear-gradient(135deg, #fbbf24, #ff8c00);
      color: #060912;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 700;
      font-family: 'Rajdhani', sans-serif;
      font-size: 12px;
      cursor: pointer;
      border: 2px solid #fbbf24;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      box-shadow: 0 0 12px rgba(251, 191, 36, 0.3);
      margin-left: 8px;
      white-space: nowrap;
    `;
    weeklyLink.textContent = '🏆 Weekly';
    
    // Hover effect
    weeklyLink.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 0 20px rgba(251, 191, 36, 0.5)';
      this.style.transform = 'scale(1.05)';
    });
    
    weeklyLink.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 0 12px rgba(251, 191, 36, 0.3)';
      this.style.transform = 'scale(1)';
    });

    // Insert after referral link
    referralLink.parentNode.insertBefore(weeklyLink, referralLink.nextSibling);
  }
})();
