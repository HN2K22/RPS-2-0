const rockUser = document.querySelector(".rock")
const paperUser = document.querySelector(".paper")
const scissorUser = document.querySelector(".scissor")
const results = document.querySelector(".results")
const dispHuman = document.querySelector(".human")
const dispComp = document.querySelector(".comp")
const userImage = document.querySelector(".userImg")
const compImage = document.querySelector(".computerImg")
let humanScore = 0;
let computerScore = 0;

function updateUserImage(imageSrc) {
    userImage.innerHTML = ""; // Clear previous images
    const img = document.createElement("img");
    img.setAttribute("src", imageSrc);
    userImage.appendChild(img);
}

function updateCompImage(imageSrc) {
    compImage.innerHTML = ""; // Clear previous images
    const img = document.createElement("img");
    img.setAttribute("src", imageSrc);
    compImage.appendChild(img);
}

rockUser.addEventListener("click",function (){
    updateUserImage("./Rock.jpg")
    playRound("r")
})
paperUser.addEventListener("click",function (){
    updateUserImage("./Paper.jpg")
    playRound("p")
})
scissorUser.addEventListener("click",function (){
    updateUserImage("./Scissor.jpg")
    playRound("s")
})

function getComputerChoice(){
    const value =Math.random();
    if(value <0.33){
        updateCompImage("./Rock.jpg")
        return "r";
    }
    else if(value >0.33 && value <0.67){
        updateCompImage("./Paper.jpg")
        return "p";
    }
    else{
        updateCompImage("./Scissor.jpg")
        return "s";
    }
}

function playRound(humanChoice){
    const computerChoice = getComputerChoice();
    if(humanChoice === computerChoice){
        results.textContent = "it's a tie"
    }
    if(humanChoice =="r" && computerChoice =="s" || humanChoice =="p" && computerChoice =="r" || humanChoice =="s" && computerChoice =="p"){
        results.textContent = "Human Wins"    
         humanScore++;
    }
    else if(computerChoice =="r" && humanChoice =="s" || computerChoice =="p" && humanChoice =="r" || computerChoice =="s" && humanChoice =="p"){
        results.textContent = "Computer Wins"
         computerScore++;
    }
    dispHuman.textContent = `${humanScore}`;
    dispComp.textContent = `${computerScore}`;
 
}

function playGame(){
 let rounds = parseInt(prompt("How many round do you want to play?"))
 for(let i = 1; i<=rounds ;i++){
    
 }
}
function reset(){
    humanScore = 0;
    computerScore = 0;
    console.log("game reset")
}

function results1()
{
    if(humanScore > computerScore){
        console.log(`Humans wins the  rounds game`)
     }
     if(humanScore == computerScore){
        console.log("It's a tie overall")
     }
     if(humanScore < computerScore){
        console.log(`Computer wins the  game`)
     }
    
}
results1();