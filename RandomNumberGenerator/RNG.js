//Random number generator 
const btn=document.getElementById("btn")
const lbl=document.getElementById("lbl")
const lbl1=document.getElementById("lbl1")
const lbl3=document.getElementById("lbl3")
const lbl2=document.getElementById("lbl2")
const min=1
const max=9
let Random1
let Random
let Random2
let Random3

btn.onclick=function(){
    Random=Math.floor(Math.random()*max)+min
    lbl.textContent=Random
    Random1=Math.floor(Math.random()*max)+min
    lbl1.textContent=Random1
    Random2=Math.floor(Math.random()*max)+min
    lbl2.textContent=Random2
    Random3=Math.floor(Math.random()*max)+min
    lbl3.textContent=Random3
}