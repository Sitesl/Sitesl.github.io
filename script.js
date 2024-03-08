// Simulação de um valor inicial para o lance mais alto
let highestBid = 1000;

// Atualiza o valor atual do lance mais alto na página
function updateHighestBid() {
    const highestBidElement = document.getElementById('highestBid');
    highestBidElement.textContent = highestBid.toFixed(2);
}

// Lida com o formulário de lance
document.getElementById('bidForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const bidAmount = parseFloat(document.getElementById('bidAmount').value);

    // Verifica se o lance é maior que o lance mais alto e atende ao incremento mínimo
    if (bidAmount > highestBid && (bidAmount - highestBid) % 50 === 0) {
        highestBid = bidAmount;
        updateHighestBid();
        alert('Lance realizado com sucesso!');
    } else {
        alert('Valor do lance inválido. O lance deve ser maior que o lance mais alto e atender ao incremento mínimo de R$ 50,00.');
    }
});

// Função para atualizar o cronômetro de contagem regressiva
function updateCountdown() {
    const now = new Date();
    const endDate = new Date("2024-03-15T00:00:00"); // Data de término do leilão
    const timeRemaining = endDate - now;

    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').textContent = "Leilão encerrado";
    }
}

// Atualiza o cronômetro a cada segundo
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
