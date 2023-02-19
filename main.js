let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let montains1 = document.getElementById('montains1');
let mountains2 = document.getElementById('mountains2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let montains3 = document.getElementById('montains3');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    montains1.style.top = value * 2 + 'px';
    mountains2.style.top= value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    if(scrollY >= 67){
        Traveling.style.fontSize = 67 + 'px';
        Traveling.style.position = fixed;
    }
}