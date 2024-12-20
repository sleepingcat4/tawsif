function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }
  
  if (isMobileDevice()) {
    const warning = document.getElementById('mobile-warning');
    warning.style.display = 'block';
  }

  function changeCursorToImage(event) {
    const ghost = document.querySelector('.wrench');
    const isLink = event.target.tagName.toLowerCase() === 'a';
    const image = isLink ? 'link.png' : 'wrench.png';
  
    ghost.src = image;
  
    const mouseX = event.clientX;
    const mouseY = event.clientY;
  
    ghost.style.left = `${mouseX - 50}px`;
    ghost.style.top = `${mouseY - 50}px`;
  
    ghost.style.visibility = 'visible';
  }
  
  const ghost = document.querySelector('.wrench');
  ghost.style.position = 'absolute';
  ghost.style.width = '100px';
  ghost.style.height = '100px';
  ghost.style.pointerEvents = 'none';
  
  document.addEventListener('mousemove', changeCursorToImage);
  
  document.body.style.cursor = 'none';
  
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.style.cursor = 'none';
  });
  
  document.addEventListener('mouseleave', () => {
    ghost.style.visibility = 'hidden';
  });
  
  document.addEventListener('mouseenter', () => {
    ghost.style.visibility = 'visible';
  });
  
