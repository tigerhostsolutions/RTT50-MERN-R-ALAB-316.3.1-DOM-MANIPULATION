const MAIN_SELECTOR = 'main';
const MAIN_BG_COLOR = 'var(--main-bg)';
const MAIN_HTML_CONTENT = '<h1>DOM Manipulation</h1>';
const FLEX_CENTER_CLASS = 'flex-ctr';

class MainElementController {
  constructor(selector) {
    this._mainElement = document.querySelector(selector);
  }

  get mainElement() {
    return this._mainElement;
  }

  set mainElement(element) {
    if (element instanceof HTMLElement) {
      this._mainElement = element;
    } else {
      throw new Error('Invalid element type');
    }
  }

  setElementStyle() {
    this._mainElement.style.backgroundColor = MAIN_BG_COLOR;
  }

  setElementContent() {
    this._mainElement.innerHTML = MAIN_HTML_CONTENT;
    this._mainElement.classList.add(FLEX_CENTER_CLASS);
  }

  applyStylesToElement() {
    this.setElementStyle();
    this.setElementContent();
  }
}

const controller = new MainElementController(MAIN_SELECTOR);
controller.applyStylesToElement();