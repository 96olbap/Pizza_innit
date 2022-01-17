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
}
showItems()