const endDate = new Date();
endDate.setDate(endDate.getDate() + 7);

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

const bidForm = document.getElementById("bid-form");
bidForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const bidName = document.getElementById("bid-name").value;
    const bidAmount = parseInt(document.getElementById("bid-amount").value);
    const currentBid = parseInt(document.getElementById("current-bid").innerText);
    const minIncrement = 10;
    if (bidAmount >= currentBid + minIncrement) {
        document.getElementById("current-bid").innerText = bidAmount;
        addRankingEntry(bidName, bidAmount);
        saveBid(bidName, bidAmount);
        alert("Lance realizado com sucesso!");
    } else {
        alert("O lance deve ser maior que o lance atual mais o incremento mínimo.");
    }
});

function addRankingEntry(name, bidAmount) {
    const rankingBody = document.getElementById("ranking-body");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${name}</td><td>R$ ${bidAmount}</td>`;
    rankingBody.appendChild(newRow);
}

function saveBid(name, amount) {
    const bids = JSON.parse(localStorage.getItem("bids")) || [];
    bids.push({ name, amount });
    localStorage.setItem("bids", JSON.stringify(bids));
}

function loadBids() {
    const bids = JSON.parse(localStorage.getItem("bids")) || [];
    for (const bid of bids) {
        addRankingEntry(bid.name, bid.amount);
        if (bid.amount > parseInt(document.getElementById("current-bid").innerText)) {
            document.getElementById("current-bid").innerText = bid.amount;
        }
    }
}

loadBids();
