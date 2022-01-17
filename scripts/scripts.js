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




    })
}
showItems();