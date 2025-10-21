const tooltip = document.getElementById('tooltip');
const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
  bubble.addEventListener('mousemove', e => {
    tooltip.style.display = 'block';
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
    tooltip.textContent = bubble.textContent;
  });

  bubble.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});
