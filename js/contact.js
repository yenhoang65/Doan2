let apiContact = "http://localhost:3000/contact";
const username = document.querySelector(".input-contact-name");
const phone = document.querySelector(".input-contact-phone");
const email = document.querySelector(".input-contact-email");
const message = document.querySelector(".input-contact-message");
const btnContact = document.querySelector(".btn-contact");

document.addEventListener('DOMContentLoaded', function() {
    const apiContact = "http://localhost:3000/contact";
    const username = document.querySelector(".input-contact-name");
    const phone = document.querySelector(".input-contact-phone");
    const email = document.querySelector(".input-contact-email");
    const message = document.querySelector(".input-contact-message");
    const btnContact = document.querySelector(".btn-contact");

    // Check if the button exists before adding an event listener
    if (btnContact) {
        btnContact.addEventListener("click", (e) => {
            e.preventDefault();
            if (username.value == "" || phone.value == "" || email.value == "" || message.value == "") {
                alert("Please enter your information");
            } else {
                const contact = {
                    name: username.value,
                    phone: phone.value,
                    email: email.value,
                    message: message.value
                };
                fetch(apiContact, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(contact),
                })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`Failed to submit contact: ${res.status} ${res.statusText}`);
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    // Clear input values after successful submission
                    username.value = "";
                    phone.value = "";
                    email.value = "";
                    message.value = "";
                    alert("Gửi liên hệ thành công");
                })
                .catch((error) => {
                    console.error("Error submitting contact:", error.message);
                });
            }
        });
    } else {
        console.error("Button not found");
    }
});
// document.addEventListener('DOMContentLoaded', function() {
//     const apiContact = "http://localhost:3000/contact";
//     const username = document.querySelector(".input-contact-name");
//     const phone = document.querySelector(".input-contact-phone");
//     const email = document.querySelector(".input-contact-email");
//     const message = document.querySelector(".input-contact-message");
//     const btnContact = document.querySelector(".btn-contact");

//     if (!btnContact) {
//         console.error("Button not found");
//         return;
//     }

//     btnContact.addEventListener("click", (e) => {
//         e.preventDefault();
//         if (username.value == "" || phone.value == "" || email.value == "" || message.value == "") {
//             alert("Please enter your information");
//         } else {
//             const contact = {
//                 name: username.value,
//                 phone: phone.value,
//                 email: email.value,
//                 message: message.value
//             };
//             fetch(apiContact, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(contact),
//             })
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error(`Failed to submit contact: ${res.status} ${res.statusText}`);
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 console.log(data);
//                 // Clear input values after successful submission
//                 username.value = "";
//                 phone.value = "";
//                 email.value = "";
//                 message.value = "";

//                 // Display success alert
//                 alert("Gửi liên hệ thành công");
//             })
//             .catch((error) => {
//                 console.error("Error submitting contact:", error.message);
//             });
//         }
//     });
// });
