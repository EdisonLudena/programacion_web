const cuadro = document.getElementById('cuadro');

function cambiarColor(){
    const colores = ['#58a6ff', '#ddda21', '#00d42e', '#ff4800', '#ff0325'];
    const randomColor = colores[Math.floor(Math.random() * colores.length)];
    cuadro.style.backgroundColor = randomColor;
}

function aumentarTamano(){
    const width = parseInt(cuadro.style.width);
    const height = parseInt(cuadro.style.height);
    cuadro.style.width = (width + 20) + 'px';
    cuadro.style.height = (height + 20) + 'px';
}

function reinciar(){
     cuadro.style.width = '100px';
     cuadro.style.height = '100px';
     cuadro.style.backgroundColor = 'blueviolet';
}

function disminuir(){
    const width = parseInt(cuadro.style.width);
    const height = parseInt(cuadro.style.height);
    cuadro.style.width = (width - 20) + 'px';
    cuadro.style.height = (height - 20) + 'px';
}