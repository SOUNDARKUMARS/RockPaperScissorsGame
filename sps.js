const computerdisp=document.getElementById("cmpch");
const playerdisp=document.getElementById("plch");
const result=document.getElementById("result");
const choices=document.querySelectorAll("button");
let userchoice;
let computerchoice;
let res;
choices.forEach(choice => choice.addEventListener('click', (e)=>{
userchoice=e.target.id;
playerdisp.innerHTML=userchoice;

gencomputerchoice();
getresult();
}))



function gencomputerchoice(){
    const randomNumber=Math.floor(Math.random()*3)+1;
    switch( randomNumber){
        case 1:
            computerchoice="stone";
            break;
        case 2:
            computerchoice="paper";
            break;
        case 3:
            computerchoice="scissors";
    }
    return computerdisp.innerHTML=computerchoice;
}

function getresult(){
    if(computerchoice==userchoice){
        res="it's a Draw!"
    }
    if(computerchoice==="stone" && userchoice==="paper"){
        res="You Win!"
    }
    if(computerchoice==="stone" && userchoice==="scissors"){
        res="You Lost!"
    }
    if(computerchoice==="paper" && userchoice==="scissors"){
        res="You Win!"
    }
    if(computerchoice==="paper" && userchoice==="stone"){
        res="You Lost!"
    }
    if(computerchoice==="scissors" && userchoice==="stone"){
        res="You Win!"
    }
    if(computerchoice==="scissors" && userchoice==="paper"){
        res="You Lost!"
    }
    return result.innerHTML=res;   
}