
/*// There is two way to write a string.
// One of them is called : string Literal 
// another is called : stritng constructor

// string literal (It is common to use)
var Lite = 'something'
// string constructor(it is very usefull when you want to type coretion like number to string)
var cons =  String('string construcntor')
var someone = 13
var somePeopel = String(someone);
var somePeoplee = someone.toString()
 
console.log(Lite,cons,someone,somePeopel,somePeoplee)



// Escape notation


 \n(for newline)

 \t(for horizantal tab)

 \'(for cotation)

 \\( for back\) 

 other escape sequences are valid in JavaScript:
Code	Result
\b	Backspace
\f	Form Feed
\r	Carriage Return
\v	Vertical Tabulator

var ami = 'This is a string';
var ami = 'This is a string';
var ami = 'This is a \tstring';
console.log(ami)

// HOW to compare two string
// every capital letter is smaller than small  letter
// " a" or "A" is smallest letter 
// "z" or "Z" is biggest letter .So z is bigger than y and y is bigger than x ... untill a

var ab = 'abcd';
var ba = 'bacd';
console.log(ab > ba)//false

//  system to compare  string to number
// js compiler converts string to number while comparing to a number
console.log('001' == 1)// true*/



// STRING METHODES probided by javascript

// 1.a.concat()
// 2.a.substr()
// 3.a.slice()  /*(substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part in substr().

// 4.a.sbstring()  \\substring() is similar to slice().The difference is that substring() cannot accept negative indexes.

// 5.a.charAt()
// 6.a.charCodeAt() (The charCodeAt() method returns the unicode of the character at a specified index in a string:)

// 7.a.replace() \\The replace() method replaces a specified value with another value in a string:

// 8.a.startsWith()
// 9.a.endsWith()
// 10.a.toUpperCase()
// 11.a.toLowerCase()
// 12.a.trim()
// 13.a.split()
// 14.a.length
// 15.a.indexOf()
// 16.a.search()
/*he two methods are NOT equal.These are the differences:
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values(regular expressions).*/

 var h = 'I am';
var g = 'Sakib Ahmed';
var i = 'Salman sakib';

var s = h.concat(' ', g, ' ', i);
var log = console.log;



log(i.indexOf('z', 6))//-1

log(i.lastIndexOf('a'))//8
log(i.search('a'))//1

console.log(s)
var p = s.substr(6, 9)

console.log(g.replace('Sakib','Rakib'))

console.log(s.charAt(11))

console.log(h.charCodeAt(3))

console.log(s.startsWith('I'))// true

console.log(s.endsWith('sakib'))// true

console.log(h.toUpperCase());

console.log(g.toLowerCase());

console.log('   amar name     '.trim())

console.log(s.split(' '))

console.log(g.length)

 
 console.log(s,p)


