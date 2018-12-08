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

    insertInto(string, index) {
        return string.substr(0, index) + this.symbol + string.substr(index);
    }
}

class Diacritic extends SpecialCharacter {
    constructor(symbol, code, modificationTable) {
        super(symbol, code);
        this.table = modificationTable || {};
    }

    modify(letter) {
        if (letter in this.table) {
            return this.table[letter];
        }

        return letter + this.symbol;
    }

    insertInto(string, index) {
        let left = string.slice(0, index);
        let right = string.slice(index);

        if (length.length == 0) {
            return left + this.symbol + right;
        }

        return left.slice(0, -1) + this.modify(left[left.length - 1]) + right;
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
        new Diacritic("\u0301", "'", {'a': 'á', 'e': 'é', 'i': 'í', 'o': 'ó', 'u': 'ú', 'ǽ': 'ǽ'}), // Acute
        new Diacritic("\u0300", "`", {'a': 'à', 'e': 'è', 'i': 'ì', 'o': 'ò', 'u': 'ù'}), // Grave
        new Diacritic("\u0302", "^", {'a': 'â', 'e': 'ê', 'i': 'î', 'o': 'ô', 'u': 'û'}), // Circumflex
        new Diacritic("\u0306", "u", {'a': 'ă', 'e': 'ĕ', 'i': 'ĭ', 'o': 'ŏ', 'u': 'ŭ'}), // Breve
        new Diacritic("\u0304", "-", {'a': 'ā', 'e': 'ē', 'i': 'ī', 'o': 'ō', 'u': 'ū'}), // Macron
        new Diacritic("\u0303", "~", {'a': 'ã', 'e': 'ẽ', 'i': 'ĩ', 'o': 'õ', 'u': 'ũ'}), // Tilde
        new Diacritic("ː", ":"),
        new Diacritic("·", "."),
        new Diacritic("\u0325", null), // Voiceless
        new SpecialCharacter("→", null)
    ]
];

export { SpecialCharacter, Diacritic, dictionary }
