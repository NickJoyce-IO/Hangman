import Hangman from './hangman'
import getPuzzle from './requests'
import validator from 'validator'

const puzzleEl = document.querySelector('#word')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.getStatus

    game1.getPuzzle.split('').forEach(letter => {
        const letterEl = document.createElement("span")
        letterEl.innerHTML = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
