let apiUser = "http://localhost:3000/User";

//login lấy phần tử input html lưu trữ thông tin đăng nhập
const username = document.querySelector(".form-input-username");
const password = document.querySelector(".form-input-password");
const bntLogin = document.querySelector(".btn-login-si");

// get user
const getUser = async () => {
    const response = await fetch(apiUser);
    const data = await response.json();
    return data;
};

// login
bntLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (username.value == "" || password.value == "") {
        alert("Please enter your username and password");
    } else {
        getUser().then((data) => {
            const user = data.find(
                (user) =>
                    user.username == username.value &&
                    user.password == password.value
            );
            if (user.role == "client") {
                alert("Login success");
                window.location.href = "index.html";
            } else if (user.role == "admin") {
                alert("Login success");
                window.location.href = "admin.html";
            } else {
                alert("Login failed");
            }
        });
    }
});