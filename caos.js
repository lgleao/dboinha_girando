// Seleciona todas as imagens da página (retorna uma NodeList)
const imagens = document.querySelectorAll('.galeria img');

// Dispara os confetes assim que a página carrega
confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});

function embaralharImagens() {
    imagens.forEach((img) => {
        // Gera um número inteiro aleatório entre 1 e 100
        const ordemAleatoria = Math.floor(Math.random() * 100);
        
        // Altera a ordem do elemento dentro do container CSS Grid
        img.style.order = ordemAleatoria;
    });
}

// Executa a função de embaralhar a cada 300 milissegundos (0.3s)
setInterval(embaralharImagens, 300);