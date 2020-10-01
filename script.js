const text = 'PORUKA PO IZBORU.'

let index = 0;
var time = getRandomIntInRange(200, 500)
var colors = ["#D54C2E", "#3267AF", "#DC4BCA"] // boje pozadine

// random adresa na kojoj se nalazi boja u colors arrayu
var randomIndex = getRandomIntInRange(0, colors.length - 1)
var backgroundColor = colors[randomIndex]

// funkcija za dobivanje random broja unutar zadanog rangea
function getRandomIntInRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function writeText (){
    //dio s tekstom
    document.body.innerText = text.slice(0, index)

    //dio s bojom
    document.body.style.setProperty("background-color",backgroundColor)

    if (index % 4 == 0){
       randomIndex = getRandomIntInRange(0, colors.length - 1)
         backgroundColor = colors[randomIndex]
    }


    //dizanje indexa za text 
    index++
    if(index > text.length) {
        index = 0
    }
}

setInterval(writeText, time);