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

    // Create weekly quests link
    const weeklyLink = document.createElement('a');
    weeklyLink.href = '/weekly-quests.html';
    weeklyLink.style.cssText = `
      color: #fbbf24;
      text-decoration: none;
      font-size: 13px;
      margin-left: 16px;
      transition: all 0.3s ease;
      display: inline-block;
      padding: 4px 8px;
      border-radius: 4px;
      border: 1px solid transparent;
    `;
    weeklyLink.textContent = '🏆 Weekly';
    
    // Hover effect
    weeklyLink.addEventListener('mouseenter', function() {
      this.style.borderColor = '#fbbf24';
      this.style.background = 'rgba(251, 191, 36, 0.1)';
    });
    
    weeklyLink.addEventListener('mouseleave', function() {
      this.style.borderColor = 'transparent';
      this.style.background = 'transparent';
    });

    // Insert after referral link
    referralLink.parentNode.insertBefore(weeklyLink, referralLink.nextSibling);
  }
})();
