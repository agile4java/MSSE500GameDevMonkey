var peckingOrder = ["pirate", "monkey", "robot", "ninja", "zombie"];
var score1 = 0;
var scoreCPU = 0;
var imgData;

function newGame(){

    loadAudio();
    setup();
    var canvasGB = document.getElementById("gameBoard");
    var inst = canvasGB.getContext("2d");
    inst.font = "25px Galaxy Monkey";
    inst.fillStyle = "white";
    inst.fillText("Play to Five", 350, 575);

}


function setup(){
// <img class="dude" id="monkey" src="images/monkey.png" height="75">
//         <img class="dude" id="ninja" src="images/ninja.png" height="75">
//         <img class="dude" id="pirate" src="images/pirate.png" height="75">
//         <img class="dude" id="robot" src="images/robot.png" height="75">
//         <img class="dude" id="zombie" src="images/zombie.png" height="75">
    scoreBoard = document.getElementById("scoreBoard");
    scrBrd = scoreBoard.getContext("2d");
    scrBrd.clearRect(10, 10, 815, 90);
    scrBrd.font = "35px Galaxy Monkey";
    scrBrd.fillText("Monkey-Robot-Pirate-Ninja-Zombie!!", 30, 40);
    scrBrd.font = "20px Galaxy Monkey";
    scrBrd.fillText(("Player 1 : 0" + score1), 30, 80);
    scrBrd.fillText(("CPU:  0" + scoreCPU), 700, 80);
    document.getElementById("dudes");
    for(i = 0; i < 5; i++){
        var drawThis = peckingOrder[i];
        var drawImg = document.createElement("IMG");
        var attClass = document.createAttribute("class");
        attClass.value = "dude";
        drawImg.setAttributeNode(attClass);
        var attID = document.createAttribute("ID");
        attID.value = drawThis;
        drawImg.setAttributeNode(attID);
        var attSrc = document.createAttribute("SRC");
        attSrc.value = "images/" + drawThis + ".png";
        drawImg.setAttributeNode(attSrc);
        var attH = document.createAttribute("HEIGHT");
        attH.value = 75;
        drawImg.setAttributeNode(attH);
        var dudesDiv = document.getElementById("dudes");
        dudesDiv.appendChild(drawImg);
    }
    var playerOne = document.getElementById("playerOne");
    var plrOne = playerOne.getContext("2d");
    plrOne.clearRect(0, 0, 350, 400);
    plrOne.font = "25px Galaxy Monkey";
    plrOne.fillText("Player One", 90, 30);
    var playerTwo = document.getElementById("playerTwo");
    var plrTwo = playerTwo.getContext("2d");
    plrTwo.clearRect(0, 0, 350, 400);
    plrTwo.font = "25px Galaxy Monkey";
    plrTwo.fillText("CPU", 140, 30);

    var monkey = document.getElementById("monkey");
    monkey.addEventListener("mouseenter", function(){showRule("monkey")});
    monkey.addEventListener("mouseleave", function(){clearRule()});
    monkey.addEventListener("click", function(){plyr1Choice("monkey")});

    var ninja = document.getElementById("ninja");
    ninja.addEventListener("mouseenter", function(){showRule("ninja")});
    ninja.addEventListener("mouseleave", function(){clearRule()});
    ninja.addEventListener("click", function(){plyr1Choice("ninja")});

    var pirate = document.getElementById("pirate");
    pirate.addEventListener("mouseenter", function(){showRule("pirate")});
    pirate.addEventListener("mouseleave", function(){clearRule()});
    pirate.addEventListener("click", function(){plyr1Choice("pirate")});

    var robot = document.getElementById("robot");
    robot.addEventListener("mouseenter", function(){showRule("robot")});
    robot.addEventListener("mouseleave", function(){clearRule()});
    robot.addEventListener("click", function(){plyr1Choice("robot")});

    var zombie = document.getElementById("zombie");
    zombie.addEventListener("mouseenter", function(){showRule("zombie")});
    zombie.addEventListener("mouseleave", function(){clearRule()});
    zombie.addEventListener("click", function(){plyr1Choice("zombie")});
    
}

function showRule(dude) {
    playSound("simpleDrumBeat");
    var rules = document.getElementById("rules");
    var showRule = document.createElement("IMG");
    var picToGet = "images/" + dude + "Beats.png";
    showRule.setAttribute("src", picToGet);
    showRule.setAttribute("height", "300");
    rules.appendChild(showRule);
}

function clearRule(){
    playSound("happyTheme")

    var rules = document.getElementById("rules");
    while(rules.hasChildNodes()){
        rules.removeChild(rules.firstChild);
    }
}

function plyr1Choice(choice1){
    console.log("function plyr1Choice");
    document.getElementById(choice1).style.border = "5px dotted red";
    // var playerOne = document.getElementById("playerOne");
    // var plrOne = playerOne.getContext("2d");
    // var choiceImage = new Image(150, 250);
    // choiceImage.src = "images/" + choice1 + ".png";
    var canvasOne = document.getElementById("playerOne");
    var ctxOne = canvasOne.getContext("2d");
    var imgOne = new Image(150, 200);
    imgOne.src =   "images/" + choice1 + ".png";
    console.log("function plyr1Choice imgOne = " + imgOne);
    var index = Math.floor(Math.random() * 5);
    var cpuChoice = peckingOrder[index];
    var canvasTwo = document.getElementById("playerTwo");
    var ctxTwo = canvasTwo.getContext("2d");
    var imgTwo = new Image(150, 200);
    imgTwo.src = "images/" + cpuChoice + ".png";
    console.log("function plyr1Choice imgTwo = " + imgTwo);
    var dw = 0;
    var dh = 0;
    var dx = 0;
    var dy = 0
    var id = setInterval(frame, 5);
    function frame(){
        if(dw == 150){
            clearInterval(id);
        } else{
            dw += 1.5;
            dh += 2;
            dx += 0.75;
            dy += 1;
            ctxOne.drawImage(imgOne, (175-dx), (200-dy), dw, dh);
            ctxTwo.drawImage(imgTwo, (175-dx), (200-dy), dw, dh);
        }
    }


    var x = document.getElementById("dudes");
    while(dudes.hasChildNodes()){
        dudes.removeChild(dudes.firstChild);
    }
    getWinner(choice1, cpuChoice);
}//end function plyr1Choice

function getWinner(choice1, cpuChoice){
    // var peckingOrder = ["pirate", "monkey", "robot", "ninja", "zombie"];
    console.log(" choice1 & cpuChoice = " + choice1 + "  " + cpuChoice);
    var index1;
    var index2;
    for(i = 0; i < 5; i++){
        if(choice1 == peckingOrder[i]){
            index1 = i;
        }
        if(cpuChoice == peckingOrder[i]){
            index2 = i;
        }
    }//end for loop

    console.log("index1 = " + index1);
    console.log("index2 = " + index2);
    var modalText = document.getElementById("modalText");
    var modalMsg;
    if(index1 == index2){
        modalMsg = "It's a Tie!!";
    }else if((index1 + 1) == index2 || (index1 + 2) == index2 ||
        (index1 - 4) == index2 || (index1 - 3) == index2){
        //player1 wins
        modalMsg = "** " + choice1 + " beats " + cpuChoice + " **" +
            " Player 1 Wins!!";
            score1++;
    }else{
        //cpu wins
        modalMsg = "XX " + cpuChoice + " beats " + choice1 + "  XX" +
            " CPU Wins";
        scoreCPU++
    }
    document.getElementById("modalText").style.font = "40px Galaxy Monkey";
    modalText.innerHTML = modalMsg;
    var modal = document.getElementById("whoWon");
    var span = document.getElementsByClassName("close")[0];
    setTimeout(showModal, 2000);
    function showModal(){
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
        var rules = document.getElementById("rules");
        while(rules.hasChildNodes()) {
            rules.removeChild(rules.firstChild);
        }
        endOfTurn();
    }//end span.onclick function
}//end function getWinner

function endOfTurn() {
    var modalText = document.getElementById("modalText");
    var modalMsg;
    modalText.style.font = "40px Galaxy Monkey";
    if (score1 == 5) {
        modalMsg = "Congratulations!! You Win!!";
    }else if (scoreCPU == 5) {
        modalMsg = "Sorry you lose!!";
    }else{
        setup();
        return;
    }
    modalText.innerHTML = modalMsg;
    var modal = document.getElementById("whoWon");
    var span = document.getElementsByClassName("close")[0];
    setTimeout(showModal, 2000);
    function showModal() {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
        score1 = 0;
        scoreCPU = 0;
        setup();
    }

}

