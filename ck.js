let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");


const genCompChoice= () =>{
const option= ["rock", "paper", "scissor"];
const randIdx= Math.floor(Math.random()*3);
return option[randIdx];
}

const drawGame =() =>{
    console.log("game was draw.");
     msg.innerText="game was draw!, play again";
      msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
       // console.log("you win!");
       userScore++;
       userScorepara.innerText=userScore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        //console.log("you lose");
         msg.innerText=`you lose! ${compChoice} beats your ${userChoice}`;
          msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=> {
    console.log("user choice =", userChoice);
    const compChoice=genCompChoice();
      console.log("comp choice =", compChoice);

      if(userChoice===compChoice){
        //draw game
        drawGame();

      }
      else{
        userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin=compChoice=="paper" ? false:true;

        }

        else if(userChoice==="paper"){
            //rock,scissor
            userWin=compChoice==="scissor" ? false:true;
        }
        else{
            //rock, paper
            userWin=compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
      }
}

choices.forEach((choice)=> {
    
    choice.addEventListener("click", ()=>{
        const userchoice=choice.getAttribute("id");
// console.log("choice was clicked",userchoice) 
playGame(userchoice);
    })
});