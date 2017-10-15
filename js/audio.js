// bodyDrops.mp3
// complexBleepSequence.mp3
// crowd.mp3
// ding.mp3
// lose.mp3
// monkeyBeatsNinja.mp3
// monkeyBeatsRobot.mp3
// ninjaBeatsPirate.mp3
// ninjaBeatsZombie.mp3
// pirateBeatsMonkey.mp3
// pirateBeatsMonkey-cannon.mp3
// pirateBeatsRobot.mp3
// pleasantMessageDing.mp3
// punch1.mp3
// punch2.mp3
// punch3.mp3
// revealCPUChoice.mp3
// robotBeatsNinja.mp3
// robotCrushesZombieMaybe.mp3
// speechFight.mp3
// speechLose.mp3
// speechPerfect.mp3
// speechWin.mp3
// swordSlash.mp3
// zombieBeatsMonkey.mp3
// zombieBeatsPirate.mp3
// zombieDeath.mp3
var sound;
var soundInstance;

function loadAudio() {
    createjs.Sound.on("fileload", handleFileLoad);

    createjs.Sound.registerSounds(
        [
            {id: "bodyDrops", src: "bodyDrops.mp3"},
            {id: "complexBleepSequence", src: "complexBleepSequence.mp3"},
            {id: "crowd", src: "crowd.mp3"},
            {id: "ding", src: "ding.mp3"},
            {id: "lose", src: "lose.mp3"},
            {id: "monkeyBeatsNinja", src: "monkeyBeatsNinja.mp3"},
            {id: "monkeyBeatsRobot", src: "monkeyBeatsRobot.mp3"},
            {id: "ninjaBeatsPirate", src: "ninjaBeatsPirate.mp3"},
            {id: "ninjaBeatsZombie", src: "ninjaBeatsZombie.mp3"},
            {id: "pirateBeatsMonkey", src: "pirateBeatsMonkey.mp3"},
            {id: "pirateBeatsMonkey-cannon", src: "pirateBeatsMonkey-cannon.mp3"},
            {id: "pirateBeatsRobot", src: "pirateBeatsRobot.mp3"},
            {id: "pleasantMessageDing", src: "pleasantMessageDing.mp3"},
            {id: "punch1", src: "punch1.mp3"},
            {id: "punch2", src: "punch2.mp3"},
            {id: "punch3",  src: "punch3.mp3"},
            {id: "revealCPUChoice", src: "revealCPUChoice.mp3"},
            {id: "robotBeatsNinja", src: "robotBeatsNinja.mp3"},
            {id: "robotCrushesZombieMaybe", src: "robotCrushesZombieMaybe.mp3"},
            {id: "speechFight", src: "speechFight.mp3"},
            {id: "speechLose", src: "speechLose.mp3"},
            {id: "speechPerfect", src: "speechPerfect.mp3"},
            {id: "speechWin", src: "speechWin.mp3"},
            {id: "swordSlash", src: "swordSlash.mp3"},
            {id: "zombieBeatsMonkey", src: "zombieBeatsMonkey.mp3"},
            {id: "zombieBeatsPirate", src: "zombieBeatsPirate.mp3"},
            {id: "zombieDeath", src: "zombieDeath.mp3"},
            {id: "actionTheme", src: "actionTheme.mp3"},
            {id: "happyTheme", src: "happyTheme.mp3"},
            {id: "introTheme", src: "introTheme.mp3"},
            {id: "simpleDrumBeat", src: "simpleDrumBeat.mp3"},
            {id: "thickTheme", src: "thickTheme.mp3"}
        ], "audio/");
}

function handleFileLoad(event){


    soundInstance = createjs.Sound.play("happyTheme");
}

function playSound(target){
    if(soundInstance.muted == null){
        soundInstance = createjs.sound.play(target);
    }
    if(soundInstance.muted){
        soundInstance = createjs.Sound.stop();
        soundInstance = createjs.Sound.play(target);
        soundInstance.muted = true;
    }else{
        soundInstance = createjs.Sound.stop();
        soundInstance = createjs.Sound.play(target);
    }
}

function toggleSound(){
    if(soundInstance.muted){
        soundInstance.muted = false;
    }else{
        soundInstance.muted = true;
    }
}
