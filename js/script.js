/* =========================================================
   INTERACTIONS
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initProjectTabs();
  initScrollSpy();
  initThemeToggle();
  initScrollReveal();
  initTimelineProgress();
  initOnloadReveal();
  initLightbox();
  initGameCards();
});

/* ---------------------------------------------------------
   1. Mobile nav toggle
   --------------------------------------------------------- */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  const closeMenu = () => {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    links.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  };

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close the menu after choosing a link
  links.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close on outside click
  document.addEventListener('click', (event) => {
    const clickedInsideNav = event.target.closest('.site-nav');
    if (!clickedInsideNav) closeMenu();
  });

  // Close on Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  // Reset state if the viewport is resized back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767.98) closeMenu();
  });
}

/* ---------------------------------------------------------
   2. Projects tab switcher (projects.html only)
   --------------------------------------------------------- */
function initProjectTabs() {
  const tabs = Array.from(document.querySelectorAll('.project-tab'));
  if (tabs.length === 0) return;

  const panels = tabs.map((tab) =>
    document.getElementById(tab.getAttribute('aria-controls'))
  );

  const activateTab = (index) => {
    tabs.forEach((tab, i) => {
      const isActive = i === index;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
      if (panels[i]) panels[i].hidden = !isActive;
    });
    tabs[index].focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t, i) => {
        const isActive = i === index;
        t.classList.toggle('is-active', isActive);
        t.setAttribute('aria-selected', String(isActive));
        t.tabIndex = isActive ? 0 : -1;
        if (panels[i]) panels[i].hidden = !isActive;
      });
    });

    // Arrow-key navigation between tabs, per ARIA tabs pattern
    tab.addEventListener('keydown', (event) => {
      let newIndex = null;
      if (event.key === 'ArrowRight') newIndex = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') newIndex = (index - 1 + tabs.length) % tabs.length;
      if (newIndex !== null) {
        event.preventDefault();
        activateTab(newIndex);
      }
    });
  });
}

/* ---------------------------------------------------------
   3. Scroll-based nav active state (index.html sections)
   --------------------------------------------------------- */
function initScrollSpy() {
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  if (navLinks.length === 0) return;
  if (!('IntersectionObserver' in window)) return;

  // Only watch sections that actually have a matching in-page nav link
  // (the Projects preview section links out to projects.html, not an anchor)
  const linkedIds = new Set(
    navLinks
      .map((link) => (link.getAttribute('href') || '').split('#')[1])
      .filter(Boolean)
  );
  const sections = Array.from(document.querySelectorAll('main section[id]')).filter(
    (section) => linkedIds.has(section.id)
  );
  if (sections.length === 0) return;

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const linkTargetId = (link.getAttribute('href') || '').split('#')[1];
      link.classList.toggle('is-active', linkTargetId === id);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      // Pick the entry closest to the top of the viewport among those visible
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length === 0) return;
      visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      setActiveLink(visible[0].target.id);
    },
    {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  // Fix: a short trailing section (e.g. Contact) can sit inside the
  // rootMargin band without ever filling it, or the page may not be
  // able to scroll far enough for the band to reach it at all. Once
  // the user is within a few px of the bottom of the page, force the
  // last section's nav link active regardless of the observer state.
  const lastSection = sections[sections.length - 1];
  window.addEventListener('scroll', () => {
    const nearBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (nearBottom) setActiveLink(lastSection.id);
  });
}

/* ---------------------------------------------------------
   5. Generic scroll-reveal (.reveal / .reveal-brick elements)
   --------------------------------------------------------- */
function initScrollReveal() {
  const items = Array.from(document.querySelectorAll('.reveal, .reveal-brick'));
  if (items.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
  );

  items.forEach((item) => observer.observe(item));
}

/* ---------------------------------------------------------
   6. Experience timeline — scroll-linked progress bar
   --------------------------------------------------------- */
function initTimelineProgress() {
  const timeline = document.querySelector('.timeline');
  const fill = document.querySelector('.timeline-progress-fill');
  if (!timeline || !fill) return;

  let ticking = false;

  const update = () => {
    const rect = timeline.getBoundingClientRect();
    const viewportH = window.innerHeight;

    // Progress: 0 when the timeline's top just enters the bottom of the
    // viewport, 1 when its bottom reaches the top of the viewport.
    const total = rect.height + viewportH;
    const scrolled = viewportH - rect.top;
    const progress = Math.min(1, Math.max(0, scrolled / total));

    fill.style.height = `${progress * 100}%`;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  };

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
}

/* ---------------------------------------------------------
   7. Above-the-fold onload reveal (.reveal-onload elements)
   --------------------------------------------------------- */
function initOnloadReveal() {
  const items = document.querySelectorAll('.reveal-onload');
  if (items.length === 0) return;

  // Small delay so it reads as an intentional entrance rather
  // than a layout flash.
  requestAnimationFrame(() => {
    setTimeout(() => {
      items.forEach((item) => item.classList.add('is-visible'));
    }, 80);
  });
}

/* ---------------------------------------------------------
   8. Lightbox and Programming project cards
   --------------------------------------------------------- */
function initGameCards() {
  document.querySelectorAll('.game-card-media').forEach((media) => {
    const video = media.querySelector('video');
    if (!video) return;

    const play = () => {
      if (!video.currentSrc) return;
      media.classList.add('is-playing');
      video.play().catch(() => {});
    };

    const stop = () => {
      media.classList.remove('is-playing');
      video.pause();
      video.currentTime = 0;
    };

    media.addEventListener('mouseenter', play);
    media.addEventListener('mouseleave', stop);

    // Tap-to-toggle for touch devices, which have no hover state
    media.addEventListener('click', () => {
      if (media.classList.contains('is-playing')) {
        stop();
      } else {
        play();
      }
    });
  });
}

function initLightbox() {
  const triggers = Array.from(document.querySelectorAll('[data-lightbox-group]'));
  if (triggers.length === 0) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <div class="lightbox-figure">
      <button type="button" class="lightbox-nav-btn lightbox-prev" aria-label="Previous image">&larr;</button>
      <div class="lightbox-content"></div>
      <button type="button" class="lightbox-nav-btn lightbox-next" aria-label="Next image">&rarr;</button>
      <button type="button" class="lightbox-close" aria-label="Close">&times;</button>
      <div class="lightbox-counter"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  const content = overlay.querySelector('.lightbox-content');
  const counter = overlay.querySelector('.lightbox-counter');
  const prevBtn = overlay.querySelector('.lightbox-prev');
  const nextBtn = overlay.querySelector('.lightbox-next');
  const closeBtn = overlay.querySelector('.lightbox-close');

  let currentGroup = [];
  let currentIndex = 0;

  const render = () => {
    const item = currentGroup[currentIndex];
    content.innerHTML = '';

    if (item.src) {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt || '';
      content.appendChild(img);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'lightbox-placeholder';
      placeholder.textContent = item.placeholder || 'Image placeholder';
      content.appendChild(placeholder);
    }

    const showNav = currentGroup.length > 1;
    prevBtn.style.display = showNav ? '' : 'none';
    nextBtn.style.display = showNav ? '' : 'none';
    counter.style.display = showNav ? '' : 'none';
    if (showNav) counter.textContent = `${currentIndex + 1} / ${currentGroup.length}`;
  };

  const open = (group, index) => {
    currentGroup = group;
    currentIndex = index;
    render();
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % currentGroup.length;
    render();
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
    render();
  };

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) close();
  });
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  document.addEventListener('keydown', (event) => {
    if (!overlay.classList.contains('is-open')) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowRight') showNext();
    if (event.key === 'ArrowLeft') showPrev();
  });

  // Group triggers by data-lightbox-group so each "post" pages
  // through only its own photos.
  const groups = {};
  triggers.forEach((el) => {
    const groupId = el.dataset.lightboxGroup;
    if (!groups[groupId]) groups[groupId] = [];
    groups[groupId].push(el);
  });

  triggers.forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      const groupId = el.dataset.lightboxGroup;
      const groupEls = groups[groupId];
      const index = groupEls.indexOf(el);
      const groupData = groupEls.map((groupEl) => {
        const nestedImg = groupEl.tagName === 'IMG' ? groupEl : groupEl.querySelector('img');
        return {
          src: groupEl.dataset.lightboxSrc || (nestedImg ? nestedImg.src : null),
          alt: groupEl.dataset.lightboxAlt || (nestedImg ? nestedImg.alt : '') || '',
          placeholder: groupEl.dataset.lightboxPlaceholder || null,
        };
      });
      open(groupData, index);
    });
  });
}

document.querySelectorAll(".hero-button-copy").forEach((button) => {
  button.addEventListener("click", async () => {
    const email = button.dataset.copyEmail;

    try {
      await navigator.clipboard.writeText(email);

      button.classList.add("is-copied");
      button.setAttribute("aria-label", "Email address copied");

      setTimeout(() => {
        button.classList.remove("is-copied");
        button.setAttribute("aria-label", "Copy email address");
      }, 2000);
    } catch (error) {
      console.error("Unable to copy email:", error);
    }
  });
});

function initThemeToggle() {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  const label = toggle.querySelector('.theme-label');
  const root = document.documentElement;

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    if (label) label.textContent = theme === 'dark' ? 'Dark' : 'Light';

    document.querySelectorAll('.logo-img').forEach((img) => {
      const src = theme === 'dark' ? img.dataset.darkSrc : img.dataset.lightSrc;
      if (src) img.src = src;
    });
  };

  // Restore saved preference (falls back to light)
  const saved = localStorage.getItem('mlm-theme');
  applyTheme(saved === 'dark' ? 'dark' : 'light');

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('mlm-theme', next);
  });
}

/* =========================================================
   CREATIONS CATEGORY FILTERS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".creation-filter");
  const creationItems = document.querySelectorAll(".creation-item");

  // Stop if this page has no creation filters or items
  if (!filterButtons.length || !creationItems.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;

      // Update the active filter button
      filterButtons.forEach((filterButton) => {
        const isActive = filterButton === button;

        filterButton.classList.toggle("active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });

      // Show or hide creation items
      creationItems.forEach((item) => {
        const category = item.dataset.category;
        const shouldShow =
          selectedFilter === "all" || category === selectedFilter;

        item.classList.toggle("is-filtered-out", !shouldShow);
      });
    });
  });
});