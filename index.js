
let count=0;
 


document.getElementById("increaseBtn").onclick=function(){
    count++;
    const myLabel=document.getElementById("myLabel");
    myLabel.textContent=count;
}


document.getElementById("decreaseBtn").onclick=function(){
    count--;
    const myLabel=document.getElementById("myLabel");
    myLabel.textContent=count;
}

document.getElementById("resetBtn").onclick=function(){
    count=0;
    const myLabel=document.getElementById("myLabel");
    myLabel.textContent=count;
}