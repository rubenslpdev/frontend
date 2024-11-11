//////////////////////////
// Botão "IR PARA O TOPO"
//////////////////////////

let mybutton = document.getElementById('topButton');

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

/////////////////////////////////////////
// Animação cards de projetos e timeline
/////////////////////////////////////////

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
      threshold: 0.2, // O elemento será considerado visível quando 20% dele estiver na viewport
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});

//////////////////////////////////////////////////
// Mover botão de download para fim da .timeline
//////////////////////////////////////////////////

window.addEventListener('resize', function () {
  const button = document.querySelector('.download-button');
  const intro = document.querySelector('.curriculo-intro');
  const resume = document.querySelector('.curriculo-resume');

  if (window.innerWidth <= 768) {
    // Move o botão para após a timeline
    resume.appendChild(button);
  } else {
    // Move o botão de volta para após o título
    intro.appendChild(button);
  }
});

// Executa a função ao carregar a página para garantir o comportamento correto desde o início
window.dispatchEvent(new Event('resize'));

///////////////////////////////
// Language Button
///////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  const langButton = document.getElementById('lang-button');

  // Adiciona a classe 'hover-effect' logo após carregar a página
  langButton.classList.add('hover-effect');

  // Remove a classe 'hover-effect' após 3 segundos (3000 milissegundos)
  setTimeout(function () {
    langButton.classList.remove('hover-effect');
  }, 2000); // Ajuste o tempo como preferir
});
