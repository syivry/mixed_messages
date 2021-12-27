const randomNum = num => {
    return Math.floor(Math.random() * num)
}

const quotes = {
    inspo: ["You're great", "Keep it up", "it's in your hands"],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck']
}
let quotesArray = []
for (let obj in quotes) {
    let number = randomNum(quotes[obj].length)
    switch(obj) {
        case 'inspo':
            quotesArray.push(`Your insporation quote is "${quotes.inspo[number]}"`)
            break
        case 'advice':
            quotesArray.push(`Your advice is to "${quotes.advice[number]}"`)
            break
        case 'fortuneOutput':
            quotesArray.push(`You have ${quotes.fortuneOutput[number]}`)
            break
        default:
            quotesArray.push('not enough info')
    }
}
const print = quotes => {
    return quotesArray.join('\n')
}
console.log(print(quotesArray))