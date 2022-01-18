import { pizzaType } from "./main.js";
console.log(pizzaType);

function showItems() {
    var small = document.getElementById('small');
    var medium = document.getElementById('large');
    var large = document.getElementById('Xlarge');

    const smallInfo = pizzaType.filter(item => item.size == 'small')
    console.log(smallInfo);
    const mediumInfo = pizzaType.filter(item => item.size == 'medium')
    console.log(smallInfo);
    const largeInfo = pizzaType.filter(item => item.size == 'large')
    console.log(smallInfo);

    smallInfo.map(item => {
        var itenCard = document.createElement('div');
        itenCard.setAttribute('id', 'item-card');
        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');
        var star = document.createElement('i');
        star.setAttribute('id', 'rating');
        star.setAttribute('class', 'fa fa-star')
        star.innerText = '' + item.rating;
        var heart = document.createElement('i');
        star.setAttribute('id', 'rating');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart')
        heart.innerText = '' + item.rating;
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var toppings = document.createElement('p');
        toppings.setAttribute('id', 'item-name');
        toppings.innerText = item.toppings;

        var bei = document.createElement('p');
        bei.setAttribute('id', 'pizza-price');
        bei.innerText = 'Cost: Kes.' + item.price;

        itenCard.appendChild(cardTop);
        itenCard.appendChild(img);
        itenCard.appendChild(toppings);
        itenCard.appendChild(bei);

        small.appendChild(itenCard);
    });
    mediumInfo.map(item => {
        var itenCard = document.createElement('div');
        itenCard.setAttribute('id', 'item-card');
        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');
        var star = document.createElement('i');
        star.setAttribute('id', 'rating');
        star.setAttribute('class', 'fa fa-star')
        star.innerText = '' + item.rating;
        var heart = document.createElement('i');
        star.setAttribute('id', 'rating');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart')
        heart.innerText = '' + item.rating;
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var toppings = document.createElement('p');
        toppings.setAttribute('id', 'item-name');
        toppings.innerText = item.toppings;

        var bei = document.createElement('p');
        bei.setAttribute('id', 'pizza-price');
        bei.innerText = 'Cost: Kes.' + item.price;

        itenCard.appendChild(cardTop);
        itenCard.appendChild(img);
        itenCard.appendChild(toppings);
        itenCard.appendChild(bei);

        medium.appendChild(itenCard);
    });
    largeInfo.map(item => {
        var itenCard = document.createElement('div');
        itenCard.setAttribute('id', 'item-card');
        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');
        var star = document.createElement('i');
        star.setAttribute('id', 'rating');
        star.setAttribute('class', 'fa fa-star')
        star.innerText = '' + item.rating;
        var heart = document.createElement('i');
        star.setAttribute('id', 'rating');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart')
        heart.innerText = '' + item.rating;
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var toppings = document.createElement('p');
        toppings.setAttribute('id', 'item-name');
        toppings.innerText = item.toppings;

        var bei = document.createElement('p');
        bei.setAttribute('id', 'pizza-price');
        bei.innerText = 'Cost: Kes.' + item.price;

        itenCard.appendChild(cardTop);
        itenCard.appendChild(img);
        itenCard.appendChild(toppings);
        itenCard.appendChild(bei);

        large.appendChild(itenCard);
    });
}
showItems();

const mediumInfo = [...new Map(pizzaType.map(item => [item['toppings'], item])).values()];
console.log(mediumInfo);

function pickTaste() {
    var cartList = document.getElementById('cart-list');

    mediumInfo.map(item => {
        console.log(item)
        var listCard = document.createElement('div');
        listCard.setAttribute('class', 'list-card');

        var listImg = document.createElement('img');
        listImg.src = item.img;

        var listName = document.createElement('a');
        listName.setAttribute('class', 'list-name');
        listName.innerText = item.toppings;
        listName.setAttribute('href', '#' + item.toppings)

        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard = listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        document.querySelector('.sec-name').appendChild(cloneListCard)
    })
    console.log('pablo');
}
pickTaste();