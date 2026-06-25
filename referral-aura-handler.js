// Referral Aura Handler - Manages referral rewards and aura expiration
(function() {
  // Check if there's a referral code in URL (friend using referral)
  const urlParams = new URLSearchParams(window.location.search);
  const referralCode = urlParams.get('ref');

  if (referralCode && referralCode.startsWith('HUNTER_')) {
    // New user joining with referral code
    grantNewUserBonus(referralCode);
    grantReferrerReward(referralCode);
  }

  // Check aura expiration on app load
  checkAuraExpiration();

  function grantNewUserBonus(referrerCode) {
    // Check if already claimed
    if (localStorage.getItem('referralClaimed')) return;

    // Give new user: 1000 XP + 6 stat points
    const bonus = {
      xp: 1000,
      statPoints: 6
    };

    localStorage.setItem('referralBonus', JSON.stringify(bonus));
    localStorage.setItem('referralClaimed', 'true');
    localStorage.setItem('referrerCode', referrerCode);

    console.log('✨ Referral bonus granted:', bonus);
  }

  function grantReferrerReward(referrerCode) {
    // Award the referrer
    // 2000 XP + 10 stat points + RED AURA for 1 month
    
    // Only grant if this is a different user
    const currentUserCode = localStorage.getItem('hunterUserId');
    if (currentUserCode === referrerCode) return; // Same user, don't reward

    // Increment referral count for referrer
    let refCount = parseInt(localStorage.getItem(`referralCount_${referrerCode}`) || '0');
    refCount += 1;
    localStorage.setItem(`referralCount_${referrerCode}`, refCount.toString());

    // Grant aura expiration (30 days from now)
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    localStorage.setItem(`auraExpiry_${referrerCode}`, expiryDate.toISOString());

    console.log('🔴 Referrer reward granted:', {
      xp: 2000,
      statPoints: 10,
      aura: 'RED (30 days)'
    });
  }

  function checkAuraExpiration() {
    const currentUserCode = localStorage.getItem('hunterUserId');
    if (!currentUserCode) return;

    const auraExpiry = localStorage.getItem(`auraExpiry_${currentUserCode}`);
    if (!auraExpiry) return;

    const expiry = new Date(auraExpiry);
    const now = new Date();

    if (now > expiry) {
      // Aura expired, clear it
      localStorage.removeItem(`auraExpiry_${currentUserCode}`);
      localStorage.removeItem('ascendPremium');
      localStorage.removeItem('ascendPremiumTier');
      console.log('⏳ Aura expired');
    } else {
      // Aura still active - set it as red aura from referral
      localStorage.setItem('ascendPremium', 'true');
      localStorage.setItem('ascendPremiumTier', 'red');
      localStorage.setItem('auraExpiry', auraExpiry);
    }
  }

  // Expose referral bonus data to main app
  window.getReferralBonus = function() {
    const bonus = localStorage.getItem('referralBonus');
    if (bonus) {
      localStorage.removeItem('referralBonus'); // Use once
      return JSON.parse(bonus);
    }
    return null;
  };
})();
