class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])
let ireland = new Country("Ireland", "English, Irish", "Top of the mornin", ["green", "white", "orange"])
let germany = new Country("Germany", "German and English", "Guten Tag", ["black", "red", "gold"])

function SwitchCountry() {
    let countryNode = document.getElementById("CountryList")
    let input = countryNode.value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;

    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Ireland") {
        country = ireland;
        
    }
    else if (input === "Germany") {
        country = germany;
    }
    DisplayColors(country);
}

function DisplayColors(c){
    
    let color1Node = document.getElementById("Color1");
    color1Node.style.backgroundColor = c.colors[0];
    let color2Node = document.getElementById("Color2");
    color2Node.style.backgroundColor = c.colors[1];
    let color3Node = document.getElementById("Color3");
    color3Node.style.backgroundColor = c.colors[2];
    let countrynameNode = document.getElementById("CountryName");
    countrynameNode.innerHTML = c.name;
    let countrylangNode = document.getElementById("OfficialLanguage");
    countrylangNode.innerHTML = c.lang;
    let countryhelloNode = document.getElementById("HelloWorld");
    countryhelloNode.innerHTML = c.greeting;
}
