/*
  Click any photo or video on the page to see it enlarged.
  Close with the × button, the Esc key, or by clicking the dark background.
  Add <script src="zoom.js"></script> just before </body> on a page to turn it on.
*/
(function () {
  const box = document.createElement('div');
  box.className = 'zoom';
  box.innerHTML = '<button class="zoom-close" aria-label="Close">×</button><div class="zoom-stage"></div><p class="zoom-caption"></p>';
  document.body.appendChild(box);

  const stage = box.querySelector('.zoom-stage');
  const caption = box.querySelector('.zoom-caption');

  function captionFor(el) {
    const cap = el.closest('figure') && el.closest('figure').querySelector('figcaption');
    return cap ? cap.textContent : '';
  }

  function open(media, text) {
    stage.replaceChildren(media);
    caption.textContent = text;
    caption.hidden = !text;
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    const v = stage.querySelector('video');
    if (v) v.pause();
    box.classList.remove('open');
    stage.replaceChildren();
    document.body.style.overflow = '';
  }

  // Photos
  document.querySelectorAll('main img').forEach(img => {
    img.classList.add('zoomable');
    img.addEventListener('click', () => {
      const big = document.createElement('img');
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      open(big, captionFor(img));
    });
  });

  // Videos: the small one becomes a preview with a play button,
  // and clicking it plays the video enlarged
  document.querySelectorAll('main video').forEach(video => {
    video.removeAttribute('controls');
    video.muted = true;
    const wrap = document.createElement('div');
    wrap.className = 'zoom-video zoomable';
    wrap.setAttribute('role', 'button');
    wrap.setAttribute('aria-label', 'Play video');
    video.replaceWith(wrap);
    wrap.append(video, Object.assign(document.createElement('span'), { className: 'zoom-play' }));

    wrap.addEventListener('click', () => {
      const big = document.createElement('video');
      big.src = video.currentSrc || video.src;
      big.controls = true;
      big.autoplay = true;
      big.playsInline = true;
      open(big, captionFor(wrap));
    });
  });

  box.addEventListener('click', e => {
    if (e.target === box || e.target === stage || e.target.classList.contains('zoom-close')) close();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && box.classList.contains('open')) close();
  });
})();
