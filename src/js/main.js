function updateDotsForAll() {
  const labelDotsList = document.querySelectorAll('.service__label-dots');

  labelDotsList.forEach(labelDots => {
    const dotCount = Math.floor(labelDots.offsetWidth / 6);
    labelDots.textContent = '.'.repeat(dotCount);
  });
}

window.addEventListener('resize', updateDotsForAll);
updateDotsForAll();
