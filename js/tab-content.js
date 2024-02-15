function setupCarousel(carouselElement) {
    const firstImg = carouselElement.querySelectorAll(".milk-detail")[0];
    const arrowIcons =
        carouselElement.parentElement.querySelectorAll(".selling .arrow");

    let isDragStart = false,
        isDragging = false,
        prevPageX,
        prevScrollLeft,
        positionDiff;

    const showHideIcons = () => {
        // hiển thị và ẩn biểu tượng trước/tiếp theo theo giá trị bên trái cuộn băng chuyền
        const scrollWidth =
            carouselElement.scrollWidth - carouselElement.clientWidth; // nhận được chiều rộng có thể cuộn tối đa
        arrowIcons[0].style.display =
            carouselElement.scrollLeft == 0 ? "none" : "block";
    };

    arrowIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            const firstImgWidth = firstImg.clientWidth + 900; // nhận chiều rộng img đầu tiên và thêm 15 giá trị lề
            // nếu biểu tượng được nhấp ở bên trái, hãy giảm giá trị chiều rộng từ cuộn băng chuyền bên trái, thêm vào đó
            carouselElement.scrollLeft +=
                icon.id == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 60); //gọi showHideIcons sau 60ms
        });
    });

    const autoSlide = () => {
        // nếu không còn hình ảnh nào để cuộn thì quay lại từ đây
        if (
            carouselElement.scrollLeft -
                (carouselElement.scrollWidth - carouselElement.clientWidth) >
                -1 ||
            carouselElement.scrollLeft <= 0
        )
            return;

        positionDiff = Math.abs(positionDiff); // làm cho giá trị của vị tríDiff thành dương
        const firstImgWidth = firstImg.clientWidth + 14;
        // nhận giá trị chênh lệch cần thêm hoặc giảm từ băng chuyền bên trái để lấy trung tâm img ở giữa
        const valDifference = firstImgWidth - positionDiff;

        if (carouselElement.scrollLeft > prevScrollLeft) {
            // nếu người dùng cuộn sang phải
            return (carouselElement.scrollLeft +=
                positionDiff > firstImgWidth / 3
                    ? valDifference
                    : -positionDiff);
        }
        // nếu người dùng cuộn sang trái
        carouselElement.scrollLeft -=
            positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    };

    const dragStart = (e) => {
        // cập nhật giá trị biến toàn cục khi di chuột xuống
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carouselElement.scrollLeft;
    };

    const dragging = (e) => {
        // cuộn hình ảnh/băng chuyền sang trái theo con trỏ chuột
        if (!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        carouselElement.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
carouselElement.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    };

    const dragStop = () => {
        isDragStart = false;
        carouselElement.classList.remove("dragging");

        if (!isDragging) return;
        isDragging = false;
        autoSlide();
    };

    carouselElement.addEventListener("mousedown", dragStart);
    carouselElement.addEventListener("touchstart", dragStart);

    document.addEventListener("mousemove", dragging);
    carouselElement.addEventListener("touchmove", dragging);

    document.addEventListener("mouseup", dragStop);
    carouselElement.addEventListener("touchend", dragStop);

    // Khởi tạo bằng cách hiển thị/ẩn biểu tượng
    showHideIcons();
}

// Example usage:
const caro = document.querySelectorAll(".tab-pane .sell-detail");
caro.forEach((carousel) => {
    setupCarousel(carousel);
});