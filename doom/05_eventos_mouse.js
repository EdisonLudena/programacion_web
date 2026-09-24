const caja = document.getElementById('caja');

caja.addEventListener('mouseover', () =>{
    caja.style.background = 'yellow';
    caja.textContent = "Producto seleccionado";
});

caja.addEventListener('mouseout', () => {
    caja.style.background = 'green';
    caja.textContent = "Producto en Stock";
});

caja.addEventListener('click', () => {
    alert('Has hecho click');
});

const areaTouch = document.getElementById('areaTouch');

areaTouch.addEventListener('touchstart', () => {
    areaTouch.style.background = 'red';
    areaTouch.textContent = "Registrando .......";
});