// ===== Topic Screen (Menu) =====

import { getTopicById } from '../data.js';
import { navigate } from '../router.js';
import { createHeader } from '../components/header.js';
import { createMenuButton } from '../components/button.js';

export function renderTopic(topicId) {
  const app = document.getElementById('app');
  const topic = getTopicById(topicId);
  
  if (!topic) {
    navigate('home');
    return;
  }
  
  // Create screen container
  const screen = document.createElement('div');
  screen.className = 'screen';
  
  // Header
  const header = createHeader(topic.title, true);
  
  // Topic info card
  const infoCard = document.createElement('div');
  infoCard.className = 'card';
  infoCard.style.textAlign = 'center';
  infoCard.style.padding = '32px 24px';
  
  const icon = document.createElement('div');
  icon.style.cssText = 'font-size: 4rem; margin-bottom: 16px;';
  icon.textContent = topic.icon;
  
  const title = document.createElement('h2');
  title.style.cssText = 'font-size: 1.5rem; font-weight: 700; margin-bottom: 8px; color: var(--text-primary);';
  title.textContent = topic.title;
  
  const subtitle = document.createElement('p');
  subtitle.style.cssText = 'color: var(--text-secondary); font-size: 1rem;';
  subtitle.textContent = topic.subtitle;
  
  infoCard.appendChild(icon);
  infoCard.appendChild(title);
  infoCard.appendChild(subtitle);
  
  // Menu grid
  const menuTitle = document.createElement('h3');
  menuTitle.style.cssText = 'font-size: 1.1rem; font-weight: 600; margin: 24px 0 16px; color: var(--text-primary);';
  menuTitle.textContent = 'Режим обучения';
  
  const menuGrid = document.createElement('div');
  menuGrid.className = 'menu-grid';
  
  // Words button
  const wordsBtn = createMenuButton('Слова', '📇', 'blue', () => {
    navigate('words', { topicId: topic.id });
  });
  
  // Example text button (renamed from "Повторение")
  const repeatBtn = createMenuButton('Пример текста', '📖', 'green', () => {
    navigate('repeat', { topicId: topic.id });
  });
  
  // Fill words button
  const fillBtn = createMenuButton('Вставить слово', '✏️', 'yellow', () => {
    navigate('fillWords', { topicId: topic.id });
  });
  
  // Test button
  const testBtn = createMenuButton('Тест', '⭐', 'purple', () => {
    navigate('test', { topicId: topic.id });
  });
  
  menuGrid.appendChild(wordsBtn);
  menuGrid.appendChild(repeatBtn);
  menuGrid.appendChild(fillBtn);
  menuGrid.appendChild(testBtn);
  
  screen.appendChild(header);
  screen.appendChild(infoCard);
  screen.appendChild(menuTitle);
  screen.appendChild(menuGrid);
  
  app.appendChild(screen);
}
