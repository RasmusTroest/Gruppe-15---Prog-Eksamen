let test = [1, 2, 3, 4, 5];
let endpoint = "https://api.dataforsyningen.dk/adresser?q=";
let btn = document.getElementById("submitButton");
let inp = document.getElementById("adresse");
let uList = document.getElementById("searchItems");

function makeAPIfriendly(str) {
    let cleanstr = str.trim();
    let adresse = encodeURIComponent(cleanstr);
    let fullURI = endpoint + adresse;
    return fullURI
};

async function getInfo(url) {
    let result = await fetch(url);
    let data = (await result.json())[0].adgangsadresse;

    console.log(data);

    return data
}

async function searchAdress(str) {
    let url = makeAPIfriendly(str);
    let data = await getInfo(url);

    let item = document.createElement("li");
    item.innerHTML = `${data.ejerlav.kode}\n${data.matrikelnr}`
    uList.appendChild(item);
}

btn.addEventListener("click", () => searchAdress(inp.value));