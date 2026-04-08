// ===== Test Screen =====

import { getTopicById } from '../data.js';
import { navigate } from '../router.js';
import { createHeader } from '../components/header.js';
import { createButton } from '../components/button.js';
import { createProgressBar } from '../components/card.js';

export function renderTest(topicId) {
  const app = document.getElementById('app');
  const topic = getTopicById(topicId);
  
  if (!topic) {
    navigate('home');
    return;
  }
  
  const questions = topic.test;
  let currentIndex = 0;
  let selectedOption = null;
  let answered = false;
  let score = 0;
  
  function renderQuestion() {
    const question = questions[currentIndex];
    
    // Clear screen
    screen.innerHTML = '';
    
    // Header
    const header = createHeader('Тест', true);
    
    // Progress bar
    const progressBar = createProgressBar(currentIndex + 1, questions.length);
    
    // Question container
    const questionDiv = document.createElement('div');
    questionDiv.className = 'test-question';
    
    // Question text
    const questionText = document.createElement('div');
    questionText.className = 'test-question__text';
    questionText.textContent = question.question;
    questionDiv.appendChild(questionText);
    
    // Options
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'test-options';
    
    question.options.forEach((option, index) => {
      const optionBtn = document.createElement('div');
      optionBtn.className = 'test-option';
      
      const letter = document.createElement('span');
      letter.className = 'test-option__letter';
      letter.textContent = String.fromCharCode(65 + index); // A, B, C, D
      
      const text = document.createElement('span');
      text.textContent = option;
      
      optionBtn.appendChild(letter);
      optionBtn.appendChild(text);
      
      if (answered) {
        if (index === question.correct) {
          optionBtn.classList.add('correct');
        } else if (index === selectedOption && index !== question.correct) {
          optionBtn.classList.add('wrong');
        }
      } else {
        optionBtn.addEventListener('click', () => {
          selectedOption = index;
          renderQuestion();
        });
        
        if (selectedOption === index) {
          optionBtn.style.borderColor = 'var(--primary-color)';
          optionBtn.style.background = 'rgba(91, 141, 239, 0.1)';
        }
      }
      
      optionsDiv.appendChild(optionBtn);
    });
    
    questionDiv.appendChild(optionsDiv);
    
    // Navigation buttons
    const navDiv = document.createElement('div');
    navDiv.style.marginTop = '24px';
    
    if (!answered && selectedOption !== null) {
      const checkBtn = createButton('Проверить', 'primary', () => {
        answered = true;
        if (selectedOption === question.correct) {
          score++;
        }
        renderQuestion();
      });
      navDiv.appendChild(checkBtn);
    } else if (answered) {
      const nextBtn = createButton(
        currentIndex < questions.length - 1 ? 'Следующий вопрос' : 'Завершить тест',
        'success',
        () => {
          if (currentIndex < questions.length - 1) {
            currentIndex++;
            selectedOption = null;
            answered = false;
            renderQuestion();
          } else {
            showResults();
          }
        }
      );
      navDiv.appendChild(nextBtn);
    }
    
    screen.appendChild(header);
    screen.appendChild(progressBar);
    screen.appendChild(questionDiv);
    screen.appendChild(navDiv);
  }
  
  function showResults() {
    screen.innerHTML = '';
    
    const header = createHeader('Результаты теста', true);
    
    const resultsDiv = document.createElement('div');
    resultsDiv.className = 'results';
    
    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'results__score';
    scoreDiv.textContent = `${score}/${questions.length}`;
    
    const labelDiv = document.createElement('div');
    labelDiv.className = 'results__label';
    labelDiv.textContent = 'правильных ответов';
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'results__message';
    
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) {
      messageDiv.textContent = '🏆 Превосходно! Вы отлично знаете эту тему!';
    } else if (percentage >= 80) {
      messageDiv.textContent = '🌟 Отличный результат! Продолжайте в том же духе!';
    } else if (percentage >= 60) {
      messageDiv.textContent = '👍 Хорошо! Есть к чему стремиться!';
    } else if (percentage >= 40) {
      messageDiv.textContent = '💪 Неплохо! Попробуйте пройти тест ещё раз!';
    } else {
      messageDiv.textContent = '📚 Рекомендуем повторить материал и попробовать снова!';
    }
    
    const restartBtn = createButton('Пройти тест снова', 'primary', () => {
      currentIndex = 0;
      selectedOption = null;
      answered = false;
      score = 0;
      renderQuestion();
    });
    
    const backBtn = createButton('Вернуться к теме', 'secondary', () => {
      navigate('topic', { topicId: topic.id });
    });
    
    const homeBtn = createButton('На главную', 'accent', () => {
      navigate('home');
    });
    
    resultsDiv.appendChild(scoreDiv);
    resultsDiv.appendChild(labelDiv);
    resultsDiv.appendChild(messageDiv);
    resultsDiv.appendChild(restartBtn);
    resultsDiv.appendChild(backBtn);
    resultsDiv.appendChild(homeBtn);
    
    screen.appendChild(header);
    screen.appendChild(resultsDiv);
  }
  
  // Create screen container
  const screen = document.createElement('div');
  screen.className = 'screen';
  
  app.appendChild(screen);
  
  // Initial render
  renderQuestion();
}
