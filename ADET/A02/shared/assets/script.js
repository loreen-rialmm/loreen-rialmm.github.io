const shows = [
  {
      title: "Money Heist (La Casa de Papel)",
      genre: "Crime, Drama, Thriller",
      synopsis: "A mysterious mastermind known as The Professor recruits a group of eight skilled criminals to carry out an ambitious plan to rob the Royal Mint of Spain. As the heist unfolds, tensions rise, and emotional and moral boundaries are tested.",
      picture: "tvshow1.jpg"
  },
  {
      title: "Yellowjackets",
      genre: "Psychological Thriller, Drama, Mystery",
      synopsis: "A high school girls’ soccer team survives a plane crash deep in the wilderness. What starts as a fight for survival turns into something much darker. Years later, the past comes back to haunt the now-adult survivors.",
      picture: "tvshow2.png"
  },
  {
      title: "Modern Family",
      genre: "Comedy, Sitcom",
      synopsis: "A mockumentary-style sitcom that follows the hilarious and heartwarming lives of three diverse families as they navigate parenthood, relationships, and everyday chaos, all while redefining what it means to be a modern family.",
      picture: "tvshow3.png"
  },
  {
      title: "The Big Bang Theory",
      genre: "Comedy, Sitcom",
      synopsis: "Two socially awkward physicists, Leonard and Sheldon, have their world turned upside down when the outgoing Penny moves in next door. The show explores geek culture, friendship, love, and the challenges of social interaction.",
      picture: "tvshow4.jpg"
  },
  {
      title: "House of the Dragon",
      genre: "Fantasy, Drama, Action",
      synopsis: "Set 200 years before Game of Thrones, this epic prequel tells the story of House Targaryen’s rise and eventual downfall, centering on internal conflicts, political games, and the looming threat of civil war over the Iron Throne.",
      picture: "tvshow5.jpg"
  },
  {
      title: "Grey's Anatomy",
      genre: "Medical Drama, Romance",
      synopsis: "Set in the fictional Grey Sloan Memorial Hospital, this long-running series follows the personal and professional lives of surgical interns, residents, and attending doctors. At its center is Meredith Grey, whose journey through heartbreak, high-stakes surgeries, and life-or-death decisions drives the emotional core of the show.",
      picture: "tvshow6.png"
  },
  {
      title: "Only Murders in the Building",
      genre: "Comedy, Mystery, Crime",
      synopsis: "Three true-crime-obsessed neighbors team up to solve a murder in their apartment building—while recording a podcast about it. As secrets unravel, the line between fan and investigator begins to blur.",
      picture: "tvshow7.jpg"
  }
];

var html = "";

for (var i = 0; i < shows.length; i++) {
  html += 
      "<div class='col-12 col-sm-12 col-md-12 tvContainer mb-4'>" +
          "<div class='card h-100 shadow-sm'>" +
              "<img src='./img/" + shows[i].picture + "' class='card-img-top tvshowImg' alt='" + shows[i].title + "'>" +
              "<div class='card-body'>" +
                  "<h5 class='card-title'>" + shows[i].title + "</h5>" +
                  "<p class='card-text'><strong>Genre:</strong> " + shows[i].genre + "</p>" +
                  "<p class='card-text'>" + shows[i].synopsis + "</p>" +
              "</div>" +
          "</div>" +
      "</div>";
}

document.getElementById("tvShowContainer").innerHTML = html;

function filterImages(category) {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        if (category === 'all') {
            image.classList.add('show');  // Show all images
        } else {
            if (image.classList.contains(category)) {
                image.classList.add('show');  // Show images that match the category
            } else {
                image.classList.remove('show');  // Hide images that do not match
            }
        }
    });
}


  

