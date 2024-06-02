let data = [
    {
        "id": 1,
        "title": "Casas de Lujo en el Lago",
        "description": "Casa en el lago con excelente vista, acabados de lujo a un excelente precio",
        "price": "$3.000.000",
        "img1": "../img/anuncio1.jpg",
        "img2": "../img/blog1.jpg"
    },
    {
        "id": 2,
        "title": "Casas terminados de Lujo",
        "description": "Casa con diseño moderno, así como tecnología inteleigente y amueblada",
        "price": "$2.000.000",
        "img1": "../img/anuncio2.jpg",
        "img2": "../img/blog2.jpg"
    },
    {
        "id": 3,
        "title": "Casas con alberca",
        "description": "Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad",
        "price": "$3.000.000",
        "img1": "../img/anuncio3.jpg",
        "img2": "../img/blog3.jpg"
    },
    {
        "id": 4,
        "title": "Casa moderna",
        "description": "Casa muy confortable con terminaciones impecables y en una excelente zona residencial",
        "price": "$3.000.000",
        "img1": "../img/anuncio4.jpg",
        "img2": "../img/blog4.jpg"
    },
    {
        "id": 5,
        "title": "Casa en barrio privado",
        "description": "Casa con diseño moderno, así como tecnología inteleigente, amueblada y en barrio privado",
        "price": "$10.000.000",
        "img1": "../img/anuncio5.jpg",
        "img2": "../img/blog1.jpg"
    },
    {
        "id": 6,
        "title": "Casa con vista al mar",
        "description": "Excelente oportunidad: casa con vista al mar, para vacacionar",
        "price": "$3.000.000",
        "img1": "../img/anuncio6.jpg",
        "img2": "../img/blog2.jpg"
    }
]

const url = location.href.split("=")[1];

//DATOS A MODIFICAR EN TEMPLATE
let title = document.getElementById("house-title");
let img1 = document.getElementById("img1");
let desc = document.getElementById("description");
let val = document.getElementById("val");
let img2 = document.getElementById("img2");

data.forEach(e => {
    if(url ==  e.id){
        title.textContent = e.title;
        img1.src = e.img1;
        desc.textContent = e.description;
        val.textContent = e.price;
        img2.src = e.img2
    }
});

document.addEventListener("DOMContentLoaded", ready);

