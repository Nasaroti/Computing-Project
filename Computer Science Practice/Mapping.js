var ctx = null;
var tileW = 32;
var tileH = 32;
var mapW = 13;
var mapH = 13;

var xco = 3;
var yco = 3;

var grass = new Image();
grass.src = "Images/Background - Grass.png";
var forest = new Image();
forest.src = "Images/Background - Forest.png";
var hero = new Image();
hero.src = "Images/Hero - Knight.png";
var chest = new Image();
chest.src = "Images/Item - Chest.png";
var key = new Image();
key.src = "Images/Item - Key.png";
var gatec = new Image();
gatec.src = "Images/Background - Gate.png";
var gateo = new Image();
gateo.src = "Images/Background - Open Gate.png";
var mfloor = new Image();
mfloor.src = "Images/Background - Mountains Floor.png";
var mountain = new Image();
mountain.src = "Images/Background - Mountains.png";
var castle = new Image();
castle.src = "Images/Background - Castle.png"
var dgrass = new Image();
dgrass.src = "Images/Background - Dark Grass.png";

var c1 = true;
var c2 = true;
var c3 = true;
var k1 = true;
var g1 = true;

var gamemap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 8, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 8, 8, 8, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

window.onload = function() {
    ctx = document.getElementById("game").getContext("2d");
    drawGame();
}

function drawGame() {
    if (ctx == null) {return;}
    for(var y = 0; y < mapH; y++){
        for(var x = 0; x < mapW; x++){
            switch(gamemap[y][x]){
                case 0:
                    ctx.drawImage(grass, x*tileW, y*tileH, tileW, tileH);
                    break;
                case 1:
                    ctx.drawImage(forest, x*tileW, y*tileH, tileW, tileH);
                    break;
                case 2:
                    ctx.drawImage(forest, x*tileW, y*tileH, tileW, tileH);
                    break;
                case 3:
                    ctx.drawImage(gatec, x*tileW, y*tileH, tileW, tileH);
                    break;
                case 4:
                    ctx.drawImage(gateo, x*tileW, y*tileH, tileW, tileH);
                    break;
                case 5:
                    ctx.drawImage(mountain, x*tileW, y*tileH, tileW, tileH);
                    break;
                case 6:
                    ctx.drawImage(mfloor, x*tileW, y*tileH, tileW, tileH);
                    break;
                case 7:
                    ctx.drawImage(castle, x*tileW, y*tileH, tileW, tileH);
                    break;
                case 8:
                    ctx.drawImage(dgrass, x*tileW, y*tileH, tileW, tileH);
            }
        }
    }
    ctx.drawImage(hero, xco * 32, yco * 32, 32, 32);
    if (holdingkey === true) {
        ctx.fillStyle = ("#000000");
        ctx.fillRect(14, 366, 36, 36);
        ctx.fillStyle = ("#FFFFFF");
        ctx.fillRect(16, 368, 32, 32);
        ctx.drawImage(key, 16, 368, 32, 32);
    }
}

function changemap(map){
    switch (map) {
        case 1:
            gamemap = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 8, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 8, 8, 8, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];
            drawGame();
            break;
        case 2:
            gamemap = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];
            drawGame();
            break;
        case 3:
            gamemap = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1],
                [1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
                [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                ];
            drawGame();
            if (k1 === true) {ctx.drawImage(key, 6*tileW, 6*tileH, tileW, tileH);}
            break;
        case 4:
            gamemap = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
                [1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
                [1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];
            drawGame();
            break;
        case 5:
            gamemap = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];
            drawGame();
            if (c1 === true) {ctx.drawImage(chest, 6*tileW, 7*tileH, tileW, tileH);}
            if (c2 === true) {ctx.drawImage(chest, 5*tileW, 6*tileH, tileW, tileH);}
            if (c3 === true) {ctx.drawImage(chest, 7*tileW, 6*tileH, tileW, tileH);}
            break;
        case 6:
            gamemap = [
                [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                [1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];
            if (g1 === false) {gamemap[1][6] = 4;}
            drawGame();
            break;
        case 7:
            gamemap = [
                [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                [5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5],
                [5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5],
                [5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5],
                [5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5],
                [5, 5, 6, 6, 6, 6, 7, 6, 6, 6, 6, 5, 5],
                [5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5],
                [5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5],
                [5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5],
                [5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5],
                [5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 5],
                [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
            ];
            drawGame();
            break;

    }
}

