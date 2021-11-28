let rodytiEl = document.getElementById("show-btn")
let btn = document.createElement("button")
let btnTxt = document.createTextNode("Randomize")
let images = document.getElementById("images")
let imgArray = ['r1.jpg', 'r2.jpg', 'r3.jpg', 'r4.jpg', 'r5.jpg', 'r6.jpg']
        
rodytiEl.style.marginTop = "50vh"

rodytiEl.addEventListener("click", rodyti)
function rodyti(){
    let show = document.getElementById("rodyti")
    let randomizeEl = document.getElementById("randomize-btn")

    if (show.style.display ==="block"){
        show.style.display = "none"
        randomizeEl.style.display = "none"
        randomizeEl.style.margin = "auto"
        randomizeEl.style.marginTop = "5px"
        rodytiEl.style.marginTop = "50vh"
        document.getElementById("show-btn").innerHTML = "Show"

    }else{
        show.style.display = "block"
        randomizeEl.style.display = "block"
        randomizeEl.style.margin = "auto"
        randomizeEl.style.marginTop = "5px"
        randomizeEl.style.marginBottom = "5px"
        rodytiEl.style.marginTop = "5px"
       
        document.getElementById("show-btn").innerHTML = "Hide"
     }

        randomizeEl.addEventListener('click', randomas) 
        function randomas(){
            images.innerHTML = " "
            imgArray.sort(function(){ return 0.1 - Math.random()})
            for (let i = 0; i < imgArray.length; i++) {
            images.innerHTML += `<img src="img/${imgArray[i]}">`
            }
        }
     }
     
