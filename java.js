///img
document.getElementById('parallax').style.backgroundImage ="url('img/piramides.jpg')";

window.addEventListener('scroll', function(){
    let parallax = document.getElementById('parallax');
    let scrolPosition = window.scrollY;
   
    parallax.style.backgroundPositionY =(scrolPosition * 0.7) + 'px';

 
})