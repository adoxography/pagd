class SpecialCharacter {
    constructor(symbol, code = null) {
        this.symbol = symbol;
        this.code = code;
    }

    triggeredBy(key) {
        return key == this.code;
    }

    getCommand() {
        return "Alt + " + this.code;
    }
}

var dictionary = [
    // Consonants
    [
        new SpecialCharacter("ʃ", "5"),
        new SpecialCharacter("š", "s"),
        new SpecialCharacter("č", "c"),
        new SpecialCharacter("θ", "t"),
        new SpecialCharacter("ŋ", "n"),
        new SpecialCharacter("ɾ", "r"),
        new SpecialCharacter("ð", "d"),
        new SpecialCharacter("ʔ", "?"),
        new SpecialCharacter("∅", "0"),
    ],

    // Vowels
    [
        new SpecialCharacter("ɑ", "A"),
        new SpecialCharacter("æ", "a"),
        new SpecialCharacter("ɔ", "o"),
        new SpecialCharacter("ɛ", "3"),
        new SpecialCharacter("ə", "e")
    ],

    // Diacritics
    [
        new SpecialCharacter("\u0301", "'"), // Acute
        new SpecialCharacter("\u0300", "`"), // Grave
        new SpecialCharacter("\u0302", "^"), // Circumflex
        new SpecialCharacter("\u0306", "u"), // Breve
        new SpecialCharacter("\u0304", "-"), // Macron
        new SpecialCharacter("\u0303", "~"), // Tilde
        new SpecialCharacter("ː", ":"),
        new SpecialCharacter("·", "."),
        new SpecialCharacter("\u0325") // Voiceless
    ]
];

export { SpecialCharacter, dictionary }
