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

var cardContainer = document.getElementById("cardContainer");
var loadingBar = document.getElementById("loadingBar");
var page = 1;

const loadCharacter = async () => {
    var baseline = 1 + ((page - 1) * 40);
    var characterCount = baseline + 39;

    for (var i = baseline; i <= characterCount; i++) {
        const response = await fetch('https://narutodb.xyz/api/character/' + i);
        const character = await response.json();

        var color = (character.natureType && character.natureType.length > 0) ? colors[character.natureType[0]] : "#D9D9D9";

        cardContainer.innerHTML += `
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 cardInfo">
            <a href="view.html?characterName=` + character.name + `">
                <div class="card rounded-5 my-3" style="background-color: ` + color + `">
                    <div class="imgCharacterContainer">
                        ` + (character.images && character.images[0] ? `<img src="` + character.images[0] + `" 
                        alt="` + character.name + `">` : `<span>Image Not Available</span>`) + `
                    </div>
                    <div class="characterName">` + character.name + `</div>
                    <div class="characterID">id #` + character.id + `</div>
                    <div class="rounded-5 card py-2 px-4 natureType" id="natureType">` + (character.natureType && character.natureType.length > 0 ? character.natureType[0] : "Unknown") + `</div>
                </div>
            </a>
        </div>
        `;
        loadingBar.style.width = (((i - baseline) + 1) / 40) * 100 + '%';
    }
}

loadCharacter();

function nextPage() {
    cardContainer.innerHTML = "";
    loadingBar.style.width = "0%";
    page += 1;
    loadCharacter();
}

function prevPage() {
    cardContainer.innerHTML = "";
    loadingBar.style.width = "0%";
    page -= 1;
    loadCharacter();
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