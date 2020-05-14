var mapxco = 0;
var mapyco = 3;
var mapmain = [
    [0,7],
    [0,6],
    [2,3],
    [1,4],
    [5,0]
];

var combat = false;

document.addEventListener("keypress", function(event) {
    if (combat === false) {
        var oob = false;
        if (event.key === "w") {
            yco--;
            if ((gamemap[yco][xco] === 1) || (gamemap[yco][xco] === 3) || (gamemap[yco][xco] === 5)) {
                yco++;
            }
            gateupcheck((mapmain[mapyco][mapxco]));

        } else if (event.key === "a") {
            xco--;
            if ((gamemap[yco][xco] === 1) || (gamemap[yco][xco] === 3) || (gamemap[yco][xco] === 5)) {
                xco++;
            }

        } else if (event.key === "s") {
            yco++;
            if ((gamemap[yco][xco] === 1) || (gamemap[yco][xco] === 3) || (gamemap[yco][xco] === 5)) {
                yco--;
            }

        } else if (event.key === "d") {
            xco++;
            if ((gamemap[yco][xco] === 1) || (gamemap[yco][xco] === 3) || (gamemap[yco][xco] === 5)) {
                xco--;
            }
        }
        chestcheck((mapmain[mapyco][mapxco]));
        keycheck((mapmain[mapyco][mapxco]));
        if (xco === 1 || xco === 11 || yco === 1 || yco === 11) {
            if (xco === 1) {
                mapxco--;
                xco = 11;
            } else if (xco === 11) {
                mapxco++;
                xco = 1;
            } else if (yco === 1) {
                mapyco--;
                yco = 11;
            } else if (yco === 11) {
                mapyco++;
                yco = 1;
            }
        }
        changemap((mapmain[mapyco][mapxco]));
    }
})