function startCountdown(){
    let targetDate = localStorage.getItem('targetDate');

    if(!targetDate){
        targetDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
        localStorage.setItem('targetDate', targetDate);
    } else{
        targetDate = parseInt(targetDate, 10);
    }

    const interval = setInterval(function (){
        const now = new Date().getTime();
        const distance = targetDate - now;

        if(distance <= 0){
            targetDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
            localStorage.setItem('targetDate', targetDate);
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 *60 * 60));
        const minutes = Math.floor((distance % (1000 * 60* 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;

    }, 1000);
}

startCountdown();