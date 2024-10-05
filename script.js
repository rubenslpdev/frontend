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
// Scroll automático na página
///////////////////////////////

// document.addEventListener('DOMContentLoaded', function () {
//   if (window.matchMedia('(min-width: 768px)').matches) {
//     //Roda apenas se a tela tiver pelo menos 768px
//     const sections = document.querySelectorAll('section');
//     let currentIndex = 0;
//     let isScrolling = false;
//     let lastScrollTime = 0;
//     const scrollCooldown = 1000; // Tempo de espera entre scrolls em milissegundos

//     function scrollToSection(index) {
//       if (index < 0 || index >= sections.length || isScrolling) return;

//       const now = Date.now();
//       if (now - lastScrollTime < scrollCooldown) return;

//       isScrolling = true;
//       lastScrollTime = now;

//       sections[index].scrollIntoView({ behavior: 'smooth' });
//       currentIndex = index;

//       setTimeout(() => {
//         isScrolling = false;
//       }, scrollCooldown);
//     }

//     function handleScroll(direction) {
//       const newIndex = currentIndex + direction;
//       scrollToSection(newIndex);
//     }

//     // Detecta o scroll do mouse
//     window.addEventListener(
//       'wheel',
//       function (e) {
//         e.preventDefault(); // Previne o scroll padrão
//         const direction = e.deltaY > 0 ? 1 : -1;
//         handleScroll(direction);
//       },
//       { passive: false }
//     );

//     // Detecta as teclas de seta
//     window.addEventListener('keydown', function (e) {
//       if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
//         e.preventDefault(); // Previne o comportamento padrão das teclas
//         const direction = e.key === 'ArrowDown' ? 1 : -1;
//         handleScroll(direction);
//       }
//     });

//     // Ajuste do índice ao redimensionar a tela
//     window.addEventListener('resize', function () {
//       scrollToSection(currentIndex);
//     });

//     // Scroll para a seção mais próxima quando a página carrega
//     function scrollToNearestSection() {
//       const viewportMiddle = window.innerHeight / 2;
//       let nearestSection = 0;
//       let minDistance = Infinity;

//       sections.forEach((section, index) => {
//         const rect = section.getBoundingClientRect();
//         const distance = Math.abs(rect.top + rect.height / 2 - viewportMiddle);
//         if (distance < minDistance) {
//           minDistance = distance;
//           nearestSection = index;
//         }
//       });

//       scrollToSection(nearestSection);
//     }

//     scrollToNearestSection();
//   }
// });

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
