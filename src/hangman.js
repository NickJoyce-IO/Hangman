
 class Hangman {
    constructor (word, guesses) {
        this.word = word.toLowerCase().split(''),
            this.guesses = guesses,
            this.guessedLetters = [],
            this.status = 'playing'
    }
    checkStatus() {
        const finished = this.word.every(letter => this.guessedLetters.includes(letter) || letter === ' ')


        if (this.guesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get getPuzzle() {
        let result = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                result += letter
            } else {
                result += '*'   
            }
        })
        return result
    }
    get getStatus() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.guesses}`
        } else if (this.status === 'failed') {
            return `Nice try the word was ${this.word.join('')}`
        } else {
            return `Great work! You guessed the word`
        }
    }
    makeGuess(guess){
        if (this.status !== 'playing') {
            return
        } else {
            guess = guess.toLowerCase()
            const isUnique = !this.guessedLetters.includes(guess)
            const isBadGuess = !this.word.includes(guess)

            if (isUnique) {
                this.guessedLetters.push(guess)
            }

            if (isUnique && isBadGuess) {
                this.guesses--
            }

            this.checkStatus()
            return this.guesses

        }
    }
}
export { Hangman as default }
