const start = document.querySelector(".btn-work")
const stop = document.querySelector(".btn-pause")
const work = document.querySelector("#work")
const rest = document.querySelector("#pause")

start.addEventListener("click",  event => {
    console.log("lece")
    document.body.style.backgroundColor = "green";
    
    const redInterval = parseInt(rest.value) * 1000;
    const greenInterval = parseInt(work.value) * 1000;
    const interval = redInterval + greenInterval;

    const firstInterval = setInterval(green,redInterval+greenInterval)
    clearInterval(firstInterval)
    setTimeout(() => {
        document.body.style.backgroundColor = "red";
    },greenInterval)
    setTimeout(() =>{
        document.body.style.backgroundColor = "green";
    },interval)
    setTimeout(() => {
    setInterval(red,interval)
   },greenInterval) 
    setTimeout(() => {
    setInterval(green,interval)
   },interval) 
    
})

stop.addEventListener("click", event => {
    document.body.style.backgroundColor = "red";


})


function red(){
    console.log("red")
    document.body.style.backgroundColor = "red";
}
function green(){
    console.log("green")
    document.body.style.backgroundColor = "green";
}
    


