var istatus= document.querySelector("h5")
var btn= document.querySelector("#add")
// var check=0;
var check = false;



// var rmFiend=document.querySelector("#remove")
btn.addEventListener("click",function(){
    check = !check;
    if(check==true){

            istatus.innerHTML= "Friends"
            istatus.style.color= "green"
            btn.innerHTML= "Remove friend"
    }else{
        istatus.innerHTML= "Stanger"
            istatus.style.color= "red"
            btn.innerHTML= "add friend"
    }
})



// rmFiend.addEventListener("click",function(){
//     istatus.innerHTML= "Stanger"
//     istatus.style.color= "red"
// })
