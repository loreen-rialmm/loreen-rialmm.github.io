//Navbar JS Functions
var navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); 
    navLinks.forEach(function(nav) {
      nav.classList.remove('active');
    });
    this.classList.add('active');

    // Smooth scroll to target section
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

//Skills JS Functions
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

var grid = document.querySelector(".skills-grid");

skills.forEach(function(s) {
  var tile = 
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

  grid.innerHTML += tile;
});

//Feauture Video JS Functions
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.modal').forEach(function (modal) {
    modal.addEventListener('hidden.bs.modal', function () {
      var video = modal.querySelector('video');
      if (video) {
        video.pause();
        video.currentTime = 0;
      }

      // Remove lingering focus before Bootstrap hides modal
      if (document.activeElement && modal.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Handle all feature preview videos (hover play/pause)
  document.querySelectorAll('.feature-preview-video').forEach(function(video) {
    video.addEventListener('mouseenter', function() { video.play(); });
    video.addEventListener('mouseleave', function() { video.pause(); });
  });

  // Handle all modals dynamically
  document.querySelectorAll('.modal').forEach(function(modal) {
    // When modal is about to hide
    modal.addEventListener('hide.bs.modal', function () {
      // Pause & reset video inside
      const video = modal.querySelector('video');
      if (video) {
        video.pause();
        video.currentTime = 0;
      }

      // Blur any focused element inside modal to prevent aria-hidden warning
      if (document.activeElement && modal.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    });

    // When modal is shown
    modal.addEventListener('shown.bs.modal', function () {
      const video = modal.querySelector('video');
      if (video) video.play();
    });
  });
});

//Scroll to Top Button JS Function
const scrollBtn = document.getElementById('scrollToTopBtn');

// Show/hide button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // show after 300px scroll
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

// Scroll smoothly to top when clicked
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});