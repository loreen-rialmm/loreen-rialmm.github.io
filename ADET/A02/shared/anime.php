<h2 class="animeTitle">Anime</h2>
<p class="animeContext">Anime is a style of animation that originated in Japan, known for its colorful visuals, diverse genres, and often deep storytelling.</p>
<div class="text-center mb-4">
  <button onclick="filterImages('all')">All</button>
  <button onclick="filterImages('sports')">Sports</button>
  <button onclick="filterImages('isekai')">Isekai</button>
  <button onclick="filterImages('comedy')">Comedy</button>
  <button onclick="filterImages('school')">School Life</button>
  <button onclick="filterImages('fantasy')">Fantasy</button>
</div>

<!-- Anime Cards Container -->
<div class="row row-cols-1 row-cols-md-1 g-4" id="animeContainer"></div>

<script>
  var animes = [
    {
      title: "Diamond no Ace (Ace of Diamond)",
      genre: "sports",
      episodes: "178",
      synopsis: "Eijun Sawamura, a talented pitcher with an unconventional style...",
      picture: "anime1.png"
    },
    {
      title: "Classroom of the Elite",
      genre: "school",
      episodes: "38",
      synopsis: "Kiyotaka Ayanokōji enrolls in the prestigious Tokyo Metropolitan...",
      picture: "anime2.png"
    },
    {
      title: "That Time I Got Reincarnated as a Slime",
      genre: "isekai",
      episodes: "48",
      synopsis: "Satoru Mikami, a 37-year-old office worker, is killed and reincarnated...",
      picture: "anime3.png"
    },
    {
      title: "Little Witch Academia",
      genre: "fantasy",
      episodes: "25",
      synopsis: "Atsuko 'Akko' Kagari enrolls in Luna Nova Magical Academy...",
      picture: "anime4.png"
    },
    {
      title: "Haikyuu!!",
      genre: "sports",
      episodes: "85",
      synopsis: "Shōyō Hinata, inspired by a legendary volleyball player...",
      picture: "anime5.png"
    },
    {
      title: "Nichijou (My Ordinary Life)",
      genre: "comedy",
      episodes: "26",
      synopsis: "A surreal comedy that follows the everyday lives of three high school girls...",
      picture: "anime6.png"
    },
    {
      title: "Days",
      genre: "sports",
      episodes: "24",
      synopsis: "Tsukushi Tsukamoto, a shy and clumsy teenager...",
      picture: "anime7.png"
    },
    {
      title: "Campfire Cooking in Another World with My Absurd Skill",
      genre: "isekai",
      episodes: "12",
      synopsis: "Tsuyoshi Mukouda is transported to a fantasy world...",
      picture: "anime8.png"
    },
    {
      title: "Asobi Asobase",
      genre: "comedy",
      episodes: "12",
      synopsis: "Three middle school girls—Olivia, Hanako, and Kasumi...",
      picture: "anime9.png"
    }
  ];

  var container = document.getElementById("animeContainer");
  var output = "";

  for (var i = 0; i < animes.length; i++) {
    var anime = animes[i];
    output +=
      "<div class='col image " + anime.genre + " show'>" +
        "<div class='card h-100 d-flex flex-row'>" +
          "<img src='./img/" + anime.picture + "' class='img-fluid imageAnime' alt='" + anime.title + "'>" +
          "<div class='card-body'>" +
            "<h5 class='card-title'>" + anime.title + "</h5>" +
            "<p><strong>Episodes:</strong> " + anime.episodes + "</p>" +
            "<p><strong>Genre:</strong> " + anime.genre.charAt(0).toUpperCase() + anime.genre.slice(1) + "</p>" +
            "<p class='card-text'>" + anime.synopsis + "</p>" +
          "</div>" +
        "</div>" +
      "</div>";
  }

  container.innerHTML = output;

  function filterImages(category) {
    var images = document.querySelectorAll('.image');

    images.forEach(function(image) {
      if (category === 'all') {
        image.classList.add('show');
      } else {
        if (image.classList.contains(category)) {
          image.classList.add('show');
        } else {
          image.classList.remove('show');
        }
      }
    });
  }
</script>