//
const SUB_MENU_ID = 'sub-menu';
const SUB_MENU_BG_COLOR = 'var(--sub-menu-bg)';
const SUB_MENU_HEIGHT = '100%';
const SUB_MENU_POSITION = 'absolute';
const SUB_MENU_TOP = '0';
const FLEX_AROUND_CLASS = 'flex-around';
let subMenuEl;

//
const applySubMenuStyles = (subMenuEl) => {
  subMenuEl.style.height = SUB_MENU_HEIGHT;
  subMenuEl.style.backgroundColor = SUB_MENU_BG_COLOR;
  subMenuEl.classList.add(FLEX_AROUND_CLASS);
  subMenuEl.style.position = SUB_MENU_POSITION;
  subMenuEl.style.top = SUB_MENU_TOP;
};

//
const getSubMenuElement = (elementID) => {
  subMenuEl = document.getElementById(elementID);
  applySubMenuStyles(subMenuEl);
};


