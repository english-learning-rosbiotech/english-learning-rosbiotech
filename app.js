// ===== Main App Entry Point =====

import { initRouter } from './router.js';
import { initTheme, toggleTheme } from './data.js';

// ===== Initialize Telegram WebApp (MAX Mini App) =====
function initTelegramWebApp() {
  if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    
    // Initialize WebApp
    tg.ready();
    
    // Expand to full height
    tg.expand();
    
    // Set header color
    tg.setHeaderColor('#5B8DEF');
    
    // Set background color
    tg.setBackgroundColor('#F8F9FA');
    
    // Enable closing confirmation if needed
    tg.enableClosingConfirmation();
    
    console.log('Telegram WebApp initialized');
    console.log('Platform:', tg.platform);
    console.log('Version:', tg.version);
    
    // Handle theme changes
    tg.onEvent('themeChanged', () => {
      console.log('Theme changed');
    });
    
    return tg;
  } else {
    console.log('Telegram WebApp not available - running in browser mode');
    return null;
  }
}

// ===== Create Theme Toggle Button =====
function createThemeToggle() {
  const existingToggle = document.querySelector('.theme-toggle');
  if (existingToggle) {
    existingToggle.remove();
  }
  
  const toggle = document.createElement('button');
  toggle.className = 'theme-toggle';
  toggle.setAttribute('aria-label', 'Переключить тему');
  
  // Set initial icon based on current theme
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  toggle.textContent = isDark ? '☀️' : '🌙';
  
  toggle.addEventListener('click', () => {
    const newDarkMode = toggleTheme();
    toggle.textContent = newDarkMode ? '☀️' : '🌙';
    
    // Update logo on home screen if visible
    updateLogoForTheme(newDarkMode);
  });
  
  document.body.appendChild(toggle);
}

// ===== Update Logo for Theme =====
function updateLogoForTheme(isDark) {
  const logo = document.querySelector('.welcome__logo-img');
  if (logo) {
    logo.src = isDark ? 'assets/images/logo-dark.png' : 'assets/images/logo-light.png';
  }
}

// ===== Initialize App =====
function init() {
  console.log('English Learning Mini App - Initializing...');
  
  // Initialize theme (load from localStorage)
  initTheme();
  
  // Initialize Telegram WebApp
  const tg = initTelegramWebApp();
  
  // Initialize router
  initRouter();
  
  // Create theme toggle button
  createThemeToggle();
  
  // Handle visibility change (pause/resume)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      console.log('App paused');
    } else {
      console.log('App resumed');
    }
  });
  
  // Handle before unload
  window.addEventListener('beforeunload', () => {
    console.log('App closing');
  });
  
  console.log('App initialized successfully');
}

// ===== Start App =====
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
