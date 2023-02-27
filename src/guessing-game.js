class GuessingGame {
    constructor() {}

    

    guess() {
        this.crntG = Math.round((this.max - this.min) / 2) + this.min;
        return this.crntG;
    }

    greater() {
        this.min = this.crntG;
    }

    lower() {
        this.max = this.crntG;
    }
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
}

module.exports = GuessingGame;
