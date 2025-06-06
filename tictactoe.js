let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let msg=document.querySelector(".msg");
let msgcontainer=document.querySelector(".hide");
let rohit=document.querySelector("#reset");
let turno=true;
let cnt=0;
const winningpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]
let gameover=false;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("btn was clicked");
       if(gameover) return;
        if(box.innerText!=="") return ;
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
          cnt++;
        checkwinner();
    });
});
const checkwinner=()=>{
    for(let pattern of winningpattern){
    let p1=boxes[pattern[0]].innerText;
    let p2=boxes[pattern[1]].innerText;
    let p3=boxes[pattern[2]].innerText;
if(p1!=""&&p2!=""&&p3!=""){
    if(p1===p2&&p2===p3){
        console.log("winner",p3);
        showwinner(p3);
        
    }
    else{
        if(cnt==9){
            console.log("draw");
            msg.innerText=`the match is draw`
     msgcontainer.style.display = "block";
     gameover=true;
        }
    }
}
}
}
const showwinner=(winner)=>{
    console.log(`Congratulations the winner is ${winner}`);
    msg.innerText=`congratulation the winner is ${winner}`
     msgcontainer.style.display = "block";
     gameover=true;
     
}
