// Roll up simulator

//Event Listener
document.getElementById('once').addEventListener('click', displayMessageOnce);
document.getElementById('5times').addEventListener('click', displayMessageFiveTimes);
document.getElementById('grandprize').addEventListener('click', setGrandPrize);
document.getElementById('500 donuts').addEventListener('click',set500Donuts);

// Event Function
function displayMessageOnce() {        
    //Input
    let province = document.getElementById('province').value;
    let value = Math.random() * 100;

    console.log(value);
    if (province == "BC") {
        if (value < 70) {
            alert("Please play again");
        } else if (value < 80) {
            alert("Free coffee");
        } else if (value < 90) {
            alert("free Donut!");
        } else if (value < 100 ) {
            alert("Prize!");
        }
    } else if (province == "AB") {
        if (value < 15) {
            alert("please play again");
        } else if (value < 55) {
            alert("free coffee!");
        } else if (value < 95) {
         alert("free donut");
        } else if (value < 100) {
            alert("Prize!");
        }
    } else if (province =="SASK") {
        if (value < 70) {
            alert("Please play again");
        } else if (value < 71) {
            alert("Free coffee");
        } else if (value < 72) {
            alert("free Donut!");
        } else if (value < 100 ) {
            alert("Prize!");
        }
    }
}

function displayMessageFiveTimes() {        
    //Input
    let province = document.getElementById('province').value;
    
    for (let i=0; i < 5; i++) {
        let value = Math.random() * 100;
        console.log(value);
        if (province == "BC") {
            if (value < 70) {
                alert("Please play again");
            } else if (value < 80) {
                alert("Free coffee");
            } else if (value < 90) {
                alert("free Donut!");
            } else if (value < 100 ) {
                alert("Prize!");
            }
        } else if (province == "AB") {
            if (value < 15) {
                alert("please play again");
            } else if (value < 55) {
                alert("free coffee!");
            } else if (value < 95) {
             alert("free donut");
            } else if (value < 100) {
                alert("Prize!");
            }
        } else if (province =="SASK") {
            if (value < 70) {
                alert("Please play again");
            } else if (value < 71) {
                alert("Free coffee");
            } else if (value < 72) {
                alert("free Donut!");
            } else if (value < 100 ) {
                alert("Prize!");
            }
        }
    } 
}
function setGrandPrize() {
    let province = document.getElementById('province').value;
    let count = 0;
    let prizeWon = false;

    while (prizeWon == false) {
        let value = Math.random() * 100;

        if (province == "BC") {
            if (value > 90 && value < 100) {
                prizeWon = true;
            }
        } 
        else if (province == "AB") {
            if (value >95 && value < 100) {
                prizeWon = true;
            }
        } else if (province =="SASK") {
            if(value >72 && value <100) {
                prizeWon = true;
            }
        }
        count = count + 1;
    }

    alert( "you have won a garnd prize after " + count + " tries");
}

function set500Donuts() {
    let province = document.getElementById('province').value;
    let count = 0;
    let donutsWon = 0;

    while (donutsWon < 500) {
        let value = Math.random() * 100;

        if (province == "BC") {
            if (value > 80 && value < 90) {
                donutsWon = donutsWon +1;
            }
        } 
        else if (province == "AB") {
            if (value >55 && value < 95) {
                donutsWon = donutsWon +1;
            }
        } 
        else if (province =="SASK") {
            if(value >71 && value <72) {
                donutsWon = donutsWon + 1;
            }
        }
 
        count = count +1
    }

    alert( "you have won 500 donut after " + count + " tries");
}