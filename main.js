// Дано два різні числа. Визначити, яке з них більше, а яке менше.
let c = 5;
let d = 7;

if (c>d) {
    console.log (c > d);
} else {
    console.log (c < d);
}

// Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?
let km = 50;
let ft = 100;
let inMeters = ft * 0.305;

if (km * 1000 > inMeters) {
    console.log (km > ft);
}
else {
    console.log (km < ft);
}

//Визначити, чи є число a дільником числа b? І навпаки.
let a = 25;
let b = 5;

if (a % b == 0) {
    console.log ( 'a is a divisor b');
} else if (b % a == 0) {
    console.log ( 'b is a divisor a');
} else {
    console.log ('a not is a divisor b');
}

// Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.
let number = 785;

if (number % 2 == 0) {
    console.log ('is even');
} else {
    console.log (5);
}

// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?
let num = 25;
let firstNum = num / 10;
let secondNum = num % 10;

if (firstNum > secondNum) {
    console.log ('first num is larger');
} else if (secondNum > firstNum) {
    console.log ('second num is larger');
} else {
    console.log ('numbers are equal');
}

// Дано тризначне число. Визначити чи є парною сума його цифр. Визначити, чи кратна сума цифр п'яти. Визначити чи є добуток його цифр більше 100.
let n = 273;
let sum = 0;
let product = 1;

while (n > 0) {
    sum += n % 10;
    product *= n % 10;
    n = Math.floor(n/10);
}
if (sum % 2 == 0) {
    console.log ('the sum of the digits of the number is even');
} else {
    console.log ('the sum of the digits of the number is not even');
}

if (product > 100) {
    console.log ('the product of numbers is greater than 100');
} else {
    console.log ('the product of the digits is less than 100');
}

// Дано тризначне число. Чи правда, що всі цифри однакові? Чи є серед цифр цифри однакові?
let z = '222';
let digits = (z.split(''));
let firstDigit = Math.floor(z/100);
let secondDigit = Math.floor((z/10)%10);
let thirdDigit = z % 10;

if (firstDigit = secondDigit = thirdDigit) {
    console.log ('all numbers are the same');
} else {
    console.log ('not all numbers are the same');
}

// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)
let m = 123321;
let x = m.toString();
let reversM = x.split('').reverse().join('');

if (m = reversM) {
    console.log ('the given number is mirrored');
} else {
    console.log ('the given number is not mirrored');
}















