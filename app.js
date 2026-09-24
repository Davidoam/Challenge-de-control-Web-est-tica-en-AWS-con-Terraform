document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.artist-card').forEach(card=>{
    const btn = card.querySelector('.toggle');
    btn.addEventListener('click', ()=>{
      // toggle open class
      const opened = card.classList.toggle('open');
      btn.textContent = opened ? 'Ocultar' : 'Ver más';
    });
  });

  // accesibilidad: permitir abrir con tecla Enter en botones
  document.querySelectorAll('.toggle').forEach(b=>{
    b.setAttribute('role','button');
  });
});
