<h2 class="moviesTitle">MOVIES</h2>

<div class="container py-5">
    <div class="row g-4" id="movieContainer"></div>
</div>

<script>
    const movies = [
        {
            title: "La La Land",
            genre: "Musical/Romance",
            synopsis: "In Los Angeles, a jazz pianist and an aspiring actress fall in love while pursuing their dreams, facing challenges that test their relationship and ambitions.",
            picture: "movie1.png"
        },
        {
            title: "Everything Everywhere All at Once",
            genre: "Science Fiction/Action",
            synopsis: "An aging Chinese immigrant is swept into an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
            picture: "movie2.png"
        },
        {
            title: "Pulp Fiction",
            genre: "Crime/Drama",
            synopsis: "Directed by Quentin Tarantino, this film intertwines multiple stories of criminal Los Angeles, featuring memorable characters and sharp dialogue.",
            picture: "movie3.png"
        },
        {
            title: "The Godfather",
            genre: "Drama",
            synopsis: "This classic crime saga follows the powerful Corleone family as they navigate the treacherous world of organized crime in post-war America.",
            picture: "movie4.png"
        }
    ];

    var htmlContent = "";

    for (var i = 0; i < movies.length; i++) {
        htmlContent += 
            '<div class="col-12 col-sm-6 col-md-4">' +
                '<div class="card shadow-sm position-relative movieCard">' +
                    '<img src="./img/' + movies[i].picture + '" class="card-img-top" alt="' + movies[i].title + '">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + movies[i].title + '</h5>' +
                        '<p class="card-text"><strong>Genre:</strong> ' + movies[i].genre + '</p>' +
                    '</div>' +
                    '<div class="synopsis-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center text-white p-3">' +
                        '<p class="text-center">' + movies[i].synopsis + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>';
    }

    document.getElementById("movieContainer").innerHTML = htmlContent;
</script>
