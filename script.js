var rerollcounter = 2; 
var diceArray = [];

window.onload = function () {   
    
    // Sätter namn i JS för innehållet i rerollcounter från HTML.
    rerollcounterDiv = document.getElementById("rerollcounter");
    
    document.getElementById("rerollbutton").style.visibility = "hidden";

}


function tarning1() {
    var resultat = Math.floor(Math.random() * 6) +1;
    document.getElementById("dice1").innerHTML = resultat;

    valueDice1 = parseInt(document.getElementById("dice1").textContent);
    //console.log("D1", valueDice1);
    diceArray[0] = valueDice1;
}

function tarning2() {
    var resultat = Math.floor(Math.random() * 6) +1;
    document.getElementById("dice2").innerHTML = resultat;

    valueDice2 = parseInt(document.getElementById("dice2").textContent);
    //console.log("D2", valueDice2);
    diceArray[1] = valueDice2;
}

function tarning3() {
    var resultat = Math.floor(Math.random() * 6) +1;
    document.getElementById("dice3").innerHTML = resultat;

    valueDice3 = parseInt(document.getElementById("dice3").textContent);
    //console.log("D3", valueDice3);
    diceArray[2] = valueDice3;
}

function tarning4() {
    var resultat = Math.floor(Math.random() * 6) +1;
    document.getElementById("dice4").innerHTML = resultat;

    valueDice4 = parseInt(document.getElementById("dice4").textContent);
    //console.log("D4", valueDice4);
    diceArray[3] = valueDice4;
}

function tarning5() {
    var resultat = Math.floor(Math.random() * 6) +1;
    document.getElementById("dice5").innerHTML = resultat;

    valueDice5 = parseInt(document.getElementById("dice5").textContent);
    //console.log("D5", valueDice5);
    diceArray[4] = valueDice5;
}

function rolldice() {      
    // -1 på rerollcounter    
    rerollcounterDiv.innerHTML = rerollcounter--;  

    // slå alla 5 tärningar
    tarning1();
    tarning2();
    tarning3();
    tarning4();
    tarning5();

    // När dice1 får något värde
    if (document.getElementById("dice1").textContent > 0) {
        // Gör att knappen försvinner efter ett tryck
        document.getElementById("rollbutton").style.visibility = "hidden";
        document.getElementById("rerollbutton").style.visibility = "visible";
    }     
    console.log(diceArray);

    // kolla & skriv ut 1or - 6or
    checkValue(1);
    checkValue(2);
    checkValue(3);
    checkValue(4);
    checkValue(5);
    checkValue(6);
    // kolla 1par
    checkPair();
    // skriv ut 1par
    document.getElementById("p1v7").innerHTML = diceArray.filter(checkPair).sort().pop() * 2;
    
        
}

function rerollmarked() {
    // -1 på rerollcounter    
    rerollcounterDiv.innerHTML = rerollcounter--;

    const cb1 = document.getElementById("checkbox1");
    const cb2 = document.getElementById("checkbox2");
    const cb3 = document.getElementById("checkbox3");
    const cb4 = document.getElementById("checkbox4");
    const cb5 = document.getElementById("checkbox5");

    if (cb1.checked) {
        tarning1();       
    }
    if (cb2.checked) {
        tarning2();       
    }
    if (cb3.checked) {
        tarning3();       
    }
    if (cb4.checked) {
        tarning4();       
    }
    if (cb5.checked) {
        tarning5();       
    }  
    // när man har slut på kast
    if (rerollcounter === -1) {
        // gör att knappen försvinner när man har slut på rundor
        document.getElementById("rerollbutton").style.visibility = "hidden";
        document.getElementById("nextplayer").style.visibility = "visible";
    }   
    console.log(diceArray);  

    clearPrevValue();

    // kolla & skriv ut 1or - 6or
    checkValue(1);
    checkValue(2);
    checkValue(3);
    checkValue(4);
    checkValue(5);
    checkValue(6);
    // kolla 1par
    checkPair();
    // skriv ut 1par
    document.getElementById("p1v7").innerHTML = diceArray.filter(checkPair).sort().pop() * 2;
    // kolla 2par
    

}
function nextplayer() {
    rerollcounter = 3;
    rerollcounterDiv.innerHTML = rerollcounter--;
    document.getElementById("rollbutton").style.visibility = "visible";
    document.getElementById("rerollbutton").style.visibility = "hidden";
    document.getElementById("nextplayer").style.visibility = "hidden";
}


// Funktion för att kolla värdet och sedan gångra den med längden på arrayen. Detta blir värdet på 1or - 6or.
function checkValue(valueToCheck) {
    if (diceArray.includes(valueToCheck)) {
        document.getElementById("p1v" + valueToCheck).innerHTML = diceArray.filter(x => x === valueToCheck).length * valueToCheck;
    }
}

function checkPair(diceValue) {   
    counter = 0;
    diceArray.forEach((element) => {
      if (element == diceValue) {
        counter += 1;
      }
    });
  
    if (counter >= 2) {
      return true;
    }

    
}

function clearPrevValue() {
    for (let i = 1; i < 8; i++) {
        document.getElementById("p1v" + i).innerHTML = "";
        
    }
}