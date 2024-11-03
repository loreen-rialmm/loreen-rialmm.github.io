var clanContainer = document.getElementById("clanContainer");
var clanDetails = document.getElementById("clanDetails");
var backButton = document.getElementById("backButton");
var currentPage = 1;
var totalClans = 32;
var pageSize = 20;

const loadClanTypes = async (page) => {
    const response = await fetch('https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent('https://narutodb.xyz/api/clan/?page=' + page + '&limit=' + pageSize));

    const data = await response.json();
    const clans = data.clans;

    clanContainer.innerHTML = "";

    for (let i = 0; i < clans.length; i++) {
        const clanName = clans[i].name;
        const clanId = clans[i].id;
        clanContainer.innerHTML += `
        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <a href="#" onclick="loadClanMembers(` + clanId + `)">
                <div class="card my-3 cardClanName" style="font-weight: bold;">
                    <div class="card-title text-center">` + clanName + `</div>
                </div>
            </a>
        </div>
        `;
    }

    updatePaginationButtons(page);
}


const loadClanMembers = async (clanId) => {
    const response = await fetch('https://narutodb.xyz/api/clan/' + clanId);
    const clanData = await response.json();

    // Display clan members
    var membersHtml = '<div class="row">';
    clanData.characters.forEach(character => {
        membersHtml += `
        <div class="col-6 col-md-4 my-3">
            <div class="card character-card">
                <img src="` + character.images[0] + `" class="card-img-top" alt="` + character.name + `">
                <div class="card-body">
                    <h5 class="card-title text-center" style="font-size: 24px; font-weight: bold;">` + character.name + `</h5>
                    <p class="card-text text-center">Debut: ` + (character.debut && character.debut.anime ? character.debut.anime : 'N/A') + `</p>
                </div>
            </div>
        </div>
        `;
    });
    membersHtml += '</div>';

    document.getElementById("prevButton").style.display = "none";
    document.getElementById("nextButton").style.display = "none";

    clanContainer.innerHTML = membersHtml;
    document.getElementById("backButton").style.display = "block";
}

const showCharacterDetails = async (characterId) => {
    const response = await fetch('https://narutodb.xyz/api/character/' + characterId);
    const characterData = await response.json();

    const characterDetailsHtml = `
        <h3>` + characterData.name + `</h3>
        ` + (characterData.images && characterData.images[0]
            ? `<img src="` + characterData.images[0] + `" alt="` + characterData.name + `">`
            : `<span>Image Not Available</span>`) + `
        <p>Details: ` + (characterData.details || 'N/A') + `</p>
    `;

    clanDetails.innerHTML = characterDetailsHtml;
    clanDetails.style.display = 'block';
    clanContainer.style.display = 'none';
    backButton.style.display = 'block';
}

const goBack = () => {
    loadClanTypes(currentPage);

    document.getElementById("prevButton").style.display = "block";
    document.getElementById("nextButton").style.display = "block";

    document.getElementById("backButton").style.display = "none";
};


const updatePaginationButtons = (page) => {
    document.getElementById("prevButton").style.display = page > 1 ? "block" : "none";
    document.getElementById("nextButton").style.display = page < Math.ceil(totalClans / pageSize) ? "block" : "none";
}

const nextPage = () => {
    if (currentPage * pageSize < totalClans) {
        currentPage++;
        loadClanTypes(currentPage);
    }
}

const prevPage = () => {
    if (currentPage > 1) {
        currentPage--;
        loadClanTypes(currentPage);
    }
}

loadClanTypes(currentPage);

document.addEventListener('mouseover', function (event) {
    if (event.target.closest('.character-card')) {
        const hoveredCard = event.target.closest('.character-card');
        const allCards = document.querySelectorAll('.character-card');

        allCards.forEach(card => {
            if (card !== hoveredCard) {
                card.classList.add('blur');
            }
        });
    }
});

document.addEventListener('mouseout', function (event) {
    if (event.target.closest('.character-card')) {
        const allCards = document.querySelectorAll('.character-card');

        allCards.forEach(card => card.classList.remove('blur'));
    }
});


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