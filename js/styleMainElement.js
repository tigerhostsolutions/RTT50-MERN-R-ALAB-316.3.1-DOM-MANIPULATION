//
const MAIN_SELECTOR = 'main';
const MAIN_BG_COLOR = 'var(--main-bg)';
const MAIN_HTML_CONTENT = '<h1>DOM Manipulation</h1>';
const FLEX_CENTER_CLASS = 'flex-ctr';
let mainEl;

//
const applyMainElementStyles = (mainEl) => {
  mainEl.style.backgroundColor = MAIN_BG_COLOR;
  mainEl.innerHTML = MAIN_HTML_CONTENT;
  mainEl.classList.add(FLEX_CENTER_CLASS);
};

//
const getMainElement = (selector) => {
  mainEl = document.querySelector(selector);
  applyMainElementStyles(mainEl);
};

//
const updateMainContent = (text) => {
  mainEl.innerHTML = `<h1>${text}</h1>`;
};