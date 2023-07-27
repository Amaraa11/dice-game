// Togloglogchiin eeljiig hadgalah huvisagch, 1-r toglogchiig 0, 2-r toglogchiig 1 gej temdegley
var activePlayer = 0;


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
// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
    //1-6 dotorh sanamsargui 1 too buulgah
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //shoonii zurgiig web deer gargaj irne
    diceDom.style.display = "block";
    //buusan shoonii toond hargalzan shoonii zurgiig web deer gargaj irne
    diceDom.src = "dice-" + diceNumber + ".png";
    //Buusan too ni 1ees yalgaatai bol idvehtei toglogchiin eeljiin onoog nemegduulne
    if (diceNumber !== 1) {
        // 1ees yalgaatai too buulaa. Buusan toog toglogchid nemj ogno.
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;


    } else {
        // 1 buusan tul toglogchiin eeljiig ene hesegt solij ogno.
        switchToNextPlayer();
    
    }
});

//HOLD tovchnii event listenting
document.querySelector(".btn-hold").addEventListener("click", function () {
    // Ug toglogchiin tsugluulsan eeljnii onoog global onoon deer nemj ogno.
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Delgets deer onoog oorchilno.
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
  
    // Ug toglogchiin hojson esehiis (onoo ni 100-s ih eseh) shalgah.
    if (scores[activePlayer] >= 20) {
        // Ylagch gesen textiig nerniih ni orond gargana.
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
        // Toglogchiin eeljiig solino.
        switchToNextPlayer();
    }
});

// Ene function ni togloh eeljiig daraachiin toglogchruu shiljuuldeg
function switchToNextPlayer() {
     // Eeljiin onoog ni 0 bolgono.
    // Toglogchiin eeljiig solino.
    roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;

        // toglogchiin eeljiig nogoo talruu shiljuulne
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        //Ulaan tsegiig shiljuuleh
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //shoog tur alga bolgoh
        diceDom.style.display = "none";
};
