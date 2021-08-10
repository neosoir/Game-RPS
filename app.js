//Poner todos estos resultados en la memoria del dom

let userScore = 0;
let machineScore = 0;

const userScore_span = document.getElementById("user-score");
const machineScore_span = document.getElementById("machine-score"); 

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const play_again = document.querySelector(".play_again");

const rock_div = document.getElementById('r');
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Evento Aleatorio para la machine

function getmachineChoice()
{
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Comparando Variables

    //Convertir varibles

function convertToWord(letter)
{
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, machineChoice)
{
    const smallUserWord = "Human".fontsize(3).sub();
    const smallmachineWord = "Machine".fontsize(3).sub();
    const userColorWin = document.getElementById(userChoice);
    

    userScore++;
    userScore_span.innerHTML = userScore;
    machineScore_span.innerHTML = machineScore;

    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " beats " + convertToWord(machineChoice) + smallmachineWord + "<br> You win!!";

    //Volver a jugar
    play_again.innerHTML = "Restart Game";

    //Temparalizador para el efecto "Colores depediendo del resultado" css
    userColorWin.classList.add('green-glow');
    setTimeout(() => userColorWin.classList.remove('green-glow'), 1000);
}

function lose(userChoice, machineChoice)
{
    const smallUserWord = "Human".fontsize(3).sub();
    const smallmachineWord = "Machine".fontsize(3).sub();
    const userColorLose = document.getElementById(userChoice);

    machineScore++;
    userScore_span.innerHTML = userScore;
    machineScore_span.innerHTML = machineScore;

    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " beats " + convertToWord(machineChoice) + smallmachineWord + "<br> You lost...";

    //Volver a jugar
    play_again.innerHTML = "Restart Game";
    
    userColorLose.classList.add('red-glow');
    setTimeout(() => userColorLose.classList.remove('red-glow'), 1000);
}

function draw(userChoice, machineChoice)
{
    const smallUserWord = "Human".fontsize(3).sub();
    const smallmachineWord = "Machine".fontsize(3).sub();
    const userColorDraw = document.getElementById(userChoice);

    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " equals " + convertToWord(machineChoice) + smallmachineWord + "<br> It's draw";

    //Volver a jugar
    play_again.innerHTML = "Restart Game";
    
    userColorDraw.classList.add('gray-glow');
    setTimeout(() => userColorDraw.classList.remove('gray-glow'), 1000);
}

    //Funcion de procesamiento de datos

function game(userChoice)
{
    const machineChoice = getmachineChoice();
  
    switch (userChoice + machineChoice)
    {
        case "sp":
        case "rs":
        case "pr":
            win(userChoice, machineChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, machineChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, machineChoice);
            break;    
    }
}


//manupilar el evento click User

function main()
{
    rock_div.addEventListener('click', () => game("r")); 
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();