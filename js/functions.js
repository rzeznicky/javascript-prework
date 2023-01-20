function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function printResult(playerScore, computerScore){
	var div = document.createElement('div');
	document.getElementById('results').innerHTML = '';
	div.innerHTML = 'Gracz ' + playerScore + ' - ' + computerScore + ' Komputer';
	document.getElementById('results').appendChild(div);
}