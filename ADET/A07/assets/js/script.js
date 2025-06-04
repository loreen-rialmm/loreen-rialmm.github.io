function loadData(section) {
  const sections = ['home', 'selector', 'about'];

  // Hide all sections first
  sections.forEach(sec => {
    const element = document.getElementById(`${sec}-section`);
    if (element) element.style.display = 'none';
  });

  // Show the selected section
  const target = document.getElementById(`${section}-section`);
  if (target) {
    target.style.display = 'block';
    // Scroll into view
    target.scrollIntoView({ behavior: 'smooth' });
  }
}