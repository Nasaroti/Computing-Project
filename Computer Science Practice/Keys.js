var holdingkey = false;

function keycheck(map) {
    if (map === 3) {

        if (k1 === true) {
            if (xco === 6 && yco === 6) {
                k1 = false;
                holdingkey = true;
            }
        }
    }
}

function gateupcheck(map) {
    if (map === 6) {
        if ((gamemap[yco - 1][xco] === 3) && (holdingkey === true)) {
            holdingkey = false;
            g1 = false ;
        }
    }
}