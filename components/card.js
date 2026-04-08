// ===== Card Component =====

export function createTopicCard(topic, onClick) {
  const card = document.createElement('div');
  card.className = 'card card--topic';
  
  const iconDiv = document.createElement('div');
  iconDiv.className = 'card--topic__icon';
  iconDiv.textContent = topic.icon;
  
  const contentDiv = document.createElement('div');
  contentDiv.className = 'card--topic__content';
  
  const title = document.createElement('div');
  title.className = 'card--topic__title';
  title.textContent = topic.title;
  
  const subtitle = document.createElement('div');
  subtitle.className = 'card--topic__subtitle';
  subtitle.textContent = topic.subtitle;
  
  contentDiv.appendChild(title);
  contentDiv.appendChild(subtitle);
  
  const arrow = document.createElement('div');
  arrow.innerHTML = `
    <svg class="card--topic__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  `;
  
  card.appendChild(iconDiv);
  card.appendChild(contentDiv);
  card.appendChild(arrow);
  
  card.addEventListener('click', onClick);
  
  return card;
}

export function createWordCard(word, showTranslation, onCardClick) {
  const card = document.createElement('div');
  card.className = 'word-card';
  
  const english = document.createElement('div');
  english.className = 'word-card__english';
  english.textContent = word.english;
  
  const transcription = document.createElement('div');
  transcription.className = 'word-card__transcription';
  transcription.textContent = word.transcription;
  
  const russian = document.createElement('div');
  russian.className = 'word-card__russian';
  if (showTranslation) {
    russian.classList.add('visible');
  }
  russian.textContent = word.russian;
  
  const hint = document.createElement('div');
  hint.className = 'word-card__hint';
  hint.textContent = showTranslation ? 'Нажмите, чтобы скрыть перевод' : 'Нажмите, чтобы увидеть перевод';
  
  card.appendChild(english);
  card.appendChild(transcription);
  card.appendChild(russian);
  card.appendChild(hint);
  
  card.addEventListener('click', onCardClick);
  
  return card;
}

export function createProgressBar(current, total) {
  const container = document.createElement('div');
  container.className = 'progress-bar';
  
  const fill = document.createElement('div');
  fill.className = 'progress-bar__fill';
  fill.style.width = `${(current / total) * 100}%`;
  
  container.appendChild(fill);
  
  return container;
}

export function createCardNavigation(current, total, onPrev, onNext) {
  const nav = document.createElement('div');
  nav.className = 'card-nav';
  
  const prevBtn = document.createElement('button');
  prevBtn.className = 'card-nav__btn';
  prevBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
  `;
  prevBtn.disabled = current === 0;
  prevBtn.style.opacity = current === 0 ? '0.4' : '1';
  prevBtn.addEventListener('click', onPrev);
  
  const counter = document.createElement('div');
  counter.className = 'card-nav__counter';
  counter.textContent = `${current + 1} / ${total}`;
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'card-nav__btn';
  nextBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  `;
  nextBtn.disabled = current === total - 1;
  nextBtn.style.opacity = current === total - 1 ? '0.4' : '1';
  nextBtn.addEventListener('click', onNext);
  
  nav.appendChild(prevBtn);
  nav.appendChild(counter);
  nav.appendChild(nextBtn);
  
  return nav;
}
