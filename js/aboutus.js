function displayContent() {
  if (window.innerWidth < 768) {
    // If mobile
    document.querySelector('.mobile-menu-open').style.display = 'none';
    document.querySelector('.mobile-menu-close').style.display = 'block';
    document.querySelector('.desktop-menu a').style.display = 'none';
    document.querySelector('.top').style.display = 'none';
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.upcoming-events').style.display = 'none';
    document.querySelector('.partners').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.desktop-menu').style.display = 'block';
  } else {
    // If desktop
    document.querySelector('.mobile-menu-close').style.display = 'none';
  }
}
function closeMenu() {
  if (window.innerWidth < 768) {
    // If mobile
    document.querySelector('.mobile-menu-open').style.display = 'block';
    document.querySelector('.mobile-menu-close').style.display = 'none';
    document.querySelector('.desktop-menu a').style.display = 'block';
    document.querySelector('.top').style.display = 'block';
    document.querySelector('.main').style.display = 'block';
    document.querySelector('.upcoming-events').style.display = 'block';
    document.querySelector('.partners').style.display = 'block';
    document.querySelector('footer').style.display = 'block';
    document.querySelector('.desktop-menu').style.display = 'none';
  } else {
    // If desktop
    document.querySelector('.mobile-menu-open').style.display = 'none';
  }
}

function programmeSection() {
  closeMenu();
  window.location = `${window.location.pathname}#programme`;
}
function speakersSection() {
  closeMenu();
  window.location = `${window.location.pathname}#speakers`;
}

function sponsersSection() {
  closeMenu();
  window.location = `${window.location.pathname}#sponsers`;
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.mobile-menu-open > img').addEventListener('click', displayContent);
  document.querySelector('.mobile-menu-close img').addEventListener('click', closeMenu);
  document.querySelector('.programme1').addEventListener('click', programmeSection);
  document.querySelector('.speakers1').addEventListener('click', speakersSection);
  document.querySelector('.sponsers1').addEventListener('click', sponsersSection);
});
