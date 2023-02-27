class GuessingGame {
    constructor() {}

    

    guess() {
        this.crntG = Math.round((this.max - this.min) / 2) + this.min;
        return this.crntG;
    }

    
}

module.exports = GuessingGame;
