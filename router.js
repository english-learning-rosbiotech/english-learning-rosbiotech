// ===== Router for Screen Navigation =====

import { appState } from './data.js';
import { renderHome } from './screens/home.js';
import { renderTopic } from './screens/topic.js';
import { renderWords } from './screens/words.js';
import { renderRepeat } from './screens/repeat.js';
import { renderFillWords } from './screens/fillWords.js';
import { renderTest } from './screens/test.js';

const app = document.getElementById('app');

// Navigation history stack
const navHistory = [];

// ===== Navigation Function =====
export function navigate(screenName, params = {}, addToHistory = true) {
  // Save current state to history before navigating
  if (addToHistory && appState.currentScreen !== 'home') {
    navHistory.push({
      screen: appState.currentScreen,
      params: { ...getCurrentParams() }
    });
  }
  
  // Update app state
  appState.currentScreen = screenName;
  setCurrentParams(params);
  
  // Clear the app container
  app.innerHTML = '';
  
  // Render the appropriate screen
  switch (screenName) {
    case 'home':
      // Clear history when going home
      navHistory.length = 0;
      renderHome();
      break;
    case 'topic':
      renderTopic(params.topicId);
      break;
    case 'words':
      renderWords(params.topicId);
      break;
    case 'repeat':
      renderRepeat(params.topicId);
      break;
    case 'fillWords':
      renderFillWords(params.topicId);
      break;
    case 'test':
      renderTest(params.topicId);
      break;
    default:
      console.error(`Unknown screen: ${screenName}`);
      renderHome();
  }
  
  // Update URL for browser history
  updateURL(screenName, params);
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Current params storage
let currentParams = {};

function getCurrentParams() {
  return { ...currentParams };
}

function setCurrentParams(params) {
  currentParams = { ...params };
}

// ===== Go Back Function =====
export function goBack() {
  // Try to use browser history first
  if (window.history.length > 1) {
    window.history.back();
    return;
  }
  
  // Fallback to custom history stack
  if (navHistory.length > 0) {
    const prevState = navHistory.pop();
    navigate(prevState.screen, prevState.params, false);
  } else {
    navigate('home');
  }
}

// ===== Go Home Function =====
export function goHome() {
  navigate('home');
}

// ===== Initialize Router =====
export function initRouter() {
  // Handle browser back button
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.screen) {
      // Don't add to history when handling popstate
      const params = e.state.params || {};
      setCurrentParams(params);
      appState.currentScreen = e.state.screen;
      
      app.innerHTML = '';
      
      switch (e.state.screen) {
        case 'home':
          renderHome();
          break;
        case 'topic':
          renderTopic(params.topicId);
          break;
        case 'words':
          renderWords(params.topicId);
          break;
        case 'repeat':
          renderRepeat(params.topicId);
          break;
        case 'fillWords':
          renderFillWords(params.topicId);
          break;
        case 'test':
          renderTest(params.topicId);
          break;
        default:
          renderHome();
      }
    } else {
      navigate('home');
    }
  });
  
  // Initial render
  renderHome();
}

// ===== Update URL =====
export function updateURL(screenName, params = {}) {
  const url = new URL(window.location.href);
  url.searchParams.set('screen', screenName);
  if (params.topicId) {
    url.searchParams.set('topic', params.topicId);
  } else {
    url.searchParams.delete('topic');
  }
  window.history.pushState({ screen: screenName, params }, '', url);
}
