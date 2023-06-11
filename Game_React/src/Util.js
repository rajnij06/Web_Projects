export function isValidUser(userName) {
    userName = userName.trim();
    const regexSpecialChars = /^[a-zA-Z0-9]*$/g;
    if (!userName || userName.toLowerCase() === "dog" || !userName.match(regexSpecialChars)) {
        return false;
    }
    return true;
}

export function matchWords(word) {
    let result = "";
    if (word.length !== 5) {
        result = word + " was not a valid word";
    }
    else if (word.toUpperCase() === 'RECAT') {
        result = word + " is the secret word!";
    }
    else {
        const secretWord = "RECAT";
        let count = 0;
        let charObj = {};
        for (let index=0; index<word.length; index++) {
            let currChar = word[index].toUpperCase();
            if (charObj[currChar] === undefined) {
                charObj[currChar] = 1; 
            }
            else {
                charObj[currChar] = charObj[currChar]+1;
            }
        }
        for (let index=0; index<secretWord.length; index++) {
            let currChar = secretWord[index];
            if (charObj[currChar] !== undefined && charObj[currChar] > 0) {
                count++;
                charObj[currChar] = charObj[currChar]-1;
            }
        }    
        result = word + " had " + count + " letters in common";
    }
    return result;
}