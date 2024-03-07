const bidForm = document.getElementById('bid-form');
const bidAmountInput = document.getElementById('bid-amount');
const bidHistoryList = document.getElementById('bid-history');

bidForm.addEventListener('submit', function(event) {
event.preventDefault();
const bidAmount = parseInt(bidAmountInput.value);
if (bidAmount > 0) {
const bidItem = document.createElement('li');
bidItem.textContent = `Usuário: ${localStorage.getItem('username')} - Lance: R$ ${bidAmount}`;
bidHistoryList.appendChild(bidItem);
}
});
