class SpecialCharacter {
    constructor(symbol, code) {
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
    [
        new SpecialCharacter("ʃ", "5"),
        new SpecialCharacter("š", "s"),
        new SpecialCharacter("č", "c"),
        new SpecialCharacter("θ", "t"),
        new SpecialCharacter("ŋ", "n"),
        new SpecialCharacter("ɾ", "r"),
        new SpecialCharacter("ð", "d"),
        new SpecialCharacter("ʔ", "/"),
    ],
    [
        new SpecialCharacter("æ", "a"),
        new SpecialCharacter("ɛ", "3"),
        new SpecialCharacter("ə", "e"),
        new SpecialCharacter("ʌ", "u"),
    ]
];

export { SpecialCharacter, dictionary }
