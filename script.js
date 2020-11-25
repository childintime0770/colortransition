firstDiv = document.getElementById("first");
secondDiv = document.getElementById("second");
thirdDiv = document.getElementById("third");
fourthDiv = document.getElementById("fourth");

function move(element, direction, pixel) {
    element.style[direction] = pixel + "px";
}

function startMoving(element, direction, from, to) {
    let myInterval = setInterval(() => {
        
        move(element, direction, from);
        if(from === to){
            clearInterval(myInterval);
        }
        if(from<to){
            from++;
        }else {
            from--;
        }
        
    }, 10)
}

startMoving(firstDiv, "left", 0, 250);
startMoving(secondDiv, "top", 0, 250);
startMoving(thirdDiv, "left", 250, 0);
startMoving(fourthDiv, "top", 250, 0);