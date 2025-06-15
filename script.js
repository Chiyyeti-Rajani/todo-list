let body=document.querySelector("body")
let choices=document.querySelectorAll(".choice")
let userpara=document.querySelector(".user-score")
let comppara=document.querySelector(".comp-score")
let msg=document.querySelector(".message")
let message=document.querySelector(".msg")
let userscore=0;
let compscore=0;
const draw=() =>{
     console.log("Draw")
     msg.innerText="Draw"
     message.style.backgroundColor="skyblue";
}
const showwinner=(userwin,userchoice,compchoice) =>{
    if(userwin===true){
        console.log("you win")
        msg.innerText=you win! Your ${userchoice} Beats ${compchoice};
        message.style.backgroundColor ="green";
        userscore++;
        if(userscore ===5){
           window,location.href="won.html"
        }

        userpara.innerText=userscore;
    }
    else{
        console.log("you lost")
         msg.innerText=you lost! ${compchoice} Beats Your ${userchoice};
         message.style.backgroundColor ="red";
         compscore++;
         if(compscore ===5){
            window,location.href="lost.html"
       }

         comppara.innerText=compscore;

    }
}
const playgame = (userchoice) =>{
    compchoice=getcompchoice();
    console.log("computer choice is",compchoice);
    if(userchoice===compchoice){
        draw();
    }
    else{
        userwin=true;
        if(userchoice === "Rock"){
            userwin=compchoice==="Paper"? false: true;
            
        }
        else if(userchoice === "paper"){
            userwin=compchoice === "Scissor"? false: true;
        }
        else{
            userwin = compchoice === "Rock"? false: true;
        }
    showwinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice)=>{
choice.addEventListener("click", (e) => {
    const userchoice = choice.getAttribute("id");
    console.log("choice was selected",userchoice);
    playgame(userchoice)
});
});
const getcompchoice = () =>{
    const array=["Rock","Paper","Scissor"];
    const randid=Math.floor(Math.random() *3 );
    return array[randid];
}