const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
  templeName: "Santiago Chile",
  location: "Santiago, Chile",
  dedicated: "1983, September, 15",
  area: 20831,
  imageUrl:
    "https://newsroom.churchofjesuschrist.org/media/960x540/Santiago-Chile-Temple.jpg"
},
{
  templeName: "Concepción Chile",
  location: "Concepción, Chile",
  dedicated: "2018, October, 28",
  area: 23000,
  imageUrl:
    "https://www.churchofjesuschrist.org/imgs/e3189e6222befb877fa9904b24a29f01d38b6a5d/full/800%2C/0/default"
},
{
  templeName: "Antofagasta Chile",
  location: "Antofagasta, Chile",
  dedicated: "2025, June, 15",
  area: 23000,
  imageUrl:
    "https://www.churchofjesuschrist.org/imgs/jhgbjva5ozxl3popae5ym2wg9oacczz0mrojtamq/pct%3A0%2C30%2C100%2C59.4/%212688%2C1120/0/default"
}
];
const templeCard= document.querySelector("#temple-cards");
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small")

function displayTemples(templeList){
    templeCard.innerHTML="";

    templeList.forEach((temple)=>{
        const card=document.createElement("section");
        card.classList.add("temple-card");
        const name=document.createElement("h2");
        const location=document.createElement("p");
        const dedication=document.createElement("p");
        const area=document.createElement("p");
        const image=document.createElement("img")
        image.src=temple.imageUrl;
        image.alt=`${temple.templeName} Temple`;
        image.loading="lazy";

        name.textContent=temple.templeName;
        location.innerHTML= `<span>Location:</span> ${temple.location}`;
        dedication.innerHTML= `<span>Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span>Area:</span> ${temple.area} sq ft`;

        card.appendChild(name);
        card.appendChild(dedication);
        card.appendChild(location);
        card.appendChild(area);
        card.appendChild(image);

        templeCard.appendChild(card);
        
    });
}

displayTemples(temples);

homeLink.addEventListener("click", (event) => {
  event.preventDefault();
  displayTemples(temples);
});

oldLink.addEventListener("click", (event) => {
  event.preventDefault();
  const oldTemples = temples.filter((temple) => {
    const year = Number(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  displayTemples(oldTemples);
});
newLink.addEventListener("click", (event) => {
  event.preventDefault();
  const newTemples = temples.filter((temple) => {
    const year = Number(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  displayTemples(newTemples);
});
largeLink.addEventListener("click", (event) => {
  event.preventDefault();
  const largeTemples = temples.filter((temple) => {
    return temple.area > 90000;
  });
  displayTemples(largeTemples);
});
smallLink.addEventListener("click", (event)=> {
    event.preventDefault();
    const smallTemples = temples.filter((temple)=>{
        return temple.area<10000;
    });
    displayTemples(smallTemples)
});


const menuButton=document.querySelector("#menu");
const navigation=document.querySelector("nav");

menuButton.textContent = "☰";

menuButton.addEventListener("click", ()=>{
navigation.classList.toggle("open");
menuButton.classList.toggle("open");

if (menuButton.classList.contains("open")){
    menuButton.textContent = "❌";
}
    else{
        menuButton.textContent="☰"
    }


})