document.addEventListener('DOMContentLoaded', function() {

    // Exemplo de adicionar um efeito de scroll suave nos links da navegação

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {

        link.addEventListener('click', function(event) {

            event.preventDefault();

            const targetId = this.getAttribute('href');

            const targetElement = document.querySelector(targetId);

            if (targetElement) {

                targetElement.scrollIntoView({ behavior: 'smooth' });

            }

        });

    });

    // Você pode adicionar mais funcionalidades aqui, como validação de formulário,

    // animações sutis, etc.

});

