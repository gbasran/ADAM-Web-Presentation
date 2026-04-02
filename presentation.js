/* ============================================================
   Adam Presentation — Navigation + Speaker Notes
   ============================================================ */
(function () {
  var slides = document.querySelectorAll('.slide');
  var total = slides.length;
  var current = 0;
  var notesVisible = false;

  var counter = document.querySelector('.slide-counter');
  var progressFill = document.querySelector('.progress-fill');

  function showSlide(index) {
    if (index < 0 || index >= total) return;
    slides[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    updateUI();
    window.location.hash = 'slide-' + current;
    /* scroll to top of slide content */
    slides[current].scrollTop = 0;
  }

  function updateUI() {
    if (counter) counter.textContent = (current + 1) + ' / ' + total;
    if (progressFill) progressFill.style.width = ((current + 1) / total * 100) + '%';
  }

  function nextSlide() { showSlide(current + 1); }
  function prevSlide() { showSlide(current - 1); }

  /* keyboard */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    }
  });

  /* click navigation zones (left 20% = prev, right 20% = next) */
  document.addEventListener('click', function (e) {
    /* dont navigate if clicking interactive elements */
    if (e.target.closest('a, button, .speaker-notes')) return;
    var x = e.clientX / window.innerWidth;
    if (x < 0.15) prevSlide();
    else if (x > 0.85) nextSlide();
  });

  /* touch swipe */
  var touchStartX = 0;
  document.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  });
  document.addEventListener('touchend', function (e) {
    var diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  });

  /* hash-based deep linking */
  function loadFromHash() {
    var match = window.location.hash.match(/slide-(\d+)/);
    if (match) {
      var idx = parseInt(match[1], 10);
      if (idx >= 0 && idx < total) {
        showSlide(idx);
        return;
      }
    }
    showSlide(0);
  }

  window.addEventListener('hashchange', loadFromHash);

  /* init */
  loadFromHash();
})();
