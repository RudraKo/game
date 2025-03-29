// Constants
const words = [
    "Hamlet", "Prince", "of", "Denmark", "is", "grieving", "the", "death", "of", "his",
    "father", "King", "Hamlet", "when", "his", "uncle", "Claudius", "marries", "his",
    "mother", "Gertrude", "and", "takes", "the", "throne", "One", "night", "Hamlet's",
    "father's", "ghost", "appears", "to", "him", "revealing", "that", "Claudius",
    "murdered", "him", "by", "pouring", "poison", "in", "his", "ear", "while", "he",
    "slept", "The", "ghost", "orders", "Hamlet", "to", "seek", "revenge", "but",
    "to", "leave", "Gertrude", "out", "of", "it", "Hamlet", "agrees", "but",
    "decides", "to", "pretend", "madness", "to", "uncover", "the", "truth",
    
    "Meanwhile", "Claudius", "and", "Gertrude", "worry", "about", "Hamlet's",
    "strange", "behavior", "They", "summon", "Hamlet's", "childhood", "friends",
    "Rosencrantz", "and", "Guildenstern", "to", "spy", "on", "him", "Polonius",
    "the", "king’s", "advisor", "believes", "Hamlet", "is", "mad", "because", "he",
    "loves", "his", "daughter", "Ophelia", "Claudius", "and", "Polonius",
    "arrange", "a", "meeting", "between", "Ophelia", "and", "Hamlet", "to", "observe",
    "his", "behavior", "Before", "this", "meeting", "Hamlet", "delivers", "his",
    "famous", "soliloquy", "To", "be", "or", "not", "to", "be", "in", "which",
    "he", "contemplates", "suicide", "and", "the", "meaning", "of", "life",
    
    "When", "Ophelia", "approaches", "Hamlet", "he", "lashes", "out", "at", "her",
    "telling", "her", "to", "go", "to", "a", "nunnery", "Ophelia", "is", "devastated",
    "Later", "Hamlet", "arranges", "a", "play", "to", "mimic", "his", "father’s",
    "murder", "The", "actors", "perform", "a", "scene", "where", "a", "king", "is",
    "poisoned", "in", "his", "sleep", "Claudius", "reacts", "in", "guilt", "leaving",
    "the", "room", "confirming", "Hamlet's", "suspicions", "Now", "certain", "of",
    "Claudius’s", "guilt", "Hamlet", "hesitates", "to", "kill", "him", "while",
    "he", "prays", "believing", "Claudius", "would", "go", "to", "heaven", "if",
    "he", "dies", "in", "prayer",
    
    "Later", "Hamlet", "confronts", "his", "mother", "Gertrude", "about", "her",
    "marriage", "During", "their", "heated", "argument", "he", "hears", "a",
    "noise", "behind", "a", "curtain", "thinking", "it", "is", "Claudius",
    "Hamlet", "stabs", "through", "the", "fabric", "accidentally", "killing",
    "Polonius", "Ophelia’s", "father", "Gertrude", "is", "shocked", "The",
    "ghost", "reappears", "reminding", "Hamlet", "to", "stay", "focused",
    "but", "Gertrude", "cannot", "see", "the", "ghost", "and", "thinks",
    "Hamlet", "is", "completely", "mad",
    
    "Claudius", "sends", "Hamlet", "to", "England", "with", "Rosencrantz",
    "and", "Guildenstern", "secretly", "ordering", "his", "execution",
    "However", "Hamlet", "discovers", "the", "plot", "and", "escapes",
    "sending", "his", "two", "former", "friends", "to", "their", "deaths",
    "Back", "in", "Denmark", "Ophelia", "goes", "insane", "from", "grief",
    "and", "drowns", "possibly", "by", "suicide", "Her", "brother",
    "Laertes", "returns", "enraged", "Claudius", "manipulates", "Laertes",
    "into", "challenging", "Hamlet", "to", "a", "fencing", "match",
    "where", "he", "will", "use", "a", "poisoned", "blade",
    
    "During", "the", "duel", "Laertes", "wounds", "Hamlet", "with",
    "the", "poisoned", "blade", "but", "they", "accidentally", "switch",
    "swords", "Hamlet", "stabs", "Laertes", "with", "the", "same", "blade",
    "Gertrude", "unknowingly", "drinks", "poisoned", "wine", "meant", "for",
    "Hamlet", "and", "dies", "Laertes", "reveals", "Claudius’s", "plot",
    "before", "dying", "Enraged", "Hamlet", "kills", "Claudius", "forcing",
    "him", "to", "drink", "the", "poisoned", "wine",
    
    "As", "Hamlet", "himself", "dies", "he", "names", "Prince", "Fortinbras",
    "as", "the", "rightful", "ruler", "of", "Denmark", "Horatio",
    "Hamlet’s", "loyal", "friend", "wants", "to", "commit", "suicide",
    "but", "Hamlet", "begs", "him", "to", "live", "and", "tell", "his",
    "story", "Fortinbras", "arrives", "to", "find", "the", "royal",
    "family", "dead", "He", "orders", "Hamlet", "to", "be", "honored",
    "as", "a", "fallen", "prince",
    
    "Hamlet", "is", "a", "tragedy", "about", "revenge", "madness",
    "corruption", "and", "fate", "It", "remains", "one", "of",
    "Shakespeare's", "greatest", "works"
];
const wordsCount = words.length;
const gameTime = 30 * 1000;
window.timer = null;
window.gameStart = null;
window.pauseTime = 0;

function addClass(el, name) {
    el.classList.add(name);
}

function removeClass(el, name) {
    el.classList.remove(name);
}

function randomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function formatWord(word) {
    return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
}

function newGame() {
    document.getElementById('words').innerHTML = '';
    for (let i = 0; i < 200; i++) {
        document.getElementById('words').innerHTML += formatWord(randomWord());
    }
    addClass(document.querySelector('.word'), 'current');
    addClass(document.querySelector('.letter'), 'current');
    document.getElementById('info').innerHTML = (gameTime / 1000) + '';
    window.timer = null;
}

function getWpm() {
    const words = [...document.querySelectorAll('.word')];
    const lastTypedWord = document.querySelector('.word.current');
    const lastTypedWordIndex = words.indexOf(lastTypedWord) + 1;
    const typedWords = words.slice(0, lastTypedWordIndex);
    const correctWords = typedWords.filter(word => {
        const letters = [...word.children];
        return letters.every(letter => letter.classList.contains('correct'));
    });
    return (correctWords.length / gameTime) * 60000;
}

function gameOver() {
    clearInterval(window.timer);
    addClass(document.getElementById('game'), 'over');
    const result = getWpm();
    document.getElementById('info').innerHTML = `WPM: ${Math.round(result)}`;
}

document.getElementById('game').addEventListener('keyup', ev => {
    const key = ev.key;
    const currentWord = document.querySelector('.word.current');
    const currentLetter = document.querySelector('.letter.current');
    const expected = currentLetter?.innerHTML || ' ';
    const isLetter = key.length === 1 && key !== ' ';
    const isSpace = key === ' ';
    const isBackspace = key === 'Backspace';

    if (document.getElementById('game').classList.contains('over')) {
        return;
    }

    if (!window.timer && isLetter) {
        window.timer = setInterval(() => {
            if (!window.gameStart) {
                window.gameStart = Date.now();
            }
            const msPassed = Date.now() - window.gameStart;
            const sLeft = Math.round((gameTime - msPassed) / 1000);
            if (sLeft <= 0) {
                gameOver();
                return;
            }
            document.getElementById('info').innerHTML = sLeft + '';
        }, 1000);
    }

    if (isLetter) {
        if (currentLetter) {
            addClass(currentLetter, key === expected ? 'correct' : 'incorrect');
            removeClass(currentLetter, 'current');
            if (currentLetter.nextSibling) {
                addClass(currentLetter.nextSibling, 'current');
            }
        }
    }

    if (isSpace) {
        removeClass(currentWord, 'current');
        if (currentWord.nextSibling) {
            addClass(currentWord.nextSibling, 'current');
            addClass(currentWord.nextSibling.firstChild, 'current');
        }
    }

    if (isBackspace && currentLetter && currentLetter.previousSibling) {
        removeClass(currentLetter, 'current');
        addClass(currentLetter.previousSibling, 'current');
        removeClass(currentLetter.previousSibling, 'incorrect');
        removeClass(currentLetter.previousSibling, 'correct');
    }

    const nextLetter = document.querySelector('.letter.current');
    const nextWord = document.querySelector('.word.current');
    const cursor = document.getElementById('cursor');

    if (nextLetter || nextWord) {
        cursor.style.top = (nextLetter || nextWord).getBoundingClientRect().top + 'px';
        cursor.style.left = (nextLetter || nextWord).getBoundingClientRect().left + 'px';
    }
});

document.getElementById('newGameBtn').addEventListener('click', () => {
    gameOver();
    newGame();
});

newGame();
