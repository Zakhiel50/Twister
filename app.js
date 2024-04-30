let bodyContent = document.querySelector(".bodyParts")
const bodyContainer = document.querySelector(".bodyContainer")
let colors = document.querySelector(".colors")
const colorsContainer = document.querySelector("colorsContainer")
let img = document.querySelector('img')
const jg = 'jg.png'
const jd = 'jd.png'
const mg = 'mg.png'
const md = 'md.png'
const blue = 'Bleu.mp3'
const red = "Rouge.mp3"
const yellow = "Jaune-.mp3"
const green = "Vert.mp3"
const armLeft = "Main-gauche.mp3"
const armRight = "Main-droite.mp3"
const FootRight = "Pied-droit.mp3"
const FootLeft = "Pied-gauche.mp3"



const btn = document.querySelector("button")
let player = document.querySelector('.audio')
let playerColor = document.querySelector('.audioColor')

function bodyRamdom () {
        const n = Math.floor(Math.random(1) * 4);
        if (n === 0) {
            player.src = FootRight
            audioPlayerPlayBody()
            img.src = jd
            bodyContent.innerHTML = "Pied droit"
        } else if (n === 1) {
            player.src = FootLeft
            audioPlayerPlayBody()
            img.src = jg
            bodyContent.innerHTML = "Pied gauche"
        } else if (n === 2) {
            player.src = armRight
            audioPlayerPlayBody()
            img.src = md
            bodyContent.innerHTML = "Main droite"
        } else {            
            player.src = armLeft
            audioPlayerPlayBody()
            img.src = mg
            bodyContent.innerHTML = "Main gauche"
        }
}

function colorRamdom () {
    const n = Math.floor(Math.random(1) * 4);
    if (n === 0) {
        playerColor.src = blue
        audioPlayerPlayColor()
        colors.innerHTML = "Bleu"
        
        colors.classList.add('blue')
        colors.classList.remove('red')
        colors.classList.remove('green')
        colors.classList.remove('yellow')
    } else if (n === 1) {
        playerColor.src = red
        audioPlayerPlayColor()
        colors.innerHTML = "Rouge"
        colors.classList.add('red')
        colors.classList.remove('blue')
        colors.classList.remove('green')
        colors.classList.remove('yellow')
    } else if (n === 2) {
        playerColor.src = yellow
        audioPlayerPlayColor()
        colors.innerHTML = "Jaune"
        colors.classList.add('yellow')
        colors.classList.remove('red')
        colors.classList.remove('green')
        colors.classList.remove('blue')
    } else {
        playerColor.src = green
        audioPlayerPlayColor()
        colors.innerHTML = "Vert"        
        colors.classList.add('green')
        colors.classList.remove('red')
        colors.classList.remove('blue')
        colors.classList.remove('yellow')
    }
}

function audioPlayerPlayColor () {
    setTimeout(() => {
        playerColor.play()

    }, 2000)
}
function audioPlayerPlayBody () {
        player.play()
}

function directive () {
    bodyRamdom();
    colorRamdom()
    setTimeout(() =>{
        directive()
    }, 7000)
}

// document.body.onkeyup = function(e) {
//     if (e.key == " " ||
//         e.code == "Space" ||      
//         e.keyCode == 32      
//     ) {
  
//             directive()
//     }
//   }

 btn.addEventListener("click", directive) 


