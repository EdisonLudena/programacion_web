const productos = [
  { nombre: "Laptop Lenovo IdeaPad 3", descripcion: "Core i5, 8GB RAM, 512GB SSD", precio: 750, existencia: 6, ubicacion: "Estante A" },
  { nombre: "Celular Samsung Galaxy S23", descripcion: "128GB, 8GB RAM, cámara 50MP", precio: 950, existencia: 10, ubicacion: "Estante B" },
  { nombre: "Laptop HP Pavilion 15", descripcion: "Core i7, 16GB RAM, 1TB SSD", precio: 1100, existencia: 4, ubicacion: "Estante C" },
  { nombre: "MacBook Air M2", descripcion: "256GB SSD, 8GB RAM", precio: 1350, existencia: 3, ubicacion: "Estante D" },
  { nombre: "Celular iPhone 15 Pro", descripcion: "256GB, cámara 48MP", precio: 1200, existencia: 5, ubicacion: "Estante E" },
  { nombre: "Laptop Acer Aspire 5", descripcion: "Ryzen 5, 12GB RAM, 512GB SSD", precio: 680, existencia: 8, ubicacion: "Estante F" },
  { nombre: "Celular Xiaomi 13T", descripcion: "256GB, 12GB RAM, pantalla AMOLED", precio: 600, existencia: 12, ubicacion: "Estante G" },
  { nombre: "Laptop ASUS TUF Gaming", descripcion: "Ryzen 7, RTX 4060, 1TB SSD", precio: 1450, existencia: 2, ubicacion: "Estante H" },
  { nombre: "Celular Motorola Edge 40", descripcion: "256GB, cámara dual, 5G", precio: 580, existencia: 9, ubicacion: "Estante I" },
  { nombre: "Laptop Dell Inspiron 14", descripcion: "Core i5, 8GB RAM, 512GB SSD", precio: 720, existencia: 7, ubicacion: "Estante J" },
  { nombre: "PROBANDO", descripcion: "Core i5, 8GB RAM, 512GB SSD", precio: 720, existencia: 7, ubicacion: "Estante J" }
];


const tabla = document.getElementById('cuerpoTabla');

productos.forEach(p =>{
    const fila = document.createElement('tr');

    fila.innerHTML = `
    <td>${p.nombre}</td>
    <td>${p.descripcion}</td>
    <td>${p.precio}</td>
    <td>${p.existencia}</td>
    <td>${p.ubicacion}</td>
    `;

    tabla.appendChild(fila);
});