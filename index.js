function writeCards(names) {
    return names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`)
}

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--
    }
}