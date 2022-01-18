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

        // itenCard.appendChild(cardTop);
        // itenCard.appendChild(img);
        // itenCard.appendChild(toppings);
        // itenCard.appendChild(bei);

        // small.appendChild(itenCard);
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

        // itenCard.appendChild(cardTop);
        // itenCard.appendChild(img);
        // itenCard.appendChild(toppings);
        // itenCard.appendChild(bei);

        // medium.appendChild(itenCard);
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

        // itenCard.appendChild(cardTop);
        // itenCard.appendChild(img);
        // itenCard.appendChild(toppings);
        // itenCard.appendChild(bei);

        // large.appendChild(itenCard);
    });
}
showItems();

const mediumInfo = [...new Map(pizzaType.map(item => [item['toppings'], item])).values()];
console.log(mediumInfo);

function pickFlavour() {
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
        cartList.appendChild(listCard);
        document.querySelector('.sec-name').appendChild(cloneListCard);
    })
    console.log('pablo');
}
pickFlavour();

document.querySelectorAll('.add-to-cart').forEach(item => {
    item.addEventListener('click', addToCart)
})

var cartInfo = [];

function addToCart() {
    var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj = pizzaType.find(element => element.name == itemToAdd);

    var index = cartInfo.indexOf(itemObj);
    if (index === -1) {
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData = [...cartData, itemObj];
    } else if (index > -1) {
        alert("Added to cart!");
    }

    document.getElementById('cart-plus').innerText =
        ' ' + cartData.length + ' Items';
    document.getElementById('m-cart-plus').innerText =
        ' ' + cartData.length;
    totalAmount();
    cartItems();
}

function cartItems() {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    cartInfo.map(item => {
        var tableRow = document.createElement('tr');

        var rowInfo1 = document.createElement('td');
        var img = document.createElement('img');
        img.src = item.img;
        rowInfo1.appendChild(img);

        var rowInfo2 = document.createElement('td');
        rowInfo2.innerText = item.toppings;

        var rowInfo3 = document.createElement('td');
        var btn1 = document.createElement('button');
        btn1.setAttribute('class', 'reduce-items');
        btn1.innerText = '-';
        var span = document.createElement('span');
        span.innerText = item.quantity;
        var btn2 = document.createElement('button');
        btn2.setAttribute('class', 'increase-items');
        btn2.innerText = '+';

        rowInfo3.appendChild(btn1);
        rowInfo3.appendChild(span);
        rowInfo3.appendChild(btn2);

        var rowInfo4 = document.createElement('td');
        rowInfo4.innerText = item.price;

        tableRow.appendChild(rowInfo1);
        tableRow.appendChild(rowInfo2);
        tableRow.appendChild(rowInfo3);
        tableRow.appendChild(rowInfo4);

        tableBody.appendChild(tableRow);
    });
    document.querySelectorAll('.increase-items').forEach(item => {
        item.addEventListener('click', incrementItem)
    });

    document.querySelectorAll('.reduce-item').forEach(item => {
        item.addEventListener('click', decrementItem);
    });
}