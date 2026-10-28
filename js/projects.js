/* =========================================================
   PROJECT / CASE-STUDY PAGE BEHAVIOR
   -----------------------------------------------------------
   Shared behavior for the individual case-study pages in
   /projects (xtore, xchange, vault, website, tastebuds,
   gymboost). Site-wide behavior (nav, theme toggle, scroll
   reveal, lightbox, etc.) stays in js/script.js and is loaded
   on these pages too — this file only adds what's specific to
   moving between case studies.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initCaseStudyKeyboardNav();
  initCaseNav();
});

/* ---------------------------------------------------------
   Arrow-key navigation between case studies.
   Each case-study page marks its "Previous"/"Next" links with
   rel="prev" / rel="next". Left/Right arrow keys jump between
   them, mirroring the on-page Previous/Next buttons, as long
   as focus isn't inside a form control or the lightbox.
   --------------------------------------------------------- */
function initCaseStudyKeyboardNav() {
  const prevLink = document.querySelector('a[rel="prev"]');
  const nextLink = document.querySelector('a[rel="next"]');
  if (!prevLink && !nextLink) return;

  document.addEventListener('keydown', (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

    const target = event.target;
    const isFormField =
      target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
    if (isFormField) return;

    const lightboxOpen = document.querySelector('.lightbox-overlay.is-open');
    if (lightboxOpen) return;

    if (event.key === 'ArrowLeft' && prevLink) {
      window.location.href = prevLink.href;
    } else if (event.key === 'ArrowRight' && nextLink) {
      window.location.href = nextLink.href;
    }
  });
}

/* ---------------------------------------------------------
   Sticky case-study section nav ("second navbar").
   -----------------------------------------------------------
   Renders directly beneath the main site header (see the
   `.case-nav` markup each case-study page defines) and lets
   someone jump straight to a section — Overview, Challenge,
   Process, etc — without scrolling. The section labels and
   target ids differ per page, so this reads them straight from
   whatever `.case-nav-link`s are already on the page rather
   than hardcoding a section list here.
   --------------------------------------------------------- */
function initCaseNav() {
  const caseNav = document.querySelector('.case-nav');
  if (!caseNav) return;

  const scrollTrack = caseNav.querySelector('.case-nav-scroll');
  const header = document.querySelector('.site-header');
  const root = document.documentElement;

  const links = Array.from(caseNav.querySelectorAll('.case-nav-link'));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if (sections.length === 0) return;

  // Keep the header/case-nav heights (and the anchor-scroll offset
  // that depends on them) in sync with what's actually rendered, so
  // the two sticky bars never overlap a section heading and a
  // clicked link never lands underneath either of them — regardless
  // of viewport width, font-loading reflow, or text wrapping.
  const syncOffsets = () => {
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const caseNavHeight = caseNav.getBoundingClientRect().height;
    root.style.setProperty('--header-height', `${headerHeight}px`);
    root.style.setProperty('--case-nav-height', `${caseNavHeight}px`);
    // Overrides the site-wide scroll-padding-top (sized for the single
    // header on index.html) with this page's two-bar offset, so both
    // fragment links and .scrollIntoView() land in the right place.
    root.style.scrollPaddingTop = `${headerHeight + caseNavHeight + 16}px`;
  };

  syncOffsets();
  window.addEventListener('resize', syncOffsets);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncOffsets);
  }

  // Highlight whichever section is currently sitting just below the
  // sticky bars, and keep that link scrolled into view within the
  // nav strip itself (it scrolls horizontally on narrow screens).
  let ticking = false;
  
  const setActiveLink = () => {
    const headerHeight = header
      ? header.getBoundingClientRect().height
      : 0;

    const caseNavHeight = caseNav.getBoundingClientRect().height;

    // Match the active-section trigger to the space below both navbars.
    const triggerLine = headerHeight + caseNavHeight + 24;

    let activeIndex = 0;

    sections.forEach((section, i) => {
      if (section.getBoundingClientRect().top <= triggerLine) {
        activeIndex = i;
      }
    });

    links.forEach((link, i) => {
      link.classList.toggle('is-active', i === activeIndex);
    });

    const activeLink = links[activeIndex];

    if (scrollTrack && activeLink) {
      const trackRect = scrollTrack.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      const isClipped =
        linkRect.left < trackRect.left ||
        linkRect.right > trackRect.right;

      if (isClipped) {
        activeLink.scrollIntoView({
          inline: 'center',
          block: 'nearest',
          behavior: 'smooth'
        });
      }
    }

    ticking = false;
  };


  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(setActiveLink);
      ticking = true;
    }
  };

  setActiveLink();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
}

document.addEventListener("DOMContentLoaded", () => {
  const images = [...document.querySelectorAll("img.lightbox-image")];

  if (!images.length) return;

  // Create the lightbox once
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Image gallery");

  overlay.innerHTML = `
    <button class="lightbox-close" type="button"
      aria-label="Close image gallery">&times;</button>

    <button class="lightbox-nav-btn lightbox-prev" type="button"
      aria-label="Previous image">&#8249;</button>

    <div class="lightbox-image-stage">
      <img src="" alt="">
    </div>

    <button class="lightbox-nav-btn lightbox-next" type="button"
      aria-label="Next image">&#8250;</button>

    <div class="lightbox-counter" aria-live="polite"></div>
  `;

  document.body.appendChild(overlay);

  const preview = overlay.querySelector(".lightbox-image-stage img");
  const counter = overlay.querySelector(".lightbox-counter");
  const closeButton = overlay.querySelector(".lightbox-close");
  const prevButton = overlay.querySelector(".lightbox-prev");
  const nextButton = overlay.querySelector(".lightbox-next");

  let currentIndex = 0;
  let previousFocus = null;

  function showImage(index) {
    currentIndex = (index + images.length) % images.length;

    const selected = images[currentIndex];

    preview.src = selected.currentSrc || selected.src;
    preview.alt = selected.alt || "Enlarged design screenshot";

    counter.textContent = `${currentIndex + 1} / ${images.length}`;

    prevButton.hidden = images.length < 2;
    nextButton.hidden = images.length < 2;
  }

  function openLightbox(index) {
    previousFocus = document.activeElement;

    showImage(index);
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";

    closeButton.focus();
  }

  function closeLightbox() {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";

    preview.removeAttribute("src");

    if (previousFocus) previousFocus.focus();
  }

  function showPrevious() {
    showImage(currentIndex - 1);
  }

  function showNext() {
    showImage(currentIndex + 1);
  }

  images.forEach((image, index) => {
    image.addEventListener("click", () => openLightbox(index));

    image.setAttribute("tabindex", "0");
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `Enlarge image: ${image.alt}`);

    image.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(index);
      }
    });
  });

  prevButton.addEventListener("click", showPrevious);
  nextButton.addEventListener("click", showNext);
  closeButton.addEventListener("click", closeLightbox);

  overlay.addEventListener("click", event => {
    if (event.target === overlay) closeLightbox();
  });

  document.addEventListener("keydown", event => {
    if (!overlay.classList.contains("is-open")) return;

    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showPrevious();
    if (event.key === "ArrowRight") showNext();
  });
});

/* =========================================================
   GAME VIDEO PREVIEWS AND FULL VIDEO MODAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  const previewVideos = document.querySelectorAll(
    ".game-card-media .game-preview-video"
  );

  const gameModal = document.querySelector("#game-video-modal");

  /* =========================================================
     VIDEO PREVIEWS
     Resume from where the video was paused on hover.
     ========================================================= */

  // Original browser behavior for currentTime, used by the blocker below.
  const nativeTime = Object.getOwnPropertyDescriptor(
    HTMLMediaElement.prototype,
    "currentTime"
  );

  previewVideos.forEach(function (video) {
    if (video.dataset.previewReady === "true") return;
    video.dataset.previewReady = "true";

    const media = video.closest(".game-card-media");
    if (!media) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "auto";

    // Block outside scripts from resetting this video.
    // The console warning shows the file and line that tried.
    Object.defineProperty(video, "currentTime", {
      get: function () {
        return nativeTime.get.call(video);
      },
      set: function (value) {
        console.warn("Blocked outside currentTime change to", value);
        console.trace();
      }
    });

    video.load = function () {
      console.warn("Blocked outside video.load() call");
      console.trace();
    };

    // Image that shows the last visible frame while the video is paused.
    const frame = document.createElement("img");
    frame.className = "game-preview-frame";
    frame.alt = "";
    frame.hidden = true;
    frame.setAttribute("aria-hidden", "true");

    media.insertBefore(frame, video.nextSibling);

    function captureFrame() {
      if (!video.videoWidth || !video.videoHeight) return;

      try {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const context = canvas.getContext("2d");
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        frame.src = canvas.toDataURL("image/jpeg", 0.85);
        frame.hidden = false;
      } catch (error) {
        console.warn("Could not capture preview frame:", error);
      }
    }

    // Capture the first frame when the video is ready.
    video.addEventListener(
      "loadeddata",
      function () {
        if (!frame.src) captureFrame();
      },
      { once: true }
    );

    if (video.readyState >= 2) {
      captureFrame();
    }

    // Hover: hide the saved frame and resume playing.
    media.addEventListener("mouseenter", function () {
      frame.hidden = true;

      video.play().catch(function (error) {
        console.warn("Preview playback failed:", error);
      });
    });

    // Mouse leaves: pause and save the current frame.
    media.addEventListener("mouseleave", function () {
      video.pause();

      requestAnimationFrame(function () {
        captureFrame();
      });
    });
  });

  /* =========================================================
     FULL VIDEO MODAL
     ========================================================= */

  if (!gameModal) return;

  const modalVideo = gameModal.querySelector("video");
  const closeButton = gameModal.querySelector(".game-video-close");
  const backdrop = gameModal.querySelector(".game-video-modal-backdrop");

  if (!modalVideo || !closeButton || !backdrop) return;

  let previouslyFocusedElement = null;

  document.querySelectorAll(".game-card-media").forEach(function (media) {
    const previewVideo = media.querySelector(".game-preview-video");
    const openButton = media.querySelector(".game-video-overlay");

    if (!previewVideo || !openButton) return;

    if (openButton.dataset.modalReady === "true") return;
    openButton.dataset.modalReady = "true";

    openButton.addEventListener("click", function () {
      const source = previewVideo.querySelector("source");
      if (!source) return;

      previouslyFocusedElement = openButton;

      // Pause the preview without resetting its playback position.
      previewVideo.pause();

      // Play the same video file in the separate modal player.
      modalVideo.src = source.src;
      gameModal.hidden = false;
      document.body.style.overflow = "hidden";

      modalVideo.load();

      modalVideo.play().catch(function () {
        // The user can start playback with the video controls.
      });

      closeButton.focus();
    });
  });

  /* =========================================================
     CLOSE MODAL
     ========================================================= */

  function closeGameModal() {
    if (gameModal.hidden) return;

    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalVideo.load();

    gameModal.hidden = true;
    document.body.style.overflow = "";

    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
      previouslyFocusedElement = null;
    }
  }

  closeButton.addEventListener("click", closeGameModal);
  backdrop.addEventListener("click", closeGameModal);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !gameModal.hidden) {
      closeGameModal();
    }
  });
});