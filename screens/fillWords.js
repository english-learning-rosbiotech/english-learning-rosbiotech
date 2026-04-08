// ===== Fill Words Screen =====

import { getTopicById } from '../data.js';
import { navigate } from '../router.js';
import { createHeader } from '../components/header.js';
import { createButton } from '../components/button.js';

// Fisher-Yates shuffle algorithm - creates a new shuffled copy, doesn't mutate original
function shuffleArray(array) {
  const shuffled = [...array]; // Create a copy
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function renderFillWords(topicId) {
  const app = document.getElementById('app');
  const topic = getTopicById(topicId);
  
  if (!topic) {
    navigate('home');
    return;
  }
  
  const exercises = topic.fillWords;
  let currentIndex = 0;
  let selectedOption = null;
  let answered = false;
  let score = 0;
  
  // Store shuffled options - created once per exercise, never modified after
  let exerciseOptions = [];
  
  // Create screen container (один раз)
  const screen = document.createElement('div');
  screen.className = 'screen';
  
  // Header
  const header = createHeader('Вставьте слово', true);
  
  // Progress bar
  const progressBarContainer = document.createElement('div');
  progressBarContainer.className = 'progress-bar';
  const progressFill = document.createElement('div');
  progressFill.className = 'progress-bar__fill';
  progressBarContainer.appendChild(progressFill);
  
  // Exercise container
  const exerciseContainer = document.createElement('div');
  exerciseContainer.className = 'fill-word';
  
  // Text with blank (динамически обновляется)
  const textDiv = document.createElement('div');
  textDiv.className = 'fill-word__text';
  exerciseContainer.appendChild(textDiv);
  
  // Options container
  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'fill-word__options';
  exerciseContainer.appendChild(optionsDiv);
  
  // Navigation buttons container
  const navDiv = document.createElement('div');
  navDiv.style.marginTop = '24px';
  
  // Assemble screen
  screen.appendChild(header);
  screen.appendChild(progressBarContainer);
  screen.appendChild(exerciseContainer);
  screen.appendChild(navDiv);
  
  app.appendChild(screen);
  
  // Initialize options for current exercise (shuffle once)
  function initExerciseOptions() {
    const exercise = exercises[currentIndex];
    // Create shuffled copy once, preserve this order throughout the exercise
    exerciseOptions = shuffleArray(exercise.options);
  }
  
  // Function to render current exercise (обновляет DOM, не пересоздаёт)
  function renderExercise() {
    // Initialize shuffled options on first render of this exercise
    if (exerciseOptions.length === 0) {
      initExerciseOptions();
    }
    
    // Update progress bar
    progressFill.style.width = `${((currentIndex + 1) / exercises.length) * 100}%`;
    
    // Render text with blank
    renderTextWithBlank();
    
    // Render options (always in the same shuffled order)
    renderOptions();
    
    // Render navigation buttons
    renderNavButtons();
  }
  
  function renderTextWithBlank() {
    const exercise = exercises[currentIndex];
    textDiv.innerHTML = '';
    
    // Разбиваем текст по _____
    const parts = exercise.text.split('_____');
    
    if (parts.length === 2) {
      // Часть до пропуска
      textDiv.appendChild(document.createTextNode(parts[0]));
      
      // Пропуск (blank) - на его месте показываем выбранное слово или ???
      const blank = document.createElement('span');
      blank.className = 'fill-word__blank';
      
      if (answered) {
        blank.textContent = selectedOption;
        blank.classList.add(selectedOption === exercise.answer ? 'correct' : 'wrong');
      } else if (selectedOption) {
        blank.textContent = selectedOption;
        blank.classList.add('filled');
      } else {
        blank.textContent = '???';
      }
      
      textDiv.appendChild(blank);
      
      // Часть после пропуска
      textDiv.appendChild(document.createTextNode(parts[1]));
    } else {
      // Если нет пропуска, показываем как есть
      textDiv.textContent = exercise.text;
    }
  }
  
  function renderOptions() {
    const exercise = exercises[currentIndex];
    optionsDiv.innerHTML = '';
    
    // ALWAYS use the same shuffled order - never change it
    // This ensures selected word stays in its position
    exerciseOptions.forEach(option => {
      const optionBtn = document.createElement('button');
      optionBtn.className = 'fill-word__option';
      optionBtn.textContent = option;
      
      if (answered) {
        optionBtn.disabled = true;
        // Highlight correct answer in green
        if (option === exercise.answer) {
          optionBtn.style.borderColor = 'var(--success-color)';
          optionBtn.style.background = 'rgba(6, 214, 160, 0.1)';
        }
        // Highlight wrong selection in red
        else if (option === selectedOption && option !== exercise.answer) {
          optionBtn.style.borderColor = 'var(--danger-color)';
          optionBtn.style.background = 'rgba(239, 91, 91, 0.1)';
        }
      } else {
        optionBtn.addEventListener('click', () => {
          selectedOption = option;
          renderExercise(); // Re-render to show selection in blank and highlight
        });
        
        // Highlight selected option visually (but don't move it!)
        if (selectedOption === option) {
          optionBtn.style.borderColor = 'var(--primary-color)';
          optionBtn.style.background = 'rgba(91, 141, 239, 0.1)';
        }
      }
      
      optionsDiv.appendChild(optionBtn);
    });
  }
  
  function renderNavButtons() {
    const exercise = exercises[currentIndex];
    navDiv.innerHTML = '';
    
    if (!answered && selectedOption) {
      const checkBtn = createButton('Проверить', 'primary', () => {
        answered = true;
        if (selectedOption === exercise.answer) {
          score++;
        }
        renderExercise(); // Re-render to show correct/wrong styling
      });
      navDiv.appendChild(checkBtn);
    } else if (answered) {
      const nextBtn = createButton(
        currentIndex < exercises.length - 1 ? 'Следующее' : 'Завершить',
        'success',
        () => {
          if (currentIndex < exercises.length - 1) {
            currentIndex++;
            selectedOption = null;
            answered = false;
            exerciseOptions = []; // Reset for next exercise (will shuffle new order)
            renderExercise();
          } else {
            showResults();
          }
        }
      );
      navDiv.appendChild(nextBtn);
    }
  }
  
  function showResults() {
    screen.innerHTML = '';
    
    const header = createHeader('Результаты', true);
    
    const resultsDiv = document.createElement('div');
    resultsDiv.className = 'results';
    
    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'results__score';
    scoreDiv.textContent = `${score}/${exercises.length}`;
    
    const labelDiv = document.createElement('div');
    labelDiv.className = 'results__label';
    labelDiv.textContent = 'правильных ответов';
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'results__message';
    
    const percentage = (score / exercises.length) * 100;
    if (percentage === 100) {
      messageDiv.textContent = '🎉 Отлично! Идеальный результат!';
    } else if (percentage >= 75) {
      messageDiv.textContent = '👍 Хорошая работа!';
    } else if (percentage >= 50) {
      messageDiv.textContent = '💪 Неплохо! Продолжайте практиковаться!';
    } else {
      messageDiv.textContent = '📚 Попробуйте ещё раз! Практика делает совершенным.';
    }
    
    const restartBtn = createButton('Пройти снова', 'primary', () => {
      currentIndex = 0;
      selectedOption = null;
      answered = false;
      score = 0;
      exerciseOptions = [];
      // Пересоздаём экран для рестарта
      screen.innerHTML = '';
      screen.appendChild(header);
      screen.appendChild(progressBarContainer);
      screen.appendChild(exerciseContainer);
      screen.appendChild(navDiv);
      renderExercise();
    });
    
    const backBtn = createButton('Вернуться к теме', 'secondary', () => {
      navigate('topic', { topicId: topic.id });
    });
    
    resultsDiv.appendChild(scoreDiv);
    resultsDiv.appendChild(labelDiv);
    resultsDiv.appendChild(messageDiv);
    resultsDiv.appendChild(restartBtn);
    resultsDiv.appendChild(backBtn);
    
    screen.appendChild(header);
    screen.appendChild(resultsDiv);
  }
  
  // Initial render
  renderExercise();
}
