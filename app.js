// Togloglogchiin eeljiig hadgalah huvisagch, 1-r toglogchiig 0, 2-r toglogchiig 1 gej temdegley
var activePlayer = 1;


// Toglogchiin tsugluulssan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglohchiin eeljindee tsugluulj baigaa onoog hadgalah huvisagch
var roundScore = 0;

// Shoomii ali talaaraa buusniig hadgalah huvisagch heregtei, 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ogno.


// <div class="player-score" id="score-0">43</div>


//document.querySelector('#score-1').innerHTML = '<em>Yes!<em>';
document.getElementById('score-1').textContent = "0";
document.getElementById('score-0').textContent = "0";

document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png" ;
});




// console.log("Shoo :" + diceNumber);