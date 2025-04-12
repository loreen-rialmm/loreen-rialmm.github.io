<?php
include("connect.php");

$page = "tvshows";

if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case "tvshows":
            $page = "tvshows";
            break;
        case "movies":
            $page = "movies";
            break;
        case "anime":
            $page = "anime";
            break;
        case "toprated":
            $page = "toprated";
            break;
        case "funfacts":
            $page = "funfacts";
            break;
        case "about":
            $page = "about";
            break;
        default:
            header("Location: ?page=tvshows");
            break;
    }
} else {
    header("Location: ?page=tvshows");
}

?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SceneScape</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">

    <link rel="stylesheet" href="shared/assets/styles.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Asset&family=Asul:wght@400;700&family=BIZ+UDPMincho&family=Chango&family=Climate+Crisis&family=Goblin+One&family=Goldman:wght@400;700&family=Livvic:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=Manrope:wght@200..800&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Quicksand:wght@300..700&family=Rammetto+One&family=Red+Rose:wght@300..700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik+Mono+One&family=Rubik:ital,wght@0,300..900;1,300..900&family=Slabo+27px&family=Space+Grotesk:wght@300..700&display=swap"
        rel="stylesheet">
</head>

<body>
    <nav class="navbar custom-navbar">
        <p class="navbar-brand">SceneScape</p>
    </nav>

    <div class="container-fluid mt-3">
        <div class="row">

            <div class="col-1 col-sm-1 col-md-2 col-lg-3">
                <div class="card shadow rounded-5 p-3 firstContainer" style="height: 85vh">
                    <a href="?page=tvshows" class="btn btn-transparent my-1 <?php if ($page == 'tvshows')
                        echo 'active'; ?>">
                        Tv Shows
                    </a>
                    <a href="?page=movies" class="btn btn-transparent my-1 <?php if ($page == 'movies')
                        echo 'active'; ?>">
                        Movies
                    </a>
                    <a href="?page=anime" class="btn btn-transparent my-1 <?php if ($page == 'anime')
                        echo 'active'; ?>">
                        Anime
                    </a>
                    <a href="?page=toprated" class="btn btn-transparent my-1 <?php if ($page == 'toprated')
                        echo 'active'; ?>">
                        Top Rated
                    </a>
                    <a href="?page=funfacts" class="btn btn-transparent my-1 <?php if ($page == 'funfacts')
                        echo 'active'; ?>">
                        Fun Facts
                    </a>
                    <a href="?page=about" class="btn btn-transparent my-1 <?php if ($page == 'about')
                        echo 'active'; ?>">
                        About
                    </a>
                </div>
            </div>
            <div class="col-10 col-sm-10 col-md-8 col-lg-6">
                <div class="card shadow rounded-5 p-4 secondContainer"
                    style="height: 85vh; max-height: 85vh; overflow-y: auto; overflow-x: hidden;">

                    <?php include("shared/" . $page . ".php"); ?>

                </div>
            </div>

            <div class="col-1 col-sm-1 col-md-2 col-lg-3">
                <div class="card shadow rounded-5 thirdContainer"
                    style="height: 85vh; max-height: 85vh; overflow-y: auto; overflow-x: hidden;">
                    <h4 class="creatorTitle">Creator's Pick</h4>
                    <!-- The White Lotus -->
                    <div class="col-12 mb-4">
                        <div class="showCard d-flex align-items-center">
                            <div class="showImg">
                                <img src="./img/creatorPick1.jpg" alt="The White Lotus">
                            </div>
                            <div class="showInfo ms-3">
                                <h4>The White Lotus</h4>
                                <p class="showInfo"><strong>Category:</strong> TV Show</p>
                            </div>
                        </div>
                    </div>

                    <!-- Frieren -->
                    <div class="col-12 mb-4">
                        <div class="showCard">
                            <div class="showImg">
                                <img src="./img/creatorPick2.jpg" alt="Frieren">
                            </div>
                            <div class="showInfo">
                                <h4>Frieren: Beyond Journey's End</h4>
                                <p class="showInfo"><strong>Category:</strong> Anime</p>
                            </div>
                        </div>
                    </div>

                    <!-- Abbott Elementary -->
                    <div class="col-12 mb-4">
                        <div class="showCard">
                            <div class="showImg">
                                <img src="./img/creatorPick3.jpg" alt="Abbott Elementary">
                            </div>
                            <div class="showInfo">
                                <h4>Abbott Elementary</h4>
                                <p class="showInfo"><strong>Category:</strong> TV Show</p>
                            </div>
                        </div>
                    </div>

                    <!-- Challengers -->
                    <div class="col-12 mb-4">
                        <div class="showCard">
                            <div class="showImg">
                                <img src="./img/creatorPick4.jpg" alt="Challengers">
                            </div>
                            <div class="showInfo">
                                <h4>Challengers</h4>
                                <p class="showInfo"><strong>Category:</strong> Movie</p>
                            </div>
                        </div>
                    </div>

                    <!-- Delicious in Dungeon -->
                    <div class="col-12 mb-4">
                        <div class="showCard">
                            <div class="showImg">
                                <img src="./img/creatorPick5.jpg" alt="Delicious in Dungeon">
                            </div>
                            <div class="showInfo">
                                <h4>Delicious in Dungeon</h4>
                                <p class="showInfo"><strong>Category:</strong> Anime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
        crossorigin="anonymous"></script>

    <script src="./shared/assets/script.js"></script>
</body>

</html>