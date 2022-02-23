Let stars = document.getElementById('stars');
Let logo = document.getElementById('logo');
Let text = document.getElementById('text');
Let bttn = document.getElementById('bttn');

window.AddEventListener ('scroll', function(){
Let value = window.scrollY;
stars.style.left = value * 100.25 + 'px';
logo.style.top = value * 100.25 + 'px';
}
