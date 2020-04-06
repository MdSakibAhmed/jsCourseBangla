

lg = console.log;

// There are two ways to Access to an object 
// one is called '.notation'

// secend is called ' Array notation'

// Example

/*var obj = { mis: 80, quduri: 89, mutta: 69 }

lg(obj.mis)
lg(obj['mis']);

// genarllay we use .notation But when we have no knowledge about property , inthatcase we will need to use array notation

var arr = 'quduri'

//lg(obj.arr)
 lg(obj[arr])


 // How to remove a property of an object

delete obj.mutta;
lg(obj);

// How to compare two object in js

var obj2 = {
    a : 12,
    b :13

}
var obj3 = {
    a : 12,
    b : 14

}

if (obj2.a === obj3.a && obj2.b === obj3.b) {
    lg(true)
} else { lg(false) }

// short trick by json

if (JSON.stringify(obj2) === JSON.stringify(obj3)) {
    lg(true)
} else { lg(false) }

var c = 'ab';
var d = 'ac';

// Iteret objects , for in loop , 'in' opetator

var forIn ={
    a : 20,
    b : 10,
    c : 30,
    d : 40
}
// in operator
lg('c' in forIn);

// iterate object by for in loop

for (var i in forIn) {
    //lg(i)
    lg( i + ':'+ forIn[i]);
}*/

// Object Methodes provided by javascript

var obmet = {
    i : 30,
    o: 40,
    p : 30
}

lg(Object.keys(obmet));

lg(Object.values(obmet))

lg(Object.entries(obmet))


// Creat object from a object 

obmet2 = Object.assign({}, obmet);
obmet2.i = 50;
lg(obmet2, obmet);


