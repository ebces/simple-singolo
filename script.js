const arrowLeft = document.querySelector('.slider__arrow-left');
const arrowRight = document.querySelector('.slider__arrow-right');
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
