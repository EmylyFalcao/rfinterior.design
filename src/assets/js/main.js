(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* Header: solid once scrolled, hides on scroll down, returns on scroll up */
  const header = $('[data-header]');
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 40);
    const goingDown = y > lastY && y > 400;
    if (!document.body.classList.contains('menu-open') && !header.contains(document.activeElement)) {
      header.classList.toggle('is-hidden', goingDown);
    }
    lastY = y;
  };
  onScroll();

  /* Mobile menu */
  const toggle = $('[data-menu-toggle]');
  const menu = $('[data-mobile-menu]');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      menu.hidden = false;
      void menu.offsetHeight; // commit the closed state so the reveal transitions
      menu.classList.add('is-open');
      $('a', menu).focus({ preventScroll: true });
    } else {
      menu.classList.remove('is-open');
      setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, reduceMotion ? 0 : 700);
    }
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); }
  });
  // Keep focus inside the open menu (toggle button + menu links)
  document.addEventListener('focusin', (e) => {
    if (toggle.getAttribute('aria-expanded') === 'true' && !menu.contains(e.target) && e.target !== toggle) $('a', menu).focus();
  });
  window.matchMedia('(min-width: 1081px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* Scroll reveal */
  const revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* Parallax */
  const parallaxEls = reduceMotion ? [] : $$('[data-parallax]');
  const parallax = () => {
    const vh = window.innerHeight;
    parallaxEls.forEach((el) => {
      const rect = el.parentElement.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) return;
      const progress = rect.top + rect.height / 2 - vh / 2;
      el.style.transform = `translate3d(0, ${(progress * -parseFloat(el.dataset.parallax)).toFixed(1)}px, 0)`;
    });
  };

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { onScroll(); parallax(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', parallax, { passive: true });
  parallax();

  /* Lightbox */
  const dialog = $('[data-lightbox-dialog]');
  if (dialog && typeof dialog.showModal === 'function') {
    const items = $$('[data-lightbox]');
    const big = $('[data-lightbox-img]', dialog);
    const caption = $('[data-lightbox-caption]', dialog);
    const count = $('[data-lightbox-count]', dialog);
    let index = 0;
    let opener = null;
    const show = (i) => {
      index = (i + items.length) % items.length;
      const thumb = $('img', items[index]);
      big.src = thumb.dataset.full || thumb.currentSrc;
      big.alt = thumb.alt;
      caption.textContent = thumb.alt;
      count.textContent = `${index + 1} / ${items.length}`;
    };
    items.forEach((btn, i) => btn.addEventListener('click', () => {
      opener = btn;
      show(i);
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    }));
    $('[data-lightbox-prev]', dialog).addEventListener('click', () => show(index - 1));
    $('[data-lightbox-next]', dialog).addEventListener('click', () => show(index + 1));
    $('[data-lightbox-close]', dialog).addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });
    let touchX = null;
    dialog.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    dialog.addEventListener('touchend', (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
      touchX = null;
    });
    dialog.addEventListener('close', () => { document.body.style.overflow = ''; opener?.focus(); });
  }

  /* Enquiry form */
  const form = $('[data-enquiry]');
  if (form) {
    const status = $('[data-status]', form);
    const setStatus = (msg, kind) => { status.textContent = msg; status.className = `enquiry__status is-${kind}`; };
    const validate = (focus = true) => {
      let firstInvalid = null;
      $$('[required]', form).forEach((field) => {
        const ok = field.type === 'email' ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()) : field.value.trim() !== '';
        field.setAttribute('aria-invalid', String(!ok));
        const err = document.getElementById(field.getAttribute('aria-describedby'));
        if (err) err.hidden = ok;
        if (!ok && !firstInvalid) firstInvalid = field;
      });
      if (focus) firstInvalid?.focus();
      return !firstInvalid;
    };
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validate()) { setStatus('Please check the highlighted fields.', 'error'); return; }
      const data = new FormData(form);
      const endpoint = form.dataset.endpoint;
      if (!endpoint) {
        const body = [
          `Name: ${data.get('name')}`, `Email: ${data.get('email')}`, `Phone: ${data.get('phone') || '-'}`,
          `Location: ${data.get('location') || '-'}`, `Interested in: ${data.get('service')}`,
          `Newsletter: ${data.get('newsletter') ? 'Yes' : 'No'}`, '', data.get('message'),
        ].join('\n');
        window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent('Project enquiry from ' + data.get('name'))}&body=${encodeURIComponent(body)}`;
        setStatus('Your email app should now open with your enquiry ready to send. If it doesn’t, email hello@rfinterior.design directly.', 'success');
        return;
      }
      const submit = $('button[type="submit"]', form);
      submit.disabled = true;
      try {
        const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error(res.statusText);
        form.reset();
        setStatus('Thank you. Your enquiry has been sent and I’ll be in touch shortly.', 'success');
      } catch {
        setStatus('Sorry, something went wrong. Please email hello@rfinterior.design or call (+44) 7490028696.', 'error');
      } finally {
        submit.disabled = false;
      }
    });
    $$('[required]', form).forEach((f) => f.addEventListener('input', () => {
      if (f.getAttribute('aria-invalid') === 'true') validate(false);
    }));
  }
})();
