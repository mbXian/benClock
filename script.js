setInterval(showTime, 1000);
function showTime() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1; // 月份从 0 到 11，所以需要加 1
    var monthEn = '';
    if (month === 1) {
        monthEn = 'Jan';
    } else if (month === 2) {
        monthEn = 'Feb';
    } else if (month === 3) {
        monthEn = 'Mar';
    } else if (month === 4) {
        monthEn = 'Apr';
    } else if (month === 5) {
        monthEn = 'May';
    } else if (month === 6) {
        monthEn = 'Jun';
    } else if (month === 7) {
        monthEn = 'Jul';
    } else if (month === 8) {
        monthEn = 'Aug';
    } else if (month === 9) {
        monthEn = 'Sep';
    } else if (month === 10) {
        monthEn = 'Oct';
    } else if (month === 11) {
        monthEn = 'Nov';
    } else if (month === 12) {
        monthEn = 'Dec';
    }
    let day = today.getDate();
    let currentDate = year + ' - ' + monthEn + ' - ' + day;
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    if (hour == 0) {
        hr = 12;
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = weekDays[today.getDay()];

    let currentTime = hour + ":"
            + min + ":" + sec;
 
    document.getElementById("dateLabel")
                .innerHTML = currentDate;
    document.getElementById("clock")
            .innerHTML = currentTime;
    document.getElementById("weekdayLabel")
            .innerHTML = dayOfWeek;
}
showTime();
