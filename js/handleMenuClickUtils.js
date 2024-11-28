import {menuLinks} from 'js/menuLinksData';

const LINK_TAG_NAME = 'A';
const CLASS_ACTIVE = 'active';
const TOP_MENU_STYLE_ACTIVE = '100%';
const TOP_MENU_STYLE_INACTIVE = '0';
const CLICK_EVENT = 'click';

const topMenuLinks = topMenuEl.getElementsByTagName('a');

//
function createAnchorElement(href, text) {
  const anchorElement = document.createElement('a');
  anchorElement.href = href;
  anchorElement.textContent = text;
  return anchorElement;
}

function createMenuLink(link) {
  const anchorElement = createAnchorElement(link.href, link.text);
  topMenuEl.appendChild(anchorElement);
}

//
function clearActiveClass(links) {
  for (let link of links) {
    link.classList.remove(CLASS_ACTIVE);
  }
}

//
function toggleActiveClass(clickedLink) {
  clearActiveClass(topMenuLinks);
  clickedLink.classList.toggle(CLASS_ACTIVE);
}

//
function onTopMenuClick(event) {
  event.preventDefault();
  if (event.target.tagName !== LINK_TAG_NAME) return;
  const targetLink = event.target;
  const linkText = targetLink.textContent.toLowerCase();
  console.log(linkText);
  toggleActiveClass(targetLink);
  handleSubmenu(linkText, targetLink);
}

//
const onSubMenuClick = (event) => {
  event.preventDefault();
  if (event.target.tagName !== LINK_TAG_NAME) return;
  const clickedLink = event.target;
  const linkText = clickedLink.textContent;
  console.log(linkText);
  hideSubMenu();
  clearActiveClass(topMenuLinks);
  updateMainContent(linkText);
};

//
function handleSubmenu(linkText, clickedLink) {
  const links = menuLinks.find(link => link.text.toLowerCase() === linkText);
  if (clickedLink.classList.contains(CLASS_ACTIVE) && links?.subLinks) {
    buildSubmenu(links.subLinks);
    subMenuEl.style.top = TOP_MENU_STYLE_ACTIVE;
  } else {
    subMenuEl.style.top = TOP_MENU_STYLE_INACTIVE;
    clickedLink.classList.remove(CLASS_ACTIVE);
  }
}

const hideSubMenu = () => {
  subMenuEl.style.top = TOP_MENU_STYLE_INACTIVE;
};

// Helper function to build submenu
function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = '';
  subLinks.forEach(link => {
    const linkElement = document.createElement('a');
    linkElement.href = link.href;
    linkElement.textContent = link.text;
    subMenuEl.appendChild(linkElement);
  });
}

export {
  CLICK_EVENT,
  createMenuLink,
  onTopMenuClick,
  onSubMenuClick
}