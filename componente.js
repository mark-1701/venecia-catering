//funcion reutilizable para cargar el header en todas las paginas
document.addEventListener('DOMContentLoaded', function () {
  const headerContainer = document.querySelector('#header-container');
  fetch('header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el header');
      }
      return response.text();
    })
    .then(data => {
      headerContainer.innerHTML = data;
    });
});
//funcion reutilizable para cargar el footer en todas las paginas
document.addEventListener('DOMContentLoaded', function () {
  const headerContainer = document.querySelector('#footer-container');
  fetch('footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el header');
      }
      return response.text();
    })
    .then(data => {
      headerContainer.innerHTML = data;
    });
});
