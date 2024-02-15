// Lấy tất cả các phần tử có lớp là "payment"
var paymentElements = document.querySelectorAll('.payment');

// Lặp qua từng phần tử và gán bộ lắng nghe sự kiện click
paymentElements.forEach(function(element) {
    element.addEventListener('click', function() {
        // Loại bỏ màu nền của tất cả các phần tử "payment" trước đó
        paymentElements.forEach(function(paymentElement) {
            paymentElement.classList.remove('payment-current');
        });

        // Thêm lớp "payment-selected" để thay đổi màu nền của phần tử được click
        element.classList.add('payment-current');
    });
});


// Lấy tất cả các phần tử có lớp là "payment"
var ship = document.querySelectorAll('.detail-left');

// Lặp qua từng phần tử và gán bộ lắng nghe sự kiện click
ship.forEach(function(e) {
    e.addEventListener('click', function() {
        // Loại bỏ màu nền của tất cả các phần tử "payment" trước đó
        ship.forEach(function(shipElement) {
            shipElement.classList.remove('current');
        });

        // Thêm lớp "payment-selected" để thay đổi màu nền của phần tử được click
        e.classList.add('current');
    });
});
