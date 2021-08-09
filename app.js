//Poner todos estos resultados en la memoria del dom

let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score"); 

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById('r');
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Evento Aleatorio para la machine

function getComputerChoice()
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

function win(userChoice, computerChoice)
{
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML =computerScore;

    const smallUserWord = "Human".fontsize(3).sub();
    const smallComputerWord = "Machine".fontsize(3).sub();

    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " beats " + convertToWord(computerChoice) + smallComputerWord + "<br> You win!!";
}

function lose(userChoice, computerChoice)
{
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML =computerScore;

    const smallUserWord = "Human".fontsize(3).sub();
    const smallComputerWord = "Machine".fontsize(3).sub();

    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " beats " + convertToWord(computerChoice) + smallComputerWord + "<br> You lost... ";
}

function draw(userChoice, computerChoice)
{
    const smallUserWord = "Human".fontsize(3).sub();
    const smallComputerWord = "Machine".fontsize(3).sub();

    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " equals " + convertToWord(computerChoice) + smallComputerWord + "<br> It's draw";
}

    //Funcion de procesamiento de datos

function game(userChoice)
{
    const computerChoice = getComputerChoice();
  
    switch (userChoice + computerChoice)
    {
        case "sp":
        case "rs":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;    
    }
}


//manupilar el evento click User

function main()
{
    rock_div.addEventListener('click', function(){
        game("r")
    })
    
    paper_div.addEventListener('click', function(){
        game("p")
    })
    
    scissors_div.addEventListener('click', function(){
        game("s")
    })
}

main();