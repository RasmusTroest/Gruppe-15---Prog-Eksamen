let test = [1, 2, 3, 4, 5];

let endpoint = "https://api.dataforsyningen.dk/adresser?q="

let adresse = "Charlotte Muncks Vej 26, 4.th."


function makeAPIfriendly(str) {
    return encodeURIComponent(str)
}

let URIAddress = makeAPIfriendly(adresse)

let fullURI = endpoint + URIAddress

console.log(fullURI)

let result = await fetch(fullURI)

let data = (await result.json())[0]

console.log(data.adgangsadresse.vejpunkt)