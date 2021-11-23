const board = document.querySelector('#board')
const colors = ['#F08080', '#7CFC00', '#FFA500', '#20B2AA', '#8A2BE2', '#0000FF', '#778899', '#00FFFF', '#FF7F50']
const SQUARES_NUMBER = 1000

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    //Чтобы цвет исчезал
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}


function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

//Чтобы цвет исчезал
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
     element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}