
let products = null;
// get data from file json
fetch('products.json')
    .then((response) => response.json())
    .then((data) => {
        products = data;
        addDataToHTML();
        console.log(products)
    });

// show datas product in list
function addDataToHTML() {
    // remove datas default from HTML
    const listProductHTML = document.querySelectorAll(".your-product");

    // loop through each element with the class "sale-product"
    listProductHTML.forEach((listProduct) => {
        listProduct.innerHTML = "";

        // add new datas
        if (products != null) {
            // if has data
            products.forEach((product) => {
                let newProduct = document.createElement("div");
                newProduct.classList.add("product");
                newProduct.innerHTML = `<a href="./CTSP.html?id=${product.id}"
                    ><img
                        src="${product.image}"
                        alt=""
                        class="p-img"
                /></a>
                
                <div class="body">
                    <div class="name-product line-clamp">
                        <span>${product.name}</span>
                    </div>
                    <div class="star">
                        <div class="star-validate">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            
                            <span>Đã bán 200k+</span>
                        </div>
                        <div class="price-product">
                            <span class="price-your"
                            >${product.Price}<u>đ</u> <strong>10%</strong>
                        </span>
                      </div>
                
                    </div>
                </div>`;

                listProduct.appendChild(newProduct);
            });
        }
    });
}

function searchProduct() {
    let valueSearch = document.getElementById('search').value;
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            let productSearch = data.filter(value => {
                return value.name.toLowerCase().includes(valueSearch.toLowerCase());
            });
            console.log(productSearch);
            
            let listProduct = document.getElementById('products');
            listProduct.innerHTML = '';

            if (productSearch.length > 0) {
                productSearch.forEach(product => {
                    let newProduct = document.createElement("div");
                    newProduct.classList.add("product");
                    newProduct.innerHTML = `<a href="./CTSP.html?id=${product.id}"
                    ><img
                        src="${product.image}"
                        alt=""
                        class="p-img"
                /></a>
                
                <div class="body">
                    <div class="name-product line-clamp">
                        <span>${product.name}</span>
                    </div>
                    <div class="star">
                        <div class="star-validate">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            
                            <span>Đã bán 200k+</span>
                        </div>
                        <div class="price-product">
                            <span class="price-your"
                            >${product.Price}<u>đ</u> <strong>10%</strong>
                        </span>
                      </div>
                
                    </div>
                </div>`;

                    listProduct.appendChild(newProduct);
                });
            } else {
                listProduct.innerHTML = '<p>Không tìm thấy sản phẩm.</p>';
            }
        })
        .catch(error => console.log(error));
}
