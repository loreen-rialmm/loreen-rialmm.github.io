document.addEventListener('DOMContentLoaded', function() {
  // --- Populate Skills Grid ---
  var grid = document.querySelector(".skills-grid");
  if (grid) {
    var skills = [
      { name: "PHP", logo: "images/phpLogo.png", category: "Programming", desc: "Server-side scripting for web apps." },
      { name: "Java", logo: "images/javaLogo.png", category: "Programming", desc: "Object-oriented development & backend." },
      { name: "C", logo: "images/cLogo.png", category: "Programming", desc: "Fundamental systems programming." },
      { name: "C++", logo: "images/c++Logo.png", category: "Programming", desc: "Efficient and performance-focused code." },
      { name: "Python", logo: "images/pythonLogo.png", category: "Programming", desc: "Automation, scripting, and data tasks." },
      { name: "SQL", logo: "images/sqlLogo.png", category: "Database", desc: "Database management and query design." },
      { name: "HTML", logo: "images/htmlLogo.png", category: "Web", desc: "Crafting structured and semantic markup." },
      { name: "CSS", logo: "images/cssLogo.png", category: "Web", desc: "Responsive and modern visual styling." },
      { name: "JavaScript", logo: "images/javascriptLogo.png", category: "Web", desc: "Interactive and dynamic web features." },
      { name: "Chart.js", logo: "images/chartjsLogo.png", category: "Web", desc: "Data visualization and chart integration." },
      { name: "Git", logo: "images/gitLogo.png", category: "Tools", desc: "Version control and collaboration." },
      { name: "Bootstrap", logo: "images/bootstrapLogo.png", category: "Framework", desc: "Building responsive layouts quickly." },
      { name: "Figma", logo: "images/figmaLogo.png", category: "Design", desc: "User interface and prototyping." },
      { name: "Photoshop", logo: "images/photoshopLogo.png", category: "Design", desc: "Creative image design and editing." },
      { name: "Canva", logo: "images/canvaLogo.png", category: "Design", desc: "Fast and flexible visual design tool." }
    ];

    var html = '';
    skills.forEach(function(s) {
      html += 
        '<div class="skill-tile">' +
          '<img src="' + s.logo + '" alt="' + s.name + '" class="skill-logo" loading="lazy" />' +
          '<div class="skill-overlay">' +
            '<div>' +
              '<div class="skill-title">' + s.name + '</div>' +
              '<div class="skill-desc">' + s.desc + '</div>' +
            '</div>' +
            '<div class="skill-badges">' +
              '<div class="badge-skill">' + s.category + '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
    });
    grid.innerHTML = html;
  }

  var navLinks = document.querySelectorAll('.navbar .nav-link');
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  var currentHash = window.location.hash.substring(1); // remove the #

  // --- Page load highlight ---
  navLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      if (!href) return;

      var [linkPage, linkHash] = href.split('#');
      if (!linkPage) linkPage = currentPath;

      // highlight About or sections like Skills/Projects
      if (linkPage === currentPath && (!linkHash || linkHash === currentHash)) {
          link.classList.add('active');
      }
  });


  // --- Click handler ---
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var href = link.getAttribute('href');
      var [linkPage, linkHash] = href.split('#');
      if (!linkPage) linkPage = currentPath;

      // Remove active from all
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      // Same page? smooth scroll
      if (linkPage === currentPath && linkHash) {
        e.preventDefault();
        var target = document.getElementById(linkHash);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Different page? let browser navigate, class will be set on load
    });
  });

  // --- Scroll To Top Button ---
  var scrollBtn = document.getElementById('scrollToTopBtn');
  if (scrollBtn) {
    function toggleScrollBtn() {
      if (window.scrollY > 300) scrollBtn.classList.add('show');
      else scrollBtn.classList.remove('show');
    }

    scrollBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', toggleScrollBtn);
    window.addEventListener('resize', toggleScrollBtn);
    toggleScrollBtn();
  }

  // --- Feature Hover Videos ---
  document.querySelectorAll('.feature-preview-video').forEach(function(video) {
    video.addEventListener('mouseenter', function(){ video.play(); });
    video.addEventListener('mouseleave', function(){ video.pause(); });
  });

  // --- Modal Videos ---
  document.querySelectorAll('.modal').forEach(function(modal) {
    modal.addEventListener('hide.bs.modal', function() {
      var video = modal.querySelector('video');
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      if (document.activeElement && modal.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    });
  });
});
