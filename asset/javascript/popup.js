document.addEventListener("DOMContentLoaded", function(){
    const popup = document.querySelector('.popup');
    const subscribeBtn = document.querySelector("input[type='submit']");
    const exitIcon = document.querySelector('.exit-icon');

    subscribeBtn.addEventListener('click', function (event){
        event.preventDefault();
        popup.style.display = "flex";
    })

    exitIcon.addEventListener('click', function(){
        popup.style.display = "none";
    })
});