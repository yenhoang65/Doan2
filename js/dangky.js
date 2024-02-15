let apiUser = "http://localhost:3000/user";
const username = document.querySelector(".input-signup-username");
const password = document.querySelector(".input-signup-password");
const role = document.querySelector(".role");
const bntSignup = document.querySelector(".signup__signInButton");

// signup
bntSignup.addEventListener("click", (e) => {
    e.preventDefault();
    if (username.value == "" || password.value == "" || role.value == "") {
        alert("Please enter your username and password");
    } else {
        const user = {
            username: username.value,
            password: password.value,
            role: role.value,
        };
        fetch(apiUser, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
});

