let btn=document.querySelectorAll(".cr");
let up=document.querySelector("#winner");
let play=document.querySelector(".thegame");
let reset=document.querySelector("#reset");
let div=document.querySelector(".container");
let a=[0,0,0,0,0,0,0,0,0];
reset.addEventListener("click",r=>{
    if(up.innerText!=""){
        alert("THE MATCH IS COMPLETED YOU CANNOT RESET NOW");
        alert("CLICK ON NEW GAME TO PLAY AGAIN");
    }
    else{
        a=[0,0,0,0,0,0,0,0,0];
        for(let i=0;i<9;i++){
            btn[i].innerText="S";
            btn[i].style.color="aqua"
        }
    }
})

 function callfun(){
    let newbtn=document.createElement("button");
    newbtn.innerText="NEW GAME";
    newbtn.style.height=8;
    newbtn.style.width= 15;
    newbtn.style.fontSize=4;
    div.before(newbtn);
    newbtn.addEventListener("click",r=>{
        newbtn.remove();
        up.innerText="";
        a=[0,0,0,0,0,0,0,0,0];
        for(let i=0;i<9;i++){
            btn[i].innerText="S";
            btn[i].style.color="aqua"
        }
        
    })
 }
function check(){
    
        for(let j=0;j<9;j+=3){
            if(a[j]==a[1+j]&&a[j]==a[2+j]){
                if(a[j]!=0){
                    up.innerText=`PLAYER ${a[j]} IS WINNER `;
                    callfun();
                    return;
                }
            }
        }
        for(let j=0;j<3;j++){
            if(a[j]==a[3+j]&&a[j]==a[6+j]){
                if(a[j]!=0){
                    up.innerText=`PLAYER ${a[j]} IS WINNER `;
                    callfun();
                    return;
                }
               
            }
        }
        if(a[0]==a[4]&&a[0]==a[8]){
            if(a[0]!=0){
                up.innerText=`PLAYER ${a[0]} IS WINNER `;
                callfun();
                return;
            }
        }
        if(a[2]==a[4]&&a[2]==a[6]){
            if(a[2]!=0){
                up.innerText=`PLAYER ${a[2]} IS WINNER `;
                callfun();
                return;
            }
        }
        for(let i=0;i<9;i++){
          if( a[i]==0) {
            return;
          }
        }
        up.innerText=`THE MATCH WAS DRAW`;
        callfun();
        return;
        
        
    
}
for(let i=0;i<9;i++){
    btn[i].addEventListener("click",v=>{
        if(play.getAttribute("id")=="play1"){
            if(a[i]==0){
               
               btn[i].innerText="X";
               btn[i].style.color="black";
               a[i]=1;
              play.setAttribute("id","play2");
            }
        }
        else{
            if(a[i]==0){
                
                btn[i].innerText="O";
                 btn[i].style.color="black";
                a[i]=2;
              play.setAttribute("id","play1");
            }
        }  
        check();
    });
}