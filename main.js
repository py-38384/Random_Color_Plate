const container = document.querySelector('.container')
const refresh_button = document.querySelector('.refresh-btn')

const maxPaletteBoxes = 16

const copyColorCode = (color, randomHex) => {
    navigator.clipboard.writeText(randomHex.toUpperCase()).then(() => {
        color.children[1].innerHTML = 'Copied!'
        setTimeout(() => color.children[1].innerHTML = randomHex, 1000)
    }).catch(() => alert("Failed to copy the color code!"))
}

const generatePlatte = () => {
    container.innerHTML = ''
    for (let i = 0; i < maxPaletteBoxes; i++){
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6, "6")}`
        
        const color = document.createElement('li')
        color.addEventListener('click', () => copyColorCode(color, randomHex))
        color.classList.add("color")
        color.innerHTML = 
                        `
                            <div class="rect-box" style="background: ${randomHex}"></div>
                            <span class="hex-value">${randomHex}</span>
                        `
        container.appendChild(color)
    }
}

refresh_button.addEventListener('click', generatePlatte)

window.addEventListener('load', generatePlatte)