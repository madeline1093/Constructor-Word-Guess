//require anything?

let Letter = function(underlyingCharacter, letterGuessed) {
    this.underlyingCharacter = underlyingCharacter;
    this.letterGuessed = false;
    this.checkGuessed = function(){
        //if underlyingCharacter has been guessed, return that character
        // else if the underlyingCharacter has not been guessed,  return an underscore
        if (underlyingCharacter) {
            return underlyingCharacter;
        } else {
            return _; 
        }
    }; 
    this.correctGuess = function(character){
        //if character is equal to the underlyingCharacter, let letterGuessed = true;
    }
}

module.exports = Letter;