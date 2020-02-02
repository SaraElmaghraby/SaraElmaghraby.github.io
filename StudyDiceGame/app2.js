// JavaScript source code
///1-the initialization :-
//a-hide the dice img
//b-zero the scores and the current
function initialize() {
    var scores = [0, 0];//score[0]=> player1 score , score[1]=>player2 score
    var currentScore = 0;
    var activeplayer = 0;
    GameIsActive = true;
    document.getElementById('diceGame').style.display = 'none';//hide the img
    document.getElementById('score-0').innerText = '0';
    document.getElementById('score-1').innerText = '0';
    document.getElementById('current-0').innerText = '0';
    document.getElementById('current-1').innerText = '0';



}