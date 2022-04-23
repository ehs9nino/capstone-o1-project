function displayContent() {
  if (window.innerWidth < 768) {
    // If mobile
    document.querySelector('.mobile-menu-open').style.display = 'none';
    document.querySelector('.mobile-menu-close').style.display = 'block';
    document.querySelector('.desktop-menu a').style.display = 'none';
    document.querySelector('.top').style.display = 'none';
    document.querySelector('.main-programme').style.display = 'none';
    document.querySelector('.featured-speakers').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.partners').style.display = 'none';
    document.querySelector('.desktop-menu').style.display = 'block';
  } else {
    // If desktop
    document.querySelector('.mobile-menu-close').style.display = 'none';
  }
}
function closeMenu() {
  if (window.innerWidth < 768) {
    // If mobile
    document.querySelector('.desktop-menu').style.display = 'none';
    document.querySelector('.mobile-menu-close').style.display = 'none';
    document.querySelector('.top').style.display = 'block';
    document.querySelector('.main-programme').style.display = 'block';
    document.querySelector('.featured-speakers').style.display = 'block';
    document.querySelector('.mobile-menu-open').style.display = 'block';
    document.querySelector('footer').style.display = 'block';
    document.querySelector('.partners').style.display = 'block';
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

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.mobile-menu-open > img').addEventListener('click', displayContent);
  document.querySelector('.mobile-menu-close img').addEventListener('click', closeMenu);
  document.querySelector('.programme1').addEventListener('click', programmeSection);
  document.querySelector('.speakers1').addEventListener('click', speakersSection);
});

// 1.1. Speaker data
const speakers = [{
  imageUrl: 'imgs/avatar/1.png',
  imageAlt: 'John Spenser\'s portrait',
  name: 'John Spenser',
  occupation: 'Co-founder & Chairman Founder, Space Tourism Society',
  detail: 'John is a pioneering outer space architect and the recipient of design awards from NASA for his work on the International Space Station (ISS).',
},
{
  imageUrl: 'imgs/avatar/2.png',
  imageAlt: 'Jane Poynter\'s portrait',
  name: 'Jane Poynter',
  occupation: 'Founder & Co-CEO, Space Perspective',
  detail: 'Jane Poynter is an American aerospace executive, author and speaker. She is founder, co-CEO and CXO of Space Perspective, a luxury space travel company.',
},
{
  imageUrl: 'imgs/avatar/3.png',
  imageAlt: 'Barbara Belvise\'s portrait',
  name: 'Barbara Belvisi',
  occupation: 'CEO, Interstellar Lab',
  detail: 'Founder and CEO of Interstellar Lab. Barbara is an entrepreneur and investor, passionate about science, space and AI.',
},
{
  imageUrl: 'imgs/avatar/4.png',
  imageAlt: 'Marie-Lise Baron\'s portrait',
  name: 'Marie-Lise Baron',
  occupation: 'Founder & Private Jet Senior Interior Designer, The Baron Institute',
  detail: 'Marie-Lise Baron is a French-Canadian designer renowned for her unique aeronautical, exclusive signature, commercial and residential design projects. She graduated after specific private classical studies in Quebec City and Montreal, Canada.',
},
{
  imageUrl: 'imgs/avatar/5.png',
  imageAlt: 'John Weathersby\'s portrait',
  name: 'John Weathersby',
  occupation: 'Founder & Executive Director,StellarModal Transportation',
  detail: 'John is a founder of StellarModal Transportation Association is an international trade association which represents commercial providers of infrastructure, transportation and supply chain solutions for the commercial space industry.',
},
{
  imageUrl: 'imgs/avatar/6.png',
  imageAlt: 'Scott Lewers\'s portrait',
  name: 'Scott Lewers',
  occupation: 'Executive Vice President of Multiplatform Programming and Head of Science Channel Content, Discovery Communications',
  detail: 'Lewers served as senior vice president of multi-platform programming and digital media at TLC, and before TLC, was senior vice president of programming for Discovery Channel.',
}];

function addElem(elem, classes, parent) {
  const createdElem = document.createElement(elem);
  if (classes !== undefined) {
    classes.forEach((cl) => createdElem.classList.add(cl));
  }
  parent.appendChild(createdElem);

  return createdElem;
}
// 3. DOM manipulations
// 3.1. Generate speakers
const speakerCardCtr = document.querySelector('.speaker-cards');

speakers.forEach((speaker) => {
  const speakerCard = addElem('div', ['speaker-card'], speakerCardCtr);
  const speakerImgCtr = addElem('div', ['speaker-img'], speakerCard);
  const speakerImg = addElem('img', [], speakerImgCtr);
  speakerImg.setAttribute('src', speaker.imageUrl);
  speakerImg.setAttribute('alt', speaker.imageAlt);
  const speakerInfo = addElem('div', ['speaker-info'], speakerCard);
  const speakerName = addElem('h4', [], speakerInfo);
  speakerName.textContent = speaker.name;
  const speakerOccu = addElem('h5', [], speakerInfo);
  speakerOccu.textContent = speaker.occupation;
  addElem('div', ['line'], speakerInfo);
  const speakerDetail = addElem('p', [], speakerInfo);
  speakerDetail.textContent = speaker.detail;
});
