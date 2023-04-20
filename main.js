// sətirin palindrom olub-olmadığını yoxlamaq üçün proqram

function checkPalindrome(string) {

    for (let i = 0; i < string.length / 2; i++) {

        if (string[i] !== string[string.length - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

const string = prompt('Enter a string: ');

const value = checkPalindrome(string);

console.log(value);