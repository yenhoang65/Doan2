let endDate = new Date("09/24/2025 00:00:00").getTime();
let check = setInterval(function(){
    let now = new Date().getTime();
    let distance = endDate - now;//Tính khoảng cách thời gian còn lại bằng cách trừ thời điểm hiện tại từ thời điểm kết thúc.
    let hour = Math.floor((distance % (24*60*60*1000)) / (60* 60*1000));
    let minute = Math.floor((distance % (60* 60*1000)) / (60*1000));
    let seconds = Math.floor((distance % (60*1000)) / 1000);
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('seconds').innerText = seconds;
    if(distance <= 0){
        clearInterval(check);
    }
}, 1000);//milliseconds