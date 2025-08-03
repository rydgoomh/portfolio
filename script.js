
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.buttons a');
  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });
  });
});
