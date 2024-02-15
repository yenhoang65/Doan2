let products = null;
// lấy dữ liệu sản phẩm trong Products.json
fetch('products.json')
    .then((response) => response.json())
    .then((data) => {
        products = data;
        showDetail();
    });
    
//tìm sản phẩm này
function showDetail(){
    // let detail = document.querySelector('.detail-sp')
    let detail = document.querySelector('.container-detail')
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => {
        return value.id == productId
    })[0];
    //
    if(!thisProduct){
        window.location.href ="/";
    }
    //
    detail.querySelector('.left-img img').src = thisProduct.image;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.pr-price').innerText = '$' + thisProduct.Price;
    // detail.querySelector('.price-sp').innerText = '$' + thisProduct.Price;

}
