// ===== Home Screen =====

import { topics, appState } from '../data.js';
import { navigate } from '../router.js';
import { createTopicCard } from '../components/card.js';

export function renderHome() {
  const app = document.getElementById('app');
  
  // Create screen container
  const screen = document.createElement('div');
  screen.className = 'screen';
  
  // Welcome section
  const welcome = document.createElement('div');
  welcome.className = 'welcome';
  
  // Logo image (РОСБИОТЕХ) - меняется в зависимости от темы
  const logo = document.createElement('img');
  logo.className = 'welcome__logo-img';
  logo.src = appState.darkMode ? 'assets/images/logo-dark.png' : 'assets/images/logo-light.png';
  logo.alt = 'РОСБИОТЕХ';
  
  const title = document.createElement('h1');
  title.className = 'welcome__title';
  title.textContent = 'English Learning';
  
  const subtitle = document.createElement('p');
  subtitle.className = 'welcome__subtitle';
  subtitle.textContent = 'Платформа для интерактивного изучения английского языка';
  
  welcome.appendChild(logo);
  welcome.appendChild(title);
  welcome.appendChild(subtitle);
  
  // Topics section
  const topicsTitle = document.createElement('h2');
  topicsTitle.style.cssText = 'font-size: 1.25rem; font-weight: 700; margin-bottom: 16px; color: var(--text-primary);';
  topicsTitle.textContent = 'Выберите тему';
  
  const topicsContainer = document.createElement('div');
  
  topics.forEach(topic => {
    const card = createTopicCard(topic, () => {
      navigate('topic', { topicId: topic.id });
    });
    topicsContainer.appendChild(card);
  });
  
  // Support button
  const supportBtn = document.createElement('button');
  supportBtn.className = 'support-btn';
  supportBtn.innerHTML = '👨‍💻 Техподдержка';
  supportBtn.addEventListener('click', () => {
    window.open('https://max.ru/u/f9LHodD0cOLwv5L0SiVGBEFkarGOHX__EKRkhInbibcwhq7W-WCI7PSzm8M', '_blank');
  });
  
  screen.appendChild(welcome);
  screen.appendChild(topicsTitle);
  screen.appendChild(topicsContainer);
  screen.appendChild(supportBtn);
  
  app.appendChild(screen);
}
