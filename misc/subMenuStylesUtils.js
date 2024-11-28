const SUB_MENU_CONSTS = {
  ID: 'sub-menu',
  BG_COLOR: 'var(--sub-menu-bg)',
  HEIGHT: '100%',
  POSITION: 'absolute',
  TOP: '0',
  FLEX_AROUND_CLASS: 'flex-around'
};

const applySubMenuStyles = (menuElement) => {
  const { HEIGHT, BG_COLOR, FLEX_AROUND_CLASS, POSITION, TOP } = SUB_MENU_CONSTS;
  menuElement.style.height = HEIGHT;
  menuElement.style.backgroundColor = BG_COLOR;
  menuElement.classList.add(FLEX_AROUND_CLASS);
  menuElement.style.position = POSITION;
  menuElement.style.top = TOP;
};

const applySubMenuStylesById = (elementID) => {
  const subMenuElement = document.getElementById(elementID);
  if (subMenuElement) {
    applySubMenuStyles(subMenuElement);
  }
};