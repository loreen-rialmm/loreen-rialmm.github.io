var colors = {
    "Fire Release": "#D7755D",
    "Wind Release": "#AFE3FF",
    "Lightning Release": "#D994E7",
    "Earth Release": "#66C999",
    "Water Release": "#5964C7",
    "Wood Release": "#BC9957",
    "Mud Release": "#8A5808",
    "Lava Release": "#C84F1E",
    "Storm Release": "#645E79",
    "Explosion Release": "#9C4B5B",
    "Boil Release": "#81A6A5",
    "Crystal Release": "#C73FE9",
    "Ice Release": "#6AAFF4",
    "Dust Release": "#CCBCA8",
    "Steel Release": "#7F4E4C",
    "Typhoon Release": "#115C7E",
    "Scorch Release": "#9C3636",
    "Earth Release (Anime only)": "#66C999",
    "Wind Release  (Anime only)": "#AFE3FF",
    "Wind Release  (Novel only)": "#AFE3FF",
    "Wind Release  (Affinity)": "#AFE3FF",
    "Wind Release  (Affinity; Anime only)": "#AFE3FF",
    "Wind Release  (While chakra enhanced)": "#AFE3FF",
    "Lava Release  (Anime only)": "#C84F1E",
    "Wood Release  (Anime only)": "#BC9957",
    "Water Release  (Anime only)": "#5964C7",
    "Water Release  (Novel only)": "#5964C7",
    "Lightning Release  (Anime only)": "#D994E7",
    "Lightning Release  (Affinity)": "#D994E7",
    "Lighting Release  (Affinity; Anime only)": "#D994E7",
    "Fire Release  (While chakra enhanced)": "#D7755D",
    "Fire Release  (Anime only)": "#D7755D",
    "Magnet Release  (Novel only)": "#DFBBA7",
    "Yin Release  (Novel only)": "#797165",
    "Yin Release  (Anime only)": "#797165",
    "Yin Release": "#797165",
    "Yang Release": "#FFFACD",
    "Yin-Yang Release": "#FDF9B9"
};

var title = document.getElementById("title");
var img = document.getElementById("img");
var imgContainer = document.getElementById("img-Container");
var nature = document.getElementById("nature");
var jutsu = document.getElementById("jutsu");
var debut = document.getElementById("debut");
var occupation = document.getElementById("occupation");
var affiliation = document.getElementById("affiliation");
var unique = document.getElementById("unique");
var clan = document.getElementById("clan");

const loadCharacter = async (searchTerm) => {
    const response = await fetch('https://narutodb.xyz/api/character/search?name=' + searchTerm);
    const character = await response.json();

    title.innerHTML = "#" + character.id + " " + character.name;
    img.src = character.images && character.images[0] ? character.images[0] : "Image Not Available";

    const natureTypes = character.natureType && character.natureType.length > 0 ? character.natureType : ["Unknown"];
    nature.innerHTML = natureTypes.join(", ");

    const natureColor = natureTypes[0] in colors ? colors[natureTypes[0]] : "#D3D3D3";
    imgContainer.style.backgroundColor = natureColor;
    document.getElementById("characterInfoCard").style.backgroundColor = natureColor;

    jutsu.innerHTML = character.jutsu && character.jutsu.length > 0 ? character.jutsu.join(", ") : "No Jutsu Available";
    debut.innerHTML = character.debut ? (character.debut.anime || character.debut.manga || "Unknown Debut") : "Unknown Debut";
    occupation.innerHTML = character.personal && character.personal.occupation ? character.personal.occupation : "Unknown Occupation";
    affiliation.innerHTML = character.personal && character.personal.affiliation ? character.personal.affiliation : "No Affiliation";
    unique.innerHTML = character.uniqueTraits && character.uniqueTraits.length > 0 ? character.uniqueTraits.join(", ") : "No Unique Traits";
    clan.innerHTML = character.personal && character.personal.clan ? character.personal.clan : "No Clan";
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('characterName')) {
    loadCharacter(urlParams.get('characterName'));
} else {
    document.getElementById("title").innerHTML = "Wrong character";
}

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