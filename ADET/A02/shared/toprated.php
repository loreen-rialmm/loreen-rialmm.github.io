<h2 class="topratedTitle">Top Rated Films & Shows</h2>
<div id="topRatedContainer">
  <div class="top-rated-card" id="card1"></div>
  <div class="top-rated-card" id="card2"></div>
  <div class="top-rated-card" id="card3"></div>
  <div class="top-rated-card" id="card4"></div>
  <div class="top-rated-card" id="card5"></div>
  <div class="top-rated-card" id="card6"></div>
  <div class="top-rated-card" id="card7"></div>
  <div class="top-rated-card" id="card8"></div>
  <div class="top-rated-card" id="card9"></div>
  <div class="top-rated-card" id="card10"></div>
</div>

<script>
  const topRated = [
    { title: 'Breaking Bad', rating: 9.5, image: 'topRated1.png' },
    { title: 'The Shawshank Redemption', rating: 9.3, image: 'topRated2.png' },
    { title: 'The Wire', rating: 9.3, image: 'topRated3.png' },
    { title: 'The Godfather', rating: 9.2, image: 'topRated4.png' },
    { title: 'Fullmetal Alchemist: Brotherhood', rating: 9.1, image: 'topRated5.png' },
    { title: 'The Dark Knight', rating: 9.0, image: 'topRated6.png' },
    { title: 'Attack on Titan', rating: 9.0, image: 'topRated7.png' },
    { title: 'The Lord of the Rings: The Return of the King', rating: 8.9, image: 'topRated8.png' },
    { title: 'Spirited Away', rating: 8.6, image: 'topRated9.png' },
    { title: 'Your Name', rating: 8.4, image: 'topRated10.png' }
  ];

  topRated.forEach((item, index) => {
    const card = document.getElementById("card" + (index + 1));
    if (card) {
      card.innerHTML =
        "<div class='top-rated-number'>" + String(index + 1).padStart(2, '0') + "</div>" +
        "<div class='cardRated h-100 d-flex flex-row'>" +
        "<img src='./img/" + item.image + "' style='width: 150px; object-fit: cover;' alt='" + item.title + "'>" +
        "<div class='card-body'>" +
        "<h5 class='card-title'>" + item.title + "</h5>" +
        "<p><strong>IMDb Rating:</strong> " + item.rating + "</p>" +
        "</div>" +
        "</div>";
    }
  });
</script>