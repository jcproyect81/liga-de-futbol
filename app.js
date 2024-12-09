document.addEventListener('DOMContentLoaded', () => {
  const jugadores = document.querySelectorAll('#jugadores li');
  const equipo = document.getElementById('equipo');

  jugadores.forEach(jugador => {
      jugador.addEventListener('click', () => {
          if (equipo.children.length < 5) {
              const clone = jugador.cloneNode(true);
              equipo.appendChild(clone);
              jugador.style.display = 'none';
          } else {
              alert('¡Ya tienes 5 jugadores seleccionados!');
          }
      });
  });
});
