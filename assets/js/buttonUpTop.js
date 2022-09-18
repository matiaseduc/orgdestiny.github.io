export const buttonUpTop = () => {
  const aboutElement = document.querySelector('#s-home');
  const stylesAbout = getComputedStyle(aboutElement);
  const buttonTop = document.querySelector('#buttonTop');
  const heightAboout = stylesAbout.height.split('px')[0];

  buttonTop.addEventListener('click', () => {
      window.scrollTo(0, 0);
  });

  window.addEventListener('scroll', () => {
      const isMov = window.scrollY > (heightAboout / 2) ? true : false;

      if (isMov) {
          buttonTop.style.opacity = 1;
      } else {
          buttonTop.style.opacity = 0;
      }
  });
}

buttonUpTop();