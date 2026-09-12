document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Gallery lightbox
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var lbImg = lightbox.querySelector('img');
    document.querySelectorAll('[data-lightbox]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        lbImg.src = link.getAttribute('href');
        lbImg.alt = link.querySelector('img') ? link.querySelector('img').alt : '';
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('open');
        lbImg.src = '';
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { lightbox.classList.remove('open'); lbImg.src=''; }
    });
  }

  // Booking form: static demo — prevent actual submission, show a friendly note
  var form = document.querySelector('.booking-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-result');
      if (note) {
        note.textContent = "Thanks — this form is a design preview and isn't wired up to send yet. Connect it to your email or booking tool to go live.";
        note.style.display = 'block';
      }
    });
  }
});
