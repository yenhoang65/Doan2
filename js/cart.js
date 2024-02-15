
let products = null;
// get data from file json
fetch("product.json")
    .then((response) => response.json())
    .then((data) => {
        products = data;
        addDataToHTML();
    });

let listCart = [];

function checkCart() {
    var cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("listCart="));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split("=")[1]);
    } else {
        listCart = [];
    }
}


checkCart();
// lấy thông tin sản phẩm chuyền nên html
const btn = document.querySelectorAll(".btngh");
btn.forEach(function (button) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productimg = product.querySelector("img").src;
        var productName = product.querySelector(".n-product").innerText;
        var productPrice = product.querySelector("span").innerText;
        addcart(productimg, productName, productPrice);
    });
});
//thêm sản phẩm vào giỏ rồi cật nhật cookie
function addcart(productimg, productName, productPrice) {
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".titles");
        if (productT[i].innerHTML == productName) {
            alert("Sản phẩm của bạn đã có trong giỏ hàng");
            return;
        }
    }
    var trcontent =
        '<tr><td style="display: flex;align-items: center;"><img style="width: 70px;" src="' +
        productimg +
        '" alt="Sữa"><span class ="titles">' +
        productName +
        '</span></td><td><p><span class="pric">' +
        productPrice +
        '</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class ="cart-delete">Xóa</span></td></tr>';
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");
    cartTable.append(addtr);

    // Update listCart and save it to the cookie
    listCart.push({image: productimg, name: productName, price: productPrice, quantity: 1 });
    document.cookie = "listCart=" + JSON.stringify(listCart) + ";path=/";

    carttotal();
    deletecart();
    inputchange();
}
// tính tổng giá trị giỏ hàng
function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr");
    var totalC = 0;

    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input");
        var productPrice = cartItem[i].querySelector(".pric").innerHTML;

        totalA = inputValue.value * productPrice * 1000;
        totalC = totalC + totalA;
    }

    var cartTotalA = document.querySelector(".price-total span");
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE');
}

function deletecart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delete");
        productT[i].addEventListener("click", function (event) {
            var deletecart = event.target;
            var cartitemR = deletecart.parentElement.parentElement;
            cartitemR.remove();
            updateListCart();
            carttotal();
        });
    }
}
//thay đổi total
function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input");
        var productName = cartItem[i].querySelector(".titles").innerText;

        inputValue.addEventListener("change", function () {
            updateListCart();
            carttotal();
        });
    }
}

function updateListCart() {
    var cartItem = document.querySelectorAll("tbody tr");
    var updatedListCart = [];

    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input");
        var productName = cartItem[i].querySelector(".titles").innerText;

        var existingItem = listCart.find(item => item.name === productName);

        if (existingItem) {
            existingItem.quantity = parseInt(inputValue.value, 10);
            updatedListCart.push(existingItem);
        }
    }

    listCart = updatedListCart;
    document.cookie = "listCart=" + JSON.stringify(listCart) + ";path=/";
}

const cartbtn = document.querySelector(".fa-circle-xmark");
const cartshow = document.querySelector(".anhyen");
cartshow.addEventListener("click", function () {
    document.querySelector(".cartgh").style.right = "0";
});

cartbtn.addEventListener("click", function () {
    document.querySelector(".cartgh").style.right = "-100%";
});
