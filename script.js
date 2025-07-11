var navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.forEach(function(nav) {
        nav.classList.remove('active');
        });
        this.classList.add('active');
    });
});

var skills = [
  {
    category: "Programming Languages & Database",
    logos: [
      { src: "images/phpLogo.png", alt: "PHP Logo" },
      { src: "images/javaLogo.png", alt: "Java Logo" },
      { src: "images/cLogo.png", alt: "C Logo" },
      { src: "images/c++Logo.png", alt: "C++ Logo" },
      { src: "images/pythonLogo.png", alt: "Python Logo" },
      { src: "images/sqlLogo.png", alt: "SQL Logo" }
    ]
  },
  {
    category: "Web Development Technologies",
    logos: [
      { src: "images/htmlLogo.png", alt: "HTML Logo" },
      { src: "images/cssLogo.png", alt: "CSS Logo" },
      { src: "images/javascriptLogo.png", alt: "JavaScript Logo" },
      { src: "images/gitLogo.png", alt: "Git Logo" }
    ]
  },
  {
    category: "Design Tools",
    logos: [
      { src: "images/figmaLogo.png", alt: "Figma Logo" },
      { src: "images/photoshopLogo.png", alt: "Photoshop Logo" },
      { src: "images/canvaLogo.png", alt: "Canva Logo" },
      { src: "images/ibispaintLogo.png", alt: "IbisPaint Logo" }
    ]
  }
];

var skillsContainer = document.getElementById("skills");

skillsContainer.innerHTML += 
  "<div class=\"row justify-content-center\">" +
    "<div class=\"col-12 col-lg-10\">" +
      "<div class=\"card shadow rounded-4 overflow-hidden\" data-aos=\"fade-up\" data-aos-delay=\"400\">" +
        "<div class=\"text-white px-4 py-2 fw-bold\" style=\"background-color: var(--primaryColor);\">my skills</div>" +
        "<hr class=\"my-0\" />" +
        "<div class=\"card-body\">" +
          "<div class=\"heading text-center fw-bold mb-4\" data-aos=\"fade-up\" data-aos-delay=\"200\">Creative & Technical Expertise</div>" +
        "</div>" +
      "</div>" +
    "</div>" +
  "</div>";

var cardBody = skillsContainer.querySelector(".card-body");

skills.forEach(function(skillSet, index) {
  cardBody.innerHTML += 
    "<div class=\"categoryContainer mb-5\" data-aos=\"fade-up\" data-aos-delay=\"300\">" +
      "<div class=\"subheading text-center fw-bold mb-3\">" + skillSet.category + "</div>" +
      "<div class=\"row justify-content-center text-center\">" +
        skillSet.logos.map(function(logo) {
          return "<div class=\"col-6 col-md-3 mb-4\">" +
                   "<img src=\"" + logo.src + "\" alt=\"" + logo.alt + "\" class=\"skill-logo\"/>" +
                 "</div>";
        }).join("") +
      "</div>" +
    "</div>";
});

cardBody.innerHTML += 
  "<div class=\"text-center my-4\">" +
    "<a href=\"#projects\" class=\"btn-secondary\" data-aos=\"fade-up\" data-aos-delay=\"300\">See Projects</a>" +
  "</div>";