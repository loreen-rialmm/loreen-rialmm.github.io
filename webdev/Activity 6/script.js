var contentData = {
    tvShows: {
        names: ["Outer Banks", "Money Heist", "Stranger Things", "The 100", "Grey's Anatomy", "Criminal Minds", "Game of Thrones", "Teen Wolf"],
        pics: ["https://image.tmdb.org/t/p/original/qvEyo02cFEf6boAfKFtqD3HpWcc.jpg", "https://1.bp.blogspot.com/-U-09BNtwTdM/YK9AgiV9coI/AAAAAAAAFhs/MTdYY_JJJj4YjiafW0NJMIcpKdsknUdpACNcBGAsYHQ/s960/money%2Bheist.jpg", "https://static0.srcdn.com/wordpress/wp-content/uploads/2017/11/Stranger-Things-banner.jpg", "https://m.media-amazon.com/images/S/pv-target-images/d7872d8f250cb8782e69631f0de141559973efdf2b1d3aff751ac0c12543bddc.jpg",
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/12/Featured-Image-Greys-Anatomy-season-1.jpg", "https://img.moviesrankings.com/t/p/w1280/bXLjY90Nr8A8scLEGneb6nvshB.jpg", "https://townsquare.media/site/442/files/2015/04/got.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89", "https://getwallpapers.com/wallpaper/full/9/4/9/284093.jpg"],
        links: ["https://outer-banks-netflix.fandom.com/wiki/Outer_Banks", "https://money-heist.fandom.com/wiki/Money_Heist", "https://strangerthings.fandom.com/wiki/Stranger_Things", "https://the100.fandom.com/wiki/The_100",
            "https://greysanatomy.fandom.com/wiki/Grey%27s_Anatomy", "https://criminalminds.fandom.com/wiki/Criminal_Minds_Episodes", "https://gameofthrones.fandom.com/wiki/Game_of_Thrones", "https://teenwolf.fandom.com/wiki/Teen_Wolf_(TV_series)"]
    },
    kpop: {
        names: ["TWICE", "STRAY KIDS", "IZ*ONE", "ITZY", "LE SSERAFIM", "IVE", "AESPA", "NEW JEANS"],
        pics: ["https://pm1.narvii.com/7319/5ff263961f096e53d5cde8dabbcfb46ea23998b5r1-1920-1080v2_hq.jpg", "https://i.pinimg.com/originals/fe/4f/0d/fe4f0d1aca2c7500b57c8102a4014c8a.jpg", "https://i0.wp.com/danmee.jp/wp-content/uploads/2018/11/izone1102-3.png?fit=1121%2C724", "https://www.envimedia.co/wp-content/uploads/2022/02/itzy-evolution-thumbnail-2-scaled.jpg",
            "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2023/09/26191310/Untitled-design-2023-09-26T164214.300-1600x900.jpg", "https://images.prestigeonline.com/wp-content/uploads/sites/6/2023/11/09164025/ive-baddie-perfect-all-kill-1600x900.jpeg", "https://attach.setn.com/newsimages/2023/11/13/4404761-PH.jpg", "https://idolnewsonline.com/wp-content/uploads/2023/01/FlvU2xXWYAA6AnK_w.webp"],
        links: ["https://twice.fandom.com/wiki/TWICE", "https://stray-kids.fandom.com/wiki/Stray_Kids", "https://iz-one.fandom.com/wiki/IZ*ONE", "https://itzy.fandom.com/wiki/ITZY_Wiki",
            "https://le-sserafim.fandom.com/wiki/LE_SSERAFIM_Wiki", "https://ive.fandom.com/wiki/IVE", "https://aespa.fandom.com/wiki/Aespa", "https://newjeans.fandom.com/wiki/NewJeans_Wiki"]
    },
    anime: {
        names: ["Haikyu!!", "Jujutsu Kaisen", "Ace of the Diamond", "Blue Lock", "Spy x Family", "Mob Psycho 100", "Hunter x Hunter", "The Disastrous Life of Saiki K."],
        pics: ["https://wallpaperaccess.com/full/412223.jpg", "https://rare-gallery.com/thumbnail/397310-wallpaper-jujutsu-kaisen-anime-characters-4k-hd.jpg", "https://wallpaperaccess.com/full/1648580.jpg", "https://cdn.oneesports.id/cdn-data/sites/2/2022/01/BlueLock_AnimeKeyVisual.jpg",
            "https://fictionhorizon.com/wp-content/uploads/2022/04/Spy-X-Family-poster.jpg", "https://img1.ak.crunchyroll.com/i/spire3/95c5ebaec2de71c0cf7f701f5194b8dc1659873929_main.jpg", "https://cdn.oneesports.gg/cdn-data/2022/06/Anime_HunterxHunter_HunterExamArc.jpg", "https://freakelitex.com/wp-content/uploads/2017/07/The-Disastrous-Life-of-Saiki-K.-2n-season.jpg"],
        links: ["https://www.crunchyroll.com/haikyu", "https://www.crunchyroll.com/jujutsu-kaisen", "https://www.crunchyroll.com/series/GYX0MZ58R/ace-of-the-diamond", "https://www.crunchyroll.com/blue-lock",
            "https://www.crunchyroll.com/spy-x-family", "https://www.crunchyroll.com/mob-psycho-100", "https://www.crunchyroll.com/hunter-x-hunter", "https://www.crunchyroll.com/the-disastrous-life-of-saiki-k"]
    }
};

var display = "none";

function showContent(category) {
    var myContainer = document.getElementById("cardContainer");
    myContainer.innerHTML = "";
    var selectedContent = contentData[category];

    // Loop through the selected category's data and create cards
    for (var i = 0; i < selectedContent.names.length; i++) {
        var imgSrc = selectedContent.pics[i];
        var link = selectedContent.links[i];

        myContainer.innerHTML += `<div class="col-xl-3 col-md-4 col-sm-6 col-12"> 
        <div class="card my-3" id="c` + i + `" onmouseenter="addShadow('c` + i + `')" onmouseleave="removeShadow('c` + i + `')">
        <img src="` + imgSrc + `" class="card-img-top" style="width: 100%; height: 200px; object-fit: cover;">
        <div class="card-body">
        <h5 class="card-title">` + selectedContent.names[i] + `</h5>
        <p class="card-text">My passion for TV shows, K-pop, and Anime allows me to experience a wide range of emotions, ultimately leading me to a greater sense of happiness and joy in my life.</p>
        <a href="` + link + `" class="btn btn-primary" target="_blank">Learn More</a>
        </div>
        </div>
        </div>`;
    }

}

function expandContent() {
    var content = document.getElementById("expandableContent");
    var btnExpand = document.getElementById("btnExpand");
    var drawingContainer = document.getElementById("drawingContainer");

    // Toggle display between 'none' and 'block'
    if (display == "none") {
        content.style.display = "block";
        display = "block";
        btnExpand.innerHTML = "Close";

        drawingContainer.innerHTML = "";

        var drawingNames = ["Melting", "Daisy", "Snooze", "Heartless", "Bonfire", "Heather", "I Bet on Losing Dogs", "Bags"];
        var drawingPics = ["https://i.pinimg.com/736x/35/a5/3f/35a53fa43e83b8a416943f993380c4b2.jpg", "https://i.pinimg.com/736x/6d/04/f4/6d04f459330a1cdfa93c60c7aad493ba.jpg", "https://i.pinimg.com/736x/83/bb/f1/83bbf1292027cb6e84c1029e9f205d19.jpg", "https://i.pinimg.com/736x/a3/8f/cd/a38fcd62ce52b852cf1c360c9c14dc50.jpg",
            "https://i.pinimg.com/736x/c5/9a/cb/c59acb34964da2bb5f2870b16945dc4a.jpg", "https://i.pinimg.com/736x/af/76/22/af762232ba0040b3175376ea8df5f8a3.jpg", "https://i.pinimg.com/736x/50/ca/e8/50cae8feee0fdc54277186e2fd917bce.jpg", "https://i.pinimg.com/736x/c5/8d/f8/c58df87515af63ea1c7ea747eb116f61.jpg"];

        var spotifyEmbedLinks = [
            '<iframe src="https://open.spotify.com/embed/track/2kSb3wYSOV996xA2NSmpck?utm_source=generator" width="100%" frameBorder="1" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
            '<iframe src="https://open.spotify.com/embed/track/6vBr2tIHZKaMTpK7r99O3g?utm_source=generator" width="100%" frameBorder="1" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
            '<iframe src="https://open.spotify.com/embed/track/4iZ4pt7kvcaH6Yo8UoZ4s2?utm_source=generator" width="100%" frameBorder="1" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
            '<iframe src="https://open.spotify.com/embed/track/6bnF93Rx87YqUBLSgjiMU8?utm_source=generator" width="100%" frameBorder="1" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
            '<iframe src="https://open.spotify.com/embed/track/10gvzlGLv9gEgfHORWtc1C?utm_source=generator" width="100%" frameBorder="1" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
            '<iframe src="https://open.spotify.com/embed/track/4xqrdfXkTW4T0RauPLv3WA?utm_source=generator" width="100%" frameBorder="1" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
            '<iframe src="https://open.spotify.com/embed/track/2Co0IjcLTSHMtodwD4gzfg?utm_source=generator" width="100%" frameBorder="1" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
            '<iframe src="https://open.spotify.com/embed/track/6UFivO2zqqPFPoQYsEMuCc?utm_source=generator" width="100%" frameBorder="1" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        ];

        for (var i = 0; i < drawingNames.length; i++) {
            drawingContainer.innerHTML += `
            <div class='row my-3'>
                <div class='col-12'>
                    <div class='card'>
                        <div class='card-body'>
                            <div class='row'>
                                <div class='col-md-6'>
                                    <div class='card noBorder mx-3'>
                                        <img src='` + drawingPics[i] + `' class='card-img-top' style='width: 100%; height: 550px; border-radius: 14px;'>
                                    </div>
                                    <h5 class='card-title drawingTitle'>` + drawingNames[i] + `</h5>
                                </div>

                                <div class='col-md-6 d-flex justify-content-center align-items-center my-3'>
                                    <div class='card'>
                                        <div class='card-body d-flex justify-content-center align-items-center'>
                                            <div class='songInspo' style="width: 80%; text-align: center;">Song Inspiration
                                                <div class='songEmbed'></div>
                                                ` + spotifyEmbedLinks[i] + `
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }

    } else {
        content.style.display = "none";
        display = "none";
        btnExpand.innerHTML = "Explore";
    }
}

function expandGalleryContent() {
    var galleryContainer = document.getElementById("pictureContainer");
    var btnExpandGallery = document.getElementById("btnExpandGallery");

    if (galleryContainer.innerHTML === "") {
        btnExpandGallery.innerHTML = "Close";

        var galleryPics = ["./pics/pic1.jpg", "./pics/pic2.jpg", "./pics/pic3.jpg", "./pics/pic4.jpg",
            "./pics/pic5.jpg", "./pics/pic6.jpg", "./pics/pic7.jpg", "./pics/pic8.jpg",
            "./pics/pic9.jpg", "./pics/pic10.jpg", "./pics/pic11.jpg", "./pics/pic12.jpg",
            "./pics/pic13.jpg", "./pics/pic14.jpg", "./pics/pic15.jpg", "./pics/pic16.jpg",
            "./pics/pic17.jpg", "./pics/pic18.jpg", "./pics/pic19.jpg", "./pics/pic20.jpg",
            "./pics/pic21.jpg", "./pics/pic22.jpg", "./pics/pic23.jpg", "./pics/pic24.jpg"];

        galleryContainer.innerHTML = "";

        for (var i = 0; i < galleryPics.length; i++) {
            galleryContainer.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <img src="` + galleryPics[i] + `" class="img-fluid my-3" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px;">
            </div>`;
        }
    } else {
        galleryContainer.innerHTML = "";
        btnExpandGallery.innerHTML = "Explore";
    }
}

function addShadow(id) {
    document.getElementById(id).classList.add("shadow");
}

function removeShadow(id) {
    document.getElementById(id).classList.remove("shadow");
}

showContent('tvShows');

// Function to toggle between dark and light themes
var colorMode = "light";
function changeColorMode() {
    if (colorMode === "light") {
        document.getElementById("body").setAttribute("data-bs-theme", "dark");
        document.getElementById("btnColor").innerHTML = "Light Mode";
        colorMode = "dark";
    } else {
        document.getElementById("body").setAttribute("data-bs-theme", "light");
        document.getElementById("btnColor").innerHTML = "Dark Mode";
        colorMode = "light";
    }
}