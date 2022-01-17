function showItems() {
    var small = document.getElementById('small');
    var medium = document.getElementById('large');
    var large = document.getElementById('Xlarge');

    const smallInfo = foodItem.filter(item => item.category == 'small')
    console.log(smallInfo);
}