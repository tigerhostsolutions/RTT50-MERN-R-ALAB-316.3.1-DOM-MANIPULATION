import {menuLinks} from 'js/menuLinksData.js';
import {
  CLICK_EVENT,
  createMenuLink,
  onTopMenuClick,
  onSubMenuClick,
} from 'js/handleMenuClickUtils';

// Create the Main Element
getMainElement(MAIN_SELECTOR);

// Create the Top Menu
getTopMenuElement(TOP_MENU_ID);

// Create the Menu Links
menuLinks.forEach(createMenuLink);

// Create the Sub Menu
getSubMenuElement(SUB_MENU_ID);

// Add delegated 'click' event listener to top-menu
TOP_MENU_ID.addEventListener(CLICK_EVENT, onTopMenuClick);

// Add delegated 'click' event listener to sub-menu
SUB_MENU_ID.addEventListener(CLICK_EVENT, onSubMenuClick);


