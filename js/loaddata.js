let apiOrder = "http://localhost:3000/orders";
let apiContact = "http://localhost:3000/contact";
let products = null;
// get data from file json
fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
        products = data;
        addDataToHTML();
    });

// get order

const getOrder = async () => {
    const response = await fetch(apiOrder);
    const data = await response.json();
    return data;
};

const populateTable = (data) => {
    const tableBody = document.getElementById('orderTableBody');

    data.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.name}</td>
            <td>${order.phone}</td>
            <td>${order.address}</td>
            <td>${order.items.map(item => item.name).join(', ')}</td>
            <td>30000đ</td>
            <td>Đã tiếp nhận</td>
            <td>$ ${order.totalAmount}</td>
            <td class="actions">
                                            <i class="fa-regular fa-trash-can actions-delete js-toggle"></i>
                                            <i class="fa-regular fa-pen-to-square actions-update"></i>
                                        </td>
        `;
        tableBody.appendChild(row);
    });
};

getOrder().then(data => {
    // Do something with the data, for example, populate the table
    populateTable(data);
});

// get contact
const getContact = async () => {
    const response = await fetch(apiContact);
    const data = await response.json();
    return data;
};

const populateTableContact = (data) => {
    const tableBody = document.getElementById('orderTableBodyContact');

    data.forEach(contact => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>1</td>
        <td>${contact.name}</td>
        <td>${contact.phone}</td>
        <td>${contact.id}</td>
        <td class="address">
        ${contact.message}
        </td>
        <td class="actions">                      
        <i onclick="initJsToggle()" class="fa-regular fa-trash-can actions-delete js-toggle"></i>
        
        </td>
        `;
        tableBody.appendChild(row);
    });
};

getContact().then(data => {
    // Do something with the data, for example, populate the table
    populateTableContact(data);
});

// SẢN PHẨM
function addDataToHTML() {
    // remove datas default from HTML
    const listProductHTML = document.querySelectorAll(".table-prod");

    // loop through each element with the class "sale-product"
    listProductHTML.forEach((listProduct) => {
        listProduct.innerHTML = "";

        // add new datas
        if (products != null) {
            // if has data
            products.forEach((product) => {
                let newProduct = document.createElement("tr");
                newProduct.classList.add("product-item");
                newProduct.innerHTML = `<td>${product.id}</td>
                <td>
                
                ${product.name}
                </td>
                <td>${product.Price}đ</td>
                </td>
                <td>
                    <img
                        class="img"
                        src="${product.image}"
                        alt=""
                    />
                </td>
                <td>8/12/2003</td>
                <td class="actions">
                    <i class="fa-regular fa-pen-to-square actions-update"></i>
                    <i class="fa-regular fa-trash-can"></i>
                </td>`;

                listProduct.appendChild(newProduct);
            });
        }
    });
}

fetch("nhacungcap.json")
    .then((response) => response.json())
    .then((data) => {
        nhacungcap = data;
        addDataNhaCungCap();
    });

// NHÀ CUNG CẤP
function addDataNhaCungCap() {
    // remove datas default from HTML
    const listProductHTML = document.querySelectorAll(".table-nv");

    // loop through each element with the class "sale-product"
    listProductHTML.forEach((listNCC) => {
        listNCC.innerHTML = "";

        // add new datas
        if (nhacungcap != null) {
            // if has data
            nhacungcap.forEach((nhacungcap) => {
                let newProduct = document.createElement("tr");
                newProduct.classList.add("nv-item");
                newProduct.innerHTML = `<td>${nhacungcap.id}</td>
                <td>${nhacungcap.name}</td>
                <td>${nhacungcap.email}</td>
                <td>${nhacungcap.phone}</td>
                <td class="address">
                ${nhacungcap.address}
                </td>

                <td class="actions">
                    <i class="fa-regular fa-pen-to-square actions-update"></i>
                    <i class="fa-regular fa-trash-can"></i>
                </td>`;

                listNCC.appendChild(newProduct);
            });
        }
    });
}

fetch("nhanvien.json")
    .then((response) => response.json())
    .then((data) => {
        nhanvien = data;
        addDataNhanVien();
    });

// NHÂN VIÊN
function addDataNhanVien() {
    // remove datas default from HTML
    const listProductHTML = document.querySelectorAll(".table-nv");

    // loop through each element with the class "sale-product"
    listProductHTML.forEach((listNV) => {
        listNV.innerHTML = "";

        // add new datas
        if (nhanvien != null) {
            // if has data
            nhanvien.forEach((nhanvien) => {
                let newProduct = document.createElement("tr");
                newProduct.classList.add("nv-item");
                newProduct.innerHTML = `<td>${nhanvien.id}</td>
                <td>${nhanvien.name}</td>
                <td>${nhanvien.email}</td>
                <td>${nhanvien.phone}</td>
                <td class="address">
                ${nhanvien.address}
                </td>
                <td>${nhanvien.role}</td>
                <td>6/11/2023</td>
                <td class="actions">
                    <i class="fa-regular fa-pen-to-square actions-update"></i>
                    <i class="fa-regular fa-trash-can"></i>
                </td>`;

                listNV.appendChild(newProduct);
            });
        }
    });
}