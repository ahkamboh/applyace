import { Controller } from "@hotwired/stimulus"
class TextAnimationController {
  constructor(texts, containerId) {
    this.texts = texts;
    this.container = document.getElementById(containerId);
    this.currentText = 0;
  }

  changeText() {
    const text = this.texts[this.currentText];
    const letters = text.split('');
    this.container.innerHTML = '';

    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.animationDelay = `${index * 0.1}s`;
      this.container.appendChild(span);
    });

    this.currentText = (this.currentText + 1) % this.texts.length;
  }

  start(interval) {
    this.changeText();
    setInterval(() => this.changeText(), interval);
  }
}

export default class extends Controller {
  connect() {
    const textAnimationController = new TextAnimationController(
      ['Rank 1 in Pakistan', ' 2000 Total Students ', 'Private limited'],
      'fade-text'
    );
    textAnimationController.start(5000);
  }
}
