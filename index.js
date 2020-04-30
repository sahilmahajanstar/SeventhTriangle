var buttons = document.getElementsByClassName('btn')
var index = 0;
for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("btn active", "btn");
        this.className = "btn active";
    });

}

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}

function getPrice(i) {
    var price;

    if (i === 0) {
        price = 399
    }
    if (i === 1) {
        price = 209
    }
    return price;
}

function getTotal() {
    var arr = document.getElementsByClassName('btn');
    var price;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].className.includes("active")) {
            price=getPrice(i);
        }
    }
    var quantity=parseInt(document.getElementById('number').value, 10)
    if(quantity===0){
        alert("Add quantity");
    }
    var finalPrice;
    if (quantity!==0){
            finalPrice=price*quantity;
    }

    document.getElementById("finalPrice").innerText=""+finalPrice


}