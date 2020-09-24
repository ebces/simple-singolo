const arrowLeft = document.querySelector('.slider__arrow--left');
const arrowRight = document.querySelector('.slider__arrow--right');
const sliderLine = document.querySelector('.slider__line');
const images = document.querySelectorAll('.slider__photo');

let counter = 0;
images[counter].style.display = 'block';
arrowRight.addEventListener('click', () => {
  let nextIndex = counter + 1;

  if (nextIndex >= images.length) {
    nextIndex = 0;
  }

  const next = images[nextIndex];
  sliderLine.append(next);
  next.style.display = 'block';
  next.style.animation = 'moveRight 1s';

  counter += 1;
  if (counter >= images.length) {
    counter = 0;
  }
});

arrowLeft.addEventListener('click', () => {
  let prevIndex = counter - 1;

  if (prevIndex < 0) {
    prevIndex = images.length - 1;
  }

  const prev = images[prevIndex];
  sliderLine.append(prev);
  prev.style.display = 'block';
  prev.style.animation = 'moveLeft 1s';

  counter -= 1;
  if (counter < 0) {
    counter = images.length - 1;
  }
});

const navigationLinks = document.querySelectorAll('.navigation__link');
const portfolioTabs = document.querySelectorAll('.portfolio__tab');
const portfilioPictures = document.querySelectorAll('.portfolio__picture');
const portfilioPicturesCount = portfilioPictures.length;

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const changeActiveTab = (tabs, newClass) => {
  for (const element of tabs) {
    element.addEventListener('click', (event) => {
      for (const link of tabs) {
        link.classList.remove(newClass);
      }
      event.target.classList.add(newClass);
    });
  }
};

changeActiveTab(navigationLinks, 'navigation__link--active');

for (const element of portfolioTabs) {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    for (const element of portfilioPictures) {
      element.style.order = `${getRandomInt(portfilioPicturesCount)}`;
    }
  });
}

changeActiveTab(portfolioTabs, 'portfolio__tab--active');

const burgerButton = document.querySelector('.header__burger');
const navigation = document.querySelector('.navigation');
const separators = document.querySelectorAll('.navigation__separator');
const navigationItems = document.querySelectorAll('.navigation__item');
const logo = document.querySelector('.header__logo');
const shadow = document.querySelector('.header__shadow');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('header__burger--active');
  burgerButton.classList.toggle('header__burger--not-active');
  navigation.classList.toggle('navigation--mobile');
  logo.classList.toggle('header__logo--active');

  for (const element of separators) {
    element.style.display = 'none';
  }
  for (const element of navigationItems) {
    element.style.display = 'block';
  }
});

for (const element of navigationLinks) {
  element.addEventListener('click', () => {
    burgerButton.classList.remove('header__burger--active');
    burgerButton.classList.add('header__burger--not-active');
    navigation.classList.remove('navigation--mobile');
    logo.classList.remove('header__logo--active');
  });
}

const home = document.querySelector('.header');
const services = document.querySelector('.services');
const portfolio = document.querySelector('.portfolio');

const homePositionY = home.getBoundingClientRect().y + window.pageYOffset;
const servicesPositionY = services.getBoundingClientRect().y + window.pageYOffset;
const portfolioPositionY = portfolio.getBoundingClientRect().y + window.pageYOffset;

const homeLink = document.getElementById('homeId');
const servicesLink = document.getElementById('servicesId');
const portfolioLink = document.getElementById('portfolioId');

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= homePositionY) {
    for (let element of navigationLinks) {
      element.classList.remove('navigation__link--active');
    }
    homeLink.classList.add('navigation__link--active');
  }
  if (window.pageYOffset >= servicesPositionY) {
    for (let element of navigationLinks) {
      element.classList.remove('navigation__link--active');
    }
    servicesLink.classList.add('navigation__link--active');
  }
  if (window.pageYOffset >= portfolioPositionY) {
    for (let element of navigationLinks) {
      element.classList.remove('navigation__link--active');
    }
    portfolioLink.classList.add('navigation__link--active');
  }
})
