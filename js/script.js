let images = ["dado1.svg",
    "img/dado2.svg", 
    "img/dado3.svg",
    "img/dado4.svg",
    "img/dado5.svg",
    "img/dado6.svg"];

let dado = document.querySelectorAll("img");

function roll(){
    dado.forEach(function(die){
        die.classList.add("shake");
    });

    setTimeout(function(){
        dado.forEach(function(die){
            die.classList.remove("shake");
        });

        let dieOneValue, dieTwoValue;

        do {
            // Sorteia um número entre 0 e 5 (inclusive)
            dieOneValue = Math.floor(Math.random()*6);
            // Continua sorteando enquanto o número for 0
        } while (dieOneValue === 0);

        do {
            // Sorteia um número entre 0 e 5 (inclusive)
            dieTwoValue = Math.floor(Math.random()*6);
            // Continua sorteando enquanto o número for 0
        } while (dieTwoValue === 0);
        
        console.log(dieOneValue, dieTwoValue);

       
        document.querySelector("#dado-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#dado-2").setAttribute("src", images[dieTwoValue]);
    },
    1000
    );
}

// console.log(dice);