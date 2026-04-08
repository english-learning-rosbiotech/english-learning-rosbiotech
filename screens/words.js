// ===== Words Screen (Flashcards) =====
// Одна карточка, содержимое обновляется через DOM (не пересоздаётся)

import { getTopicById, appState, resetProgress } from '../data.js';
import { navigate } from '../router.js';
import { createHeader } from '../components/header.js';
import { createButton } from '../components/button.js';

export function renderWords(topicId) {
  const app = document.getElementById('app');
  const topic = getTopicById(topicId);
  
  if (!topic) {
    navigate('home');
    return;
  }
  
  // Reset progress if starting fresh
  if (appState.currentTopic !== topicId) {
    resetProgress();
    appState.currentTopic = topicId;
  }
  
  const words = topic.words;
  let currentIndex = appState.wordIndex;
  let showTranslation = appState.showTranslation;
  
  // Create screen container (один раз)
  const screen = document.createElement('div');
  screen.className = 'screen';
  
  // Header
  const header = createHeader('Карточки слов', true);
  
  // Progress bar
  const progressBarContainer = document.createElement('div');
  progressBarContainer.className = 'progress-bar';
  const progressFill = document.createElement('div');
  progressFill.className = 'progress-bar__fill';
  progressBarContainer.appendChild(progressFill);
  
  // Word card (одна карточка на все слова)
  const wordCard = document.createElement('div');
  wordCard.className = 'word-card';
  
  const englishEl = document.createElement('div');
  englishEl.className = 'word-card__english';
  
  const transcriptionEl = document.createElement('div');
  transcriptionEl.className = 'word-card__transcription';
  
  const russianEl = document.createElement('div');
  russianEl.className = 'word-card__russian';
  
  const hintEl = document.createElement('div');
  hintEl.className = 'word-card__hint';
  
  wordCard.appendChild(englishEl);
  wordCard.appendChild(transcriptionEl);
  wordCard.appendChild(russianEl);
  wordCard.appendChild(hintEl);
  
  // Click on card to toggle translation
  wordCard.addEventListener('click', () => {
    showTranslation = !showTranslation;
    appState.showTranslation = showTranslation;
    updateCardDisplay();
  });
  
  // Navigation
  const nav = document.createElement('div');
  nav.className = 'card-nav';
  
  const prevBtn = document.createElement('button');
  prevBtn.className = 'card-nav__btn';
  prevBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
  `;
  
  const counter = document.createElement('div');
  counter.className = 'card-nav__counter';
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'card-nav__btn';
  nextBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  `;
  
  nav.appendChild(prevBtn);
  nav.appendChild(counter);
  nav.appendChild(nextBtn);
  
  // Buttons container
  const buttonsContainer = document.createElement('div');
  buttonsContainer.style.marginTop = '20px';
  
  // Example text button (shown on last word)
  const exampleBtn = createButton('📖 Пример текста', 'success', () => {
    navigate('repeat', { topicId: topic.id });
  });
  exampleBtn.style.display = 'none';
  
  // Reset button
  const resetBtn = createButton('🔄 Начать сначала', 'secondary', () => {
    currentIndex = 0;
    showTranslation = false;
    appState.wordIndex = 0;
    appState.showTranslation = false;
    updateCardDisplay();
    updateNavButtons();
  });
  
  buttonsContainer.appendChild(exampleBtn);
  buttonsContainer.appendChild(resetBtn);
  
  // Assemble screen
  screen.appendChild(header);
  screen.appendChild(progressBarContainer);
  screen.appendChild(wordCard);
  screen.appendChild(nav);
  screen.appendChild(buttonsContainer);
  
  app.appendChild(screen);
  
  // Function to update card display (обновляет DOM, не создаёт новые элементы)
  function updateCardDisplay() {
    const word = words[currentIndex];
    
    englishEl.textContent = word.english;
    transcriptionEl.textContent = word.transcription;
    russianEl.textContent = word.russian;
    
    if (showTranslation) {
      russianEl.classList.add('visible');
      hintEl.textContent = 'Нажмите, чтобы скрыть перевод';
    } else {
      russianEl.classList.remove('visible');
      hintEl.textContent = 'Нажмите, чтобы увидеть перевод';
    }
    
    // Update progress bar
    progressFill.style.width = `${((currentIndex + 1) / words.length) * 100}%`;
    
    // Update counter
    counter.textContent = `${currentIndex + 1} / ${words.length}`;
    
    // Show/hide example button
    exampleBtn.style.display = currentIndex === words.length - 1 ? 'flex' : 'none';
  }
  
  // Function to update nav buttons state
  function updateNavButtons() {
    prevBtn.disabled = currentIndex === 0;
    prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
    
    nextBtn.disabled = currentIndex === words.length - 1;
    nextBtn.style.opacity = currentIndex === words.length - 1 ? '0.4' : '1';
  }
  
  // Navigation handlers
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      showTranslation = false;
      appState.wordIndex = currentIndex;
      appState.showTranslation = false;
      updateCardDisplay();
      updateNavButtons();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentIndex < words.length - 1) {
      currentIndex++;
      showTranslation = false;
      appState.wordIndex = currentIndex;
      appState.showTranslation = false;
      updateCardDisplay();
      updateNavButtons();
    }
  });
  
  // Initial display
  updateCardDisplay();
  updateNavButtons();
}
