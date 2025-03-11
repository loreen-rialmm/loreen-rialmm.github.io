const tailedBeastContainer = document.getElementById("tailedBeastContainer");

const loadTailedBeasts = async () => {
    const response = await fetch('https://narutodb.xyz/api/tailed-beast');
    const data = await response.json();
    const tailedBeasts = data.tailedBeasts;

    tailedBeastContainer.innerHTML = "";

    tailedBeasts.forEach(beast => {
        var beastDetails =
            '<div class="col-md-4 mb-4">' +
            '<div class="card tailedBeastCard" onclick="addCardColor(this)">' +
            '<div class="card d-flex align-items-stretch">' +
            '<img src="' + beast.images[0] + '" alt="' + beast.name + '">' +
            '</div>' +
            '<div class="card-body">' +
            '<div class="d-flex justify-content-between infoBeastContainer">' +
            '<h5 class="card-title beastName">' + beast.name + '</h5>' +
            '<p class="beastID">ID: ' + beast.id + '</p>' +
            '</div>' +
            '<hr>' +
            '</div>' +
            '<div class="cardInfoDetails">' +
            '<p><strong>Jinchūriki:</strong> ' + (beast.personal?.jinchūriki ? beast.personal.jinchūriki.join(", ") : "N/A") + '</p>' +
            '<hr>' +
            '<p><strong>Unique Traits:</strong> ' + (beast.uniqueTraits ? beast.uniqueTraits.join(", ") : "N/A") + '</p>' +
            '<hr>' +
            '</div>' +
            '</div>' +
            '</div>';

        tailedBeastContainer.innerHTML += beastDetails;
    });
}

function addCardColor(card) {
    card.style.backgroundColor = '#fcad5dd6';
}

loadTailedBeasts();

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