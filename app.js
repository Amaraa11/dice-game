// Togloomiin buh gazar ashiglagdah global huvisagchiig end zarlay.
// Togloom duussan esehiig hadgalah toloviin huvisagch.
var isNewGame;

// Ali toglogchin shoo hayh eelj ve gedgiig todorhoilno.
var activePlayer;

// Hoyr toglogchiin tsugluulsan onoo
var scores;

// idevhtei toglogchiin tsugluulj baigaa eeljiin onoo.
var roundScore;

// Shoonii zurgiig uzuuleh elementiig DOW-oos haij olood end hadgalay.
var dice1Dom = document.querySelector(".dice1");
var dice2Dom = document.querySelector(".dice2");

// Togloomiig ehluulne
initGame();

// Shine togloomiig ehluuleh tovchnii event listener
function initGame() {
    // Togloom shineer ehlehed beltgene.
    isNewGame = true;
// Togloglogchiin eeljiig hadgalah huvisagch, 1-r toglogchiig 0, 2-r toglogchiig 1 gej temdegley
activePlayer = 0;

// Toglogchiin tsugluulssan onoog hadgalah huvisagch
scores = [0, 0];

// Toglohchiin eeljindee tsugluulj baigaa onoog hadgalah huvisagch
roundScore = 0;

//document.querySelector('#score-1').innerHTML = '<em>Yes!<em>';
    document.getElementById('score-1').textContent = "0";
    document.getElementById('score-0').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";

    // Toglogchdiin neriig butsaaj gargah
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");

    dice1Dom.style.display = "none";
    dice2Dom.style.display = "none";
}

// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
    if (isNewGame) {
        //2-12 dotorh sanamsargui 2 too buulgah
        var diceNumber1 = Math.floor(Math.random() * 6) + 1;
        var diceNumber2 = Math.floor(Math.random() * 6) + 1;

    //shoonii zurgiig web deer gargaj irne
        dice1Dom.style.display = "block";
        dice2Dom.style.display = "block";

    //buusan shoonii toond hargalzan shoonii zurgiig web deer gargaj irne
        dice1Dom.src = "dice-" + diceNumber1 + ".png";
        dice2Dom.src = "dice-" + diceNumber2 + ".png";

    //Buusan too ni 2 oos yalgaatai bol idvehtei toglogchiin eeljiin onoog nemegduulne
    if (diceNumber1 + diceNumber2 !== 2) {
        // 2oos yalgaatai too buulaa. Buusan toog toglogchid nemj ogno.
        diceNumber = diceNumber1 + diceNumber2;
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;


    } else {
        // 2 buusan tul toglogchiin eeljiig ene hesegt solij ogno.
        switchToNextPlayer();
        } 
    } else {
            alert("Togloom duussan baina. NEW GAME tovchiig darj shineer ehlene uu")
    }
});

//HOLD tovchnii event listenting
document.querySelector(".btn-hold").addEventListener("click", function () {
    if (isNewGame) {
        // Ug toglogchiin tsugluulsan eeljnii onoog global onoon deer nemj ogno.
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Delgets deer onoog oorchilno.
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
  
    // Ug toglogchiin hojson esehiis (onoo ni 100-s ih eseh) shalgah.
    if (scores[activePlayer] >= 1000) {
        // Togloomiig duussan tolovt oruulna
        isNewGame = false;

        // Ylagch gesen textiig nerniih ni orond gargana.
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
        // Toglogchiin eeljiig solino.
        switchToNextPlayer();
    }
   } else {
            alert("Togloom duussan baina. NEW GAME tovchiig darj shineer ehlene uu")
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
    dice1Dom.style.display = "none";
    dice2Dom.style.display = "none";
};

// New Game tovchnii event listener
document.querySelector(".btn-new").addEventListener("click", initGame);
