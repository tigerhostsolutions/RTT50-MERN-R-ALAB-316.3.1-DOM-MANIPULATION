//
const TOP_MENU_ID = 'top-menu';
const TOP_MENU_HEIGHT = '100%';
const TOP_MENU_BG_COLOR = 'var(--top-menu-bg)';
const FLEX_AROUND_CLASS = 'flex-around';
let topMenuEl;
//
const applyTopMenuStyles = (topMenuEl) => {
  topMenuEl.style.height = TOP_MENU_HEIGHT;
  topMenuEl.style.backgroundColor = TOP_MENU_BG_COLOR;
  topMenuEl.classList.add(FLEX_AROUND_CLASS);
};

//
const getTopMenuElement = (elementId) => {
  topMenuEl = document.getElementById(elementId);
  applyTopMenuStyles(topMenuEl);
};
