
console.log('Скрипт загружен')
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.gallery-item');

  items.forEach(item => {
    item.addEventListener('mouseenter', function handler() {
      this.classList.add('moved');
      this.removeEventListener('mouseenter', handler);
    });
  });
});