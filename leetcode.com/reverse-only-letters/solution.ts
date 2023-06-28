function reverseOnlyLetters(s: string): string {
    let arrStr: string[] = s.split('');
    let x: number = 0;
    let y: number = s.length - 1;
    while (x < y) {
        if (arrStr[x].toLowerCase() === arrStr[x].toUpperCase()) ++x;
        else if (arrStr[y].toLowerCase() === arrStr[y].toUpperCase()) --y;
        else {
            [arrStr[x], arrStr[y]] = [arrStr[y], arrStr[x]];
            ++x;
            --y;
        }
    }
    return arrStr.join('');
};

function reverseOnlyLettersRegex(s: string): string {
    let reversedString: string[] = [];
    let x: number = 0;
    let y: number = s.length - 1;

    for (x; x < s.length; x++) {
        if (s[x].match(/[a-zA-Z]+/g)) {
            while (!s[y].match(/[a-zA-Z]+/g)) y--;
            reversedString.push(s[y--]);
        } else {
            reversedString.push(s[x]);
        }
    }
    return reversedString.join('');
};

console.log(reverseOnlyLetters('ab-cd'));
console.log(reverseOnlyLetters('a-bC-dEf-ghIj'));
console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'));

console.log(reverseOnlyLettersRegex('ab-cd'));
console.log(reverseOnlyLettersRegex('a-bC-dEf-ghIj'));
console.log(reverseOnlyLettersRegex('Test1ng-Leet=code-Q!'));