let main=document.querySelector(".main");
var s="";
let arr=["download.png","cartoon.jpg","laa.jpg"];
for(let i=0;i<=25;i++){
    let r=Math.floor(Math.random()*3);
   s+=`<div class="card">
           <img src=${arr[r]}>
        </div>`;
    
}


main.innerHTML=s;