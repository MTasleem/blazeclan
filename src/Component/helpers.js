const rgbValue = () => {
    return Math.floor(Math.random() * 256)
}

const generateColors = (defaultNumber) => {
    let colors = []

    for (let i = 0; i < defaultNumber; i++) {
        const red = rgbValue()
        const blue = rgbValue()
        const green = rgbValue()
        colors.push(`rgb(${red},${blue},${green})`)
    }
    return colors
}

export { rgbValue, generateColors }
