// ===== Repeat Screen (Text) =====

import { getTopicById } from '../data.js';
import { navigate } from '../router.js';
import { createHeader } from '../components/header.js';
import { createButton } from '../components/button.js';

export function renderRepeat(topicId) {
  const app = document.getElementById('app');
  const topic = getTopicById(topicId);
  
  if (!topic) {
    navigate('home');
    return;
  }
  
  // Create screen container
  const screen = document.createElement('div');
  screen.className = 'screen';
  
  // Header - renamed from "Повторение текста" to "Пример текста"
  const header = createHeader('Пример текста', true);
  
  // Text display
  const textDisplay = document.createElement('div');
  textDisplay.className = 'text-display';
  
  // Split text into paragraphs
  const paragraphs = topic.text.split('\n\n');
  paragraphs.forEach(paragraph => {
    if (paragraph.trim()) {
      const p = document.createElement('p');
      p.textContent = paragraph.trim();
      textDisplay.appendChild(p);
    }
  });
  
  // Vocabulary section
  const vocabTitle = document.createElement('h3');
  vocabTitle.style.cssText = 'font-size: 1.1rem; font-weight: 600; margin: 24px 0 16px; color: var(--text-primary);';
  vocabTitle.textContent = 'Ключевые слова';
  
  const vocabGrid = document.createElement('div');
  vocabGrid.style.cssText = 'display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;';
  
  topic.words.slice(0, 6).forEach(word => {
    const wordCard = document.createElement('div');
    wordCard.className = 'card';
    wordCard.style.padding = '16px';
    wordCard.style.marginBottom = '0';
    
    const eng = document.createElement('div');
    eng.style.cssText = 'font-weight: 700; color: var(--primary-color); margin-bottom: 4px;';
    eng.textContent = word.english;
    
    const rus = document.createElement('div');
    rus.style.cssText = 'font-size: 0.875rem; color: var(--text-secondary);';
    rus.textContent = word.russian;
    
    wordCard.appendChild(eng);
    wordCard.appendChild(rus);
    vocabGrid.appendChild(wordCard);
  });
  
  // Practice button
  const practiceBtn = createButton('Перейти к заданиям', 'primary', () => {
    navigate('fillWords', { topicId: topic.id });
  });
  practiceBtn.style.marginTop = '20px';
  
  screen.appendChild(header);
  screen.appendChild(textDisplay);
  screen.appendChild(vocabTitle);
  screen.appendChild(vocabGrid);
  screen.appendChild(practiceBtn);
  
  app.appendChild(screen);
}
