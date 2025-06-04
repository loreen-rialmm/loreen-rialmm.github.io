const moodData = {
    happy: [
        {
        artist: "The Foundations",
        title: "Build Me Up Buttercup",
        avatar: "happyartist1.jpg",
        spotify: "1tfZtA15BfJHQTUy3dqTKC",
        lyrics: "https://genius.com/The-foundations-build-me-up-buttercup-lyrics",
        },
        {
        artist: "Edison Lighthouse",
        title: "Love Grows (Where My Rosemary Goes)",
        avatar: "happyartist2.jpg",
        spotify: "5Ts1DYOuouQLgzTaisxWYh",
        lyrics: "https://genius.com/Edison-lighthouse-love-grows-where-my-rosemary-goes-lyrics",
        },
        {
        artist: "Bruno Mars",
        title: "24K Magic",
        avatar: "happyartist3.jpg",
        spotify: "6b8Be6ljOzmkOmFslEb23P",
        lyrics: "https://genius.com/Bruno-mars-24k-magic-lyrics",
        },
        {
        artist: "OMI",
        title: "Cheerleader",
        avatar: "happyartist4.jpg",
        spotify: "5ByIHT8s38diBQf6dkEWbt",
        lyrics: "https://genius.com/Omi-cheerleader-lyrics",
        },
    ],
    sad: [
        {
        artist: "Conan Gray",
        title: "The Cut That Always Bleeds",
        avatar: "sadartist1.jpg",
        spotify: "7wTqEW5nrMhvyEhEyTnOMd",
        lyrics: "https://genius.com/Conan-gray-the-cut-that-always-bleeds-lyrics",
        },
        {
        artist: "Mitski",
        title: "I Bet on Losing Dogs",
        avatar: "sadartist2.jpg",
        spotify: "2Co0IjcLTSHMtodwD4gzfg",
        lyrics: "https://genius.com/Mitski-i-bet-on-losing-dogs-lyrics",
        },
        {
        artist: "The Marias",
        title: "No One Noticed",
        avatar: "sadartist3.jpg",
        spotify: "3siwsiaEoU4Kuuc9WKMUy5",
        lyrics: "https://genius.com/The-marias-no-one-noticed-lyrics",
        },
        {
        artist: "Radiohead",
        title: "No Surprises",
        avatar: "sadartist4.jpg",
        spotify: "10nyNJ6zNy2YVYLrcwLccB",
        lyrics: "https://genius.com/Radiohead-no-surprises-lyrics",
        },
    ],
    chill: [
        {
        artist: "Daniel Caesar",
        title: "Hold Me Down",
        avatar: "chillartist1.jpg",
        spotify: "4s76r7AbquJcTccqJiqdVu",
        lyrics: "https://genius.com/Daniel-caesar-hold-me-down-lyrics",
        },
        {
        artist: "SZA & Travis Scott",
        title: "Open Arms",
        avatar: "chillartist2.jpg",
        spotify: "0xaFw2zDYf1rIJWl2dXiSF",
        lyrics: "https://genius.com/Sza-open-arms-lyrics",
        },
        {
        artist: "Frank Ocean",
        title: "Pink + White",
        avatar: "chillartist3.jpg",
        spotify: "3xKsf9qdS1CyvXSMEid6g8",
        lyrics: "https://genius.com/Frank-ocean-pink-white-lyrics",
        },
    ],
    angry: [
        {
        artist: "Olivia Rodrigo",
        title: "good 4 u",
        avatar: "angryartist1.jpg",
        spotify: "4ZtFanR9U6ndgddUvNcjcG",
        lyrics: "https://genius.com/Olivia-rodrigo-good-4-u-lyrics",
        },
        {
        artist: "Taylor Swift",
        title: "The Man",
        avatar: "angryartist2.jpg",
        spotify: "3RauEVgRgj1IuWdJ9fDs70",
        lyrics: "https://genius.com/Taylor-swift-the-man-lyrics",
        },
        {
        artist: "Doja Cat",
        title: "Ain’t Shit",
        avatar: "angryartist3.jpg",
        spotify: "5lAnYvAIkSDNXqfo7DyFUm",
        lyrics: "https://genius.com/Doja-cat-aint-shit-lyrics",
        },
        {
        artist: "MARINA",
        title: "Oh No!",
        avatar: "angryartist4.jpg",
        spotify: "6VjwcHNnkztQPXlnly9GD0",
        lyrics: "https://genius.com/Marina-oh-no-lyrics",
        },
    ],
    love: [
        {
        artist: "mrld",
        title: "an art gallery could never be as unique as you",
        avatar: "loveartist1.jpg",
        spotify: "22Nd3GuO7sHopPjdKccRcq",
        lyrics: "https://genius.com/Mrld-an-art-gallery-could-never-be-as-unique-as-you-lyrics",
        },
        {
        artist: "Ben&Ben",
        title: "Araw-Araw",
        avatar: "loveartist2.jpg",
        spotify: "4rG3h1QwgjSSWz8EIjCFrm",
        lyrics: "https://genius.com/Ben-ben-araw-araw-lyrics",
        },
        {
        artist: "Paramore",
        title: "The Only Exception",
        avatar: "loveartist3.jpg",
        spotify: "7JIuqL4ZqkpfGKQhYlrirs",
        lyrics: "https://genius.com/Paramore-the-only-exception-lyrics",
        },
        {
        artist: "NIKI",
        title: "Every Summertime",
        avatar: "loveartist4.jpg",
        spotify: "68HocO7fx9z0MgDU0ZPHro",
        lyrics: "https://genius.com/Niki-every-summertime-lyrics",
        },
        {
        artist: "Cup of Joe, Janine Teñoso",
        title: "Tingin",
        avatar: "loveartist5.jpg",
        spotify: "7b89Ffklm3xh4GI37vlZDZ",
        lyrics: "https://genius.com/Cup-of-joe-tingin-lyrics",
        },
    ],
    hype: [
        {
        artist: "Doja Cat",
        title: "Agora Hills",
        avatar: "hypeartist1.jpg",
        spotify: "7dJYggqjKo71KI9sLzqCs8",
        lyrics: "https://genius.com/Doja-cat-agora-hills-lyrics",
        },
        {
        artist: "Kaliii",
        title: "Area Codes",
        avatar: "hypeartist2.jpg",
        spotify: "7sliFe6W30tPBPh6dvZsIH",
        lyrics: "https://genius.com/Kaliii-area-codes-lyrics",
        },
        {
        artist: "Tommy Richman",
        title: "Million Dollar Baby",
        avatar: "hypeartist3.jpg",
        spotify: "5AJ9hqTS2wcFQCELCFRO7A",
        lyrics: "https://genius.com/Tommy-richman-million-dollar-baby-lyrics",
        },
    ],
};

function selectMood(mood) {

    // Get all songs under the selected mood category
    const songs = moodData[mood];

    // Reset the mood bar styling and add the selected mood as a class
    const moodBar = document.getElementById('mood-selector');
    moodBar.className = 'mood-bar';
    moodBar.classList.add(mood);

    // Stop if there are no songs for this mood
    if (!songs) return;

    // For the randomation of the song based on the mood's song list
    const random = songs[Math.floor(Math.random() * songs.length)];

    // Post card for the song recommendation
    const postHTML =
        `
        <div class="post-card">
            <div class="post-header">
            <img class="artist-avatar" src="./assets/img/`+ random.avatar +`" alt="`+ random.artist +`">
            <span class="artist-name">`+ random.artist +`</span>
            </div>

            <div class="post-video">
            <iframe src="https://open.spotify.com/embed/track/` + random.spotify + `"
                frameborder="0"
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
            </iframe>
            </div>

            <div class="post-title text-center">
            <div>`+ random.title +`</div>
            </div>

            <div class="post-actions my-3">
            <a href="`+ random.lyrics +`" target="_blank" class="lyrics-btn">View Lyrics</a>
            </div>
        </div>
    `;

    // Insert the post card into the dashboard container
    document.getElementById("dashboard").innerHTML = postHTML;
}

// Load a default mood (happy) when the page is first opened
document.addEventListener("DOMContentLoaded", function () {
    selectMood('happy');
});