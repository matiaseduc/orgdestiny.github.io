export const scrollMenuEffect = () => {
  const menuElement = document.querySelector('nav');
  const stylesMenu = getComputedStyle(menuElement);
  const heightMenu = stylesMenu.height.split('px')[0];
  const headerElement = document.querySelector('header');

  window.addEventListener('scroll', () => {
      const isMov = window.scrollY > heightMenu ? true : false;
      
      console.log()

      if (isMov) {
          headerElement.style.background = 'rgba(2, 3, 86, 0.178)';
      } else {
          headerElement.style.background = 'rgba(2, 3, 86, 0.85)';
      }
  });
}

scrollMenuEffect();