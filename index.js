const btn =document.querySelector(".btn")
const input =document.querySelector(".input")
const posib = ["scissor", "paper", "rock"]

const body= document.querySelector("body")
const win= document.querySelector(".win")
const lose= document.querySelector(".lose")

const wol= document.querySelector(".yol")
const what= document.querySelector(".what")

let winn=0
let losen=0


btn.addEventListener("click", ff)

function ff(){
 
 


  let random = Math.floor(Math.random()*posib.length)
  let sm = posib[random]
 what.innerHTML=sm

 let invalue = input.value
  if (invalue==sm){
    wol.innerHTML="YOU WIN"
    winn++
     win.innerHTML=winn
  } else {
    wol.innerHTML="YOU LOSE"
    losen++
     lose.innerHTML = losen
  }
 input.value=""
  


}