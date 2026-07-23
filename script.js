const screens = [
  { id: 'screen-splash', label: 'Splash' },
  { id: 'screen-login', label: 'Login' },
  { id: 'screen-signup', label: 'Signup' },
  { id: 'screen-otp', label: 'OTP verify' },
  { id: 'screen-reset-password', label: 'Reset password' },
  { id: 'screen-onboarding', label: 'Onboarding' },
  { id: 'screen-home', label: 'Home feed', hasNav: true },
  { id: 'screen-search', label: 'Search' },
  { id: 'screen-story-viewer', label: 'Story viewer' },
  { id: 'screen-discover', label: 'Discover', hasNav: true },
  { id: 'screen-discover-filters', label: 'Discover filters' },
  { id: 'screen-communities', label: 'Communities', hasNav: true },
  { id: 'screen-community-page', label: 'Match thread' },
  { id: 'screen-events', label: 'Events' },
  { id: 'screen-event-detail', label: 'Event detail' },
  { id: 'screen-chats', label: 'Chats', hasNav: true },
  { id: 'screen-chat-detail', label: 'Chat detail' },
  { id: 'screen-notifications', label: 'Notifications' },
  { id: 'screen-notif-settings', label: 'Notification settings' },
  { id: 'screen-profile', label: 'Profile', hasNav: true },
  { id: 'screen-edit-profile', label: 'Edit profile' },
  { id: 'screen-wallet', label: 'Wallet' },
  { id: 'screen-earnings', label: 'Earnings' },
  { id: 'screen-live', label: 'Live stream' },
  { id: 'screen-golive-gate', label: 'Go Live gate' },
  { id: 'screen-premium', label: 'Premium paywall' },
  { id: 'screen-verification', label: 'Verification' },
  { id: 'screen-business-promo', label: 'Business promo' },
  { id: 'screen-admin', label: 'Admin console' },
];

const navIconHome = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1v-9"/></svg>`;
const navIconDiscover = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6 6-2z"/></svg>`;
const navIconCommunities = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8.5" cy="9" r="3"/><circle cx="16" cy="10.5" r="2.4"/><path d="M2.8 19c.6-3 2.7-4.6 5.7-4.6s5.1 1.6 5.7 4.6"/><path d="M13.6 15c2.3.2 4 1.7 4.5 4"/></svg>`;
const navIconChats = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3.5 12a8 8 0 1 1 3.2 6.4L3 19.5l1.1-3.4A7.96 7.96 0 0 1 3.5 12Z"/></svg>`;
const navIconProfile = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8.2" r="3.4"/><path d="M4.8 19.5c1-3.4 3.6-5.2 7.2-5.2s6.2 1.8 7.2 5.2"/></svg>`;

const tabs = [
  { id: 'screen-home', icon: navIconHome, label: 'Home' },
  { id: 'screen-discover', icon: navIconDiscover, label: 'Discover' },
  { id: 'screen-communities', icon: navIconCommunities, label: 'Groups' },
  { id: 'screen-chats', icon: navIconChats, label: 'Chats' },
  { id: 'screen-profile', icon: navIconProfile, label: 'Profile' },
];

function buildBottomNav(activeId) {
  return tabs.map(t => `
    <div class="nav-item ${t.id === activeId ? 'on' : ''}" onclick="showScreen('${t.id}')">
      ${t.icon}
      <span>${t.label}</span>
    </div>`).join('');
}

// inject bottom navs into the 5 core-tab screens
['bn-home', 'bn-discover', 'bn-communities', 'bn-chats', 'bn-profile'].forEach(id => {
  const activeId = 'screen-' + id.split('-')[1];
  const el = document.getElementById(id);
  if (el) el.innerHTML = buildBottomNav(activeId);
});

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-pill').forEach(p => p.classList.toggle('active', p.dataset.id === id));
}

const navEl = document.getElementById('navigator');
screens.forEach(s => {
  const pill = document.createElement('div');
  pill.className = 'nav-pill' + (s.id === 'screen-splash' ? ' active' : '');
  pill.textContent = s.label;
  pill.dataset.id = s.id;
  pill.onclick = () => showScreen(s.id);
  navEl.appendChild(pill);
});







