const akatsukiContainer = document.getElementById("akatsukiContainer");

const loadAkatsukiMembers = async () => {
    const response = await fetch('https://narutodb.xyz/api/akatsuki');
    const { akatsuki } = await response.json();

    akatsukiContainer.innerHTML = "";

    akatsuki.forEach(member => {
        const jutsu = member.jutsu && member.jutsu.length ? member.jutsu.join(', ') : "Unknown Jutsu";
        const natureType = member.natureType && member.natureType.length ? member.natureType.join(', ') : "Unknown Nature Type";
        const status = member.personal.status || "Status Unknown";
        const occupation = member.personal.occupation || "Unknown";
        const affiliation = member.personal.affiliation || "Affiliation Unknown";
        const debutAnime = member.debut?.anime || "Debut Unknown";

        const akatsukiDetails = `
        <div class="card infoMemberDetails">
            <div class="card debutCard mb-1">
                <h5>Debut (Anime): <span style="font-weight: normal;">` + debutAnime + `</span></h5>
            </div>
            <div class="card jutsuCard mb-1">
                <h5>Jutsu: <span style="font-weight: normal;">` + jutsu + `</span></h5>
            </div>
            <div class="card natureTypeCard mb-1">
                <h5>Nature Type: <span style="font-weight: normal;">` + natureType + `</span></h5>
            </div>
            <div class="card statusCard mb-1">
                <h5>Status: <span style="font-weight: normal;">` + status + `</span></h5>
            </div>
            <div class="card occupationCard mb-1">
                <h5>Occupation: <span style="font-weight: normal;">` + occupation + `</span></h5>
            </div>
            <div class="card affiliationCard mb-1">
                <h5>Affiliation: <span style="font-weight: normal;">` + affiliation + `</span></h5>
            </div>
        </div>
    `;

        const akatsukiCardHtml = `
        <div class="col-md-4 mb-4" data-name="` + member.name + `" data-img="` + member.images[0] + `">
            <div class="card cardDetails">
                <img src="` + member.images[0] + `" class="card-img-top text-center akatsukiImage" alt="` + member.name + `">
                <div class="card-body">
                    <h4 class="card-title text-center nameCard">` + member.name + `</h4>
                    ` + akatsukiDetails +`
                </div>
            </div>
        </div>
    `;
        akatsukiContainer.innerHTML += akatsukiCardHtml;
    });
}
loadAkatsukiMembers();

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