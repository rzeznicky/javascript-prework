function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function printResult(playerScore, computerScore){
	// const results = document.getElementById('results');
	// results.textContent = 'Gracz ' + playerScore + ' - ' + computerScore + ' Komputer';
	document.getElementById('results').textContent = 'Gracz ' + playerScore + ' - ' + computerScore + ' Komputer';
}