const tombolUbahWarna = document.getElementById('tombolUbahWarna');
tombolUbahWarna.onclick = function() {
    document.body.classList.toggle('warna1');
};

const tombolAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Tombol Untuk Acak Warna');
tombolAcakWarna.appendChild(teksTombol);
tombolAcakWarna.setAttribute('type', 'button');
tombolUbahWarna.after(tombolAcakWarna);

tombolAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb( '+ r +', '+ g +', '+ b +' )';
});


const sMerah = document.getElementById('sMerah');
const sHijau = document.getElementById('sHijau');
const sBiru = document.getElementById('sBiru');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb( '+ r +', '+ g +', '+ b +' )';

});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb( '+ r +', '+ g +', '+ b +' )';

});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb( '+ r +', '+ g +', '+ b +' )';

});

const mouse = document.getElementById('gMouse');
mouse.addEventListener('mousemove', function(e) {
    const posisiX = Math.round((e.clientX / window.innerWidth) * 255 );
    const posisiY = Math.round((e.clientY / window.innerHeight) * 255 );
    mouse.style.backgroundColor = 'rgb('+ posisiX +', '+ posisiY +', '+ 100 +' )'
});