// Definir a data de término do leilão (por exemplo, 7 dias a partir de agora)
const endDate = new Date();
endDate.setDate(endDate.getDate() + 7);

// Atualizar o cronômetro a cada segundo
setInterval(updateTimer, 1000);

function updateTimer() {
    const now = new Date();
    const timeLeft = endDate - now;

    if (timeLeft < 0) {
        document.getElementById("timer").innerText = "Leilão Encerrado";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("timer").innerText = `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
    }
}

// Adicionar controle de incremento mínimo de lance
const bidForm = document.getElementById("bid-form");
bidForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const bidAmount = parseInt(document.getElementById("bid-amount").value);
    const currentBid = parseInt(document.getElementById("current-bid").innerText.replace("R$ ", ""));
    const minIncrement = 10; // Defina o incremento mínimo aqui
    if (bidAmount >= currentBid + minIncrement) {
        // Lógica para processar o lance
        document.getElementById("current-bid").innerText = `R$ ${bidAmount}`;
        // Exibir mensagem de lance bem-sucedido
        alert("Lance realizado com sucesso!");
    } else {
        // Exibir mensagem de lance inválido
        alert("O lance deve ser maior que o lance atual mais o incremento mínimo.");
    }
});
