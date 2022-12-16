function Game(){

    const computerChoiceDisplay = document.getElementById('computer-choice');
    const userChoiceDisplay = document.getElementById('user-choice');
    const resultDisplay = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    const possibleChoices = document.querySelectorAll('button');
    const winSound = document.querySelector('#win');
    const loseSound = document.querySelector('#lose');
    const TieSound = document.querySelector('#tie');

    let userChoice;
    let computerChoice;
    let result;
    let resultT ="Press restart to play again"
    let playerPoints = 0;
    let computerPoints = 0;

    
    


    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
        userChoice = e.target.id
        
        generateComputerChoice()
       
        getResult()
        
       
    
    }))
    
 
    
    function generateComputerChoice(){
        const randomNumber = Math.floor(Math.random() * 3) + 1;
    
        if (randomNumber === 1){
            computerChoice = 'rock';
            
        }
        if (randomNumber === 2){
            computerChoice = 'paper'
            
        }
        if (randomNumber === 3){
            computerChoice = 'scissors'
            
        }
    
        
   
    }
    
    function getResult(){
        if (computerChoice === userChoice){
            result ='Tie';
            showRobotTie();
            TieSound.play();
            
        }
        if (computerChoice === 'rock' && userChoice=== 'paper'){
            result = 'You Win!';
            
            playerPoints++
            
            showRockC();
            showVS();
            showRobotL()
            winSound.play();
            
        }
        if (computerChoice === 'rock' && userChoice=== 'scissors'){
            result = 'You lose...';
            
            computerPoints++
            showRockC();
            showVS();
            showRobotW();
            loseSound.play();
            
        }
        if (computerChoice === 'paper' && userChoice=== 'scissors'){
            result = 'You win!';
            
            playerPoints ++
            showPaperC();
            showVS();
            showRobotL()
            winSound.play();
            
        }
        if (computerChoice === 'paper' && userChoice=== 'rock'){
           
            result = 'You lose...';
            
            computerPoints++
            showPaperC();
            showVS();
            showRobotW();
            loseSound.play();
            

        }
        
        if (computerChoice === 'scissors' && userChoice=== 'rock'){
            result = 'You Win!';
            
            playerPoints ++
            showScissorsC();
            showVS();
            showRobotL()
            winSound.play();
            
        }
        if (computerChoice === 'scissors' && userChoice=== 'paper'){
            result = 'You lose...';
            
            computerPoints++
            showScissorsC();
            showVS();
            showRobotW();
            loseSound.play();
            
        }
    
        resultDisplay.innerHTML = result;
        resultText.innerHTML = resultT
       
    
    }
    
    }

    
    Game();
   
function startGame(){
        let gameWindow = document.getElementById("game");
       
    if (gameWindow.style.display === "none"){
            gameWindow.style.display = "block";
        } else {
            gameWindow.style.display="none";
        }
        
    }
   
    function showVS(){
        const versus = document.getElementById('vs');
        versus.style.display="block";
    }

    function showRock(){
        const rockSymbol = document.getElementById('rockSymbol');
        rockSymbol.style.display="block";
        console.log(rockSymbol)
    }

    function showPaper(){
        const paperSymbol = document.getElementById('paperSymbol');
        paperSymbol.style.display="block";
    }

function showScissors(){
    const scissorsSymbol = document.getElementById('scissorsSymbol');
        scissorsSymbol.style.display="block";
}



function showRockC(){
    const rockSymbolC = document.getElementById('rockSymbolC');
    rockSymbolC.style.display="block";
    
}


function showPaperC(){
    const paperSymbolC = document.getElementById('paperSymbolC');
    paperSymbolC.style.display="block";
}

function showScissorsC(){
const scissorsSymbolC = document.getElementById('scissorsSymbolC');
    scissorsSymbolC.style.display="block";
}

function showRobotW(){
    const robotW = document.getElementById('robotW');
    robotW.style.display = "block";
}

function showRobotL(){
    const robotL = document.getElementById('robotL');
    robotL.style.display = "block";
}

function showRobotTie(){
    const robotTie = document.getElementById('robotTie');
    robotTie.style.display = "block";
}

function reStart(){
    location.reload();
}

function showrestart(){
    const restartButton = document.getElementById('restartButton');
    restartButton = style.display = "block";
}


