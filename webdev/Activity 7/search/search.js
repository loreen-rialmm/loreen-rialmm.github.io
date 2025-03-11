var infoContainer = document.getElementById("infoContainer");
var characterImage = document.getElementById("characterImage");

const loadCharacterData = async (searchTerm) => {
    const response = await fetch('https://narutodb.xyz/api/character/search?name=' + searchTerm);

    if (!response.ok) {
        infoContainer.innerHTML = `
        <div class="ticker">
            <div class="ticker_items">
                <div class="ticket_item noInfoCard">No character found with that name. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </div>
                <div class="ticket_item noInfoCard">No character found with that name. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </div>
            </div>
        </div>`;
        characterImage.src = '';
        characterImage.style.display = 'none';
        return;
    }

    const data = await response.json();

    infoContainer.innerHTML = '';

    const character = data;

    if (character) {
        characterImage.src = character.images;
        characterImage.style.display = 'block';
    } else {
        characterImage.src = '';
        characterImage.style.display = 'none';
    }

    var characterData = [
        { label: "Name", value: character.name || "Unknown" },
        { label: "ID", value: character.id || "Unknown" },
        { label: "Clan", value: character.clan || "No Clan" },
        { label: "Nature Type", value: character.natureType && character.natureType.length > 0 ? character.natureType.join(", ") : "Unknown" },
        { label: "Jutsu", value: character.jutsu && character.jutsu.length > 0 ? character.jutsu.join(", ") : "No Jutsu Available" },
        { label: "Debut", value: character.debut ? (character.debut.anime || character.debut.manga || "Unknown Debut") : "Unknown Debut" },
        { label: "Occupation", value: character.personal && character.personal.occupation ? character.personal.occupation : "Unknown Occupation" },
        { label: "Affiliation", value: character.personal && character.personal.affiliation ? character.personal.affiliation : "No Affiliation" },
        { label: "Unique Trait", value: character.uniqueTraits && character.uniqueTraits.length > 0 ? character.uniqueTraits.join(", ") : "No Unique Traits" }
    ];

    characterData.forEach(function (info) {
        infoContainer.innerHTML += '<div class="infoCard">' +
            '<span class="label">' + info.label + ':</span> ' +
            '<span class="data">' + info.value + '</span>' +
            '</div>'
    });
};

function searchCharacter() {
    var searchTerm = document.getElementById("searchTerm").value;
    loadCharacterData(searchTerm);
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