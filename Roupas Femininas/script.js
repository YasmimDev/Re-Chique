// Obter a URL atual
const currentUrl = window.location.pathname;

// Selecionar todos os links de navegação
const navLinks = document.querySelectorAll('.dropdown-content a');

// Percorrer todos os links de navegação
navLinks.forEach(link => {
  // Verificar se o href do link corresponde à URL atual
  if (link.getAttribute('href') === currentUrl) {
    // Adicionar a classe 'active' ao link correspondente
    link.classList.add('active');
  }
});