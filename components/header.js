// ===== Header Component =====

import { goBack, goHome } from '../router.js';

export function createHeader(title, showBack = true, showHome = true) {
  const header = document.createElement('div');
  header.className = 'header';
  
  if (showBack) {
    const backBtn = document.createElement('button');
    backBtn.className = 'header__back';
    backBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
    `;
    backBtn.addEventListener('click', goBack);
    header.appendChild(backBtn);
  } else {
    const spacer = document.createElement('div');
    spacer.className = 'header__back';
    spacer.style.visibility = 'hidden';
    header.appendChild(spacer);
  }
  
  const titleEl = document.createElement('h1');
  titleEl.className = 'header__title';
  titleEl.textContent = title;
  header.appendChild(titleEl);
  
  // Home button
  if (showHome) {
    const homeBtn = document.createElement('button');
    homeBtn.className = 'header__home';
    homeBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    `;
    homeBtn.addEventListener('click', goHome);
    header.appendChild(homeBtn);
  } else {
    const rightSpacer = document.createElement('div');
    rightSpacer.className = 'header__home';
    rightSpacer.style.visibility = 'hidden';
    header.appendChild(rightSpacer);
  }
  
  return header;
}

export function createSimpleHeader(title) {
  const header = document.createElement('div');
  header.className = 'header';
  header.style.justifyContent = 'center';
  
  const titleEl = document.createElement('h1');
  titleEl.className = 'header__title';
  titleEl.style.margin = '0';
  titleEl.textContent = title;
  header.appendChild(titleEl);
  
  return header;
}
