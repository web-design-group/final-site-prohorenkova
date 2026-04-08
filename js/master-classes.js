
function initCarousel(carouselNumber) {
  const track = document.getElementById(`carouselTrack${carouselNumber}`);
  const container = document.querySelector(`.carousel-container[data-carousel="${carouselNumber}"]`);
  
  if (!track || !container) return;
  
  const prevBtn = container.querySelector('.prev-arrow');
  const nextBtn = container.querySelector('.next-arrow');
  
  let currentIndex = 0;
  const cards = track.querySelectorAll('.master-card');
  const cardsPerView = 3;
  const totalCards = cards.length;
  
  function updateCarousel() {
    if (cards.length === 0) return;
    const cardWidth = cards[0].offsetWidth;
    const gap = 20;
    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= totalCards - cardsPerView;
    
    prevBtn.style.opacity = prevBtn.disabled ? '0.3' : '1';
    nextBtn.style.opacity = nextBtn.disabled ? '0.3' : '1';
  }
  
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - cardsPerView) {
      currentIndex++;
      updateCarousel();
    }
  });
  
  window.addEventListener('resize', () => {
    setTimeout(updateCarousel, 100);
  });
  
  setTimeout(updateCarousel, 100);
}

document.addEventListener('DOMContentLoaded', function() {
  initCarousel(1);
  initCarousel(2);
  initCarousel(3);
});