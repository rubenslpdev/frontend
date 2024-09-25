//
// Botão "IR PARA O TOPO"
//

let mybutton = document.getElementById('topButton');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//
// Animação cards de projetos
//

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card-animate');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3, // O elemento será considerado visível quando 30% dele estiver na viewport
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});
