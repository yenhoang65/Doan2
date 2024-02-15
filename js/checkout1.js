let listCart = [];
let apiOrder = "http://localhost:3000/orders";
function checkCart(){
        var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
        if(cookieValue){
            listCart = JSON.parse(cookieValue.split('=')[1]);
        }
}

window.addEventListener('beforeunload', function () {
    // Clear the cart when leaving the page
    document.cookie = 'listCart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
});


checkCart();
addCartToHTML();
function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQ');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">$${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
}

// -------------------đặt hàng-----
function submitOrder() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    checkCart();

    if (listCart && Array.isArray(listCart)) {
        const itemsFromCookie = listCart
            .map((item) => {
                // Check if the item is an object before accessing its properties
                if (
                    item &&
                    typeof item === "object" &&
                    item.hasOwnProperty("name")
                ) {
                    return {
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                    };
                } else {
                    console.error("Invalid item in listCart:", item);
                    return null; // or handle the invalid item in another way
                }
            })
            .filter((item) => item !== null); // Filter out any null items

        const totalAmount = itemsFromCookie.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);

        const orderData = {
            name: name,
            phone: phone,
            address: address,
            items: itemsFromCookie,
            totalAmount: totalAmount,
        };

        fetch(apiOrder, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        })
            .then((response) => response.json())
            .then((data) => {
                alert("Đặt hàng thành công");
                console.log("Đặt hàng thành công:", data);

                document.cookie =
                    "listCartItem=; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";

                // Redirect to the homepage
                window.location.href = "index.html";
            })
            .catch((error) => {
                console.error("Lỗi:", error);
            });
    } else {
        console.log(
            "Không có sản phẩm trong giỏ hàng hoặc giỏ hàng không hợp lệ."
        );
    }
}