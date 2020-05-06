var lg = console.log;

/*var prot ={
    age: 23,
    name:'SAKIB'
}
lg(Object.keys(prot))

// Property descriptor
// Every property  has a property descriptor (that is mainly an object) that allowas to control this porperty like 'writeble', 'configurable' etc.

//var desCriptor = Object.getOwnPropertyDescriptor(prot,'age');
//lg(desCriptor);

var basObj = Object.getPrototypeOf(prot);
lg(basObj)
var Descript = Object.getOwnPropertyDescriptor(basObj,'toString');
lg(Descript)

// customization of own property

Object.defineProperty(prot,'age',{
    writable:false,
    configurable:false,
    value: 46,
    enumerable:false
})

lg(Object.getOwnPropertyDescriptor(prot,'age'))

prot.age = 24;
lg(prot)// 46 , not changable bacause writable is false;

 lg(Object.keys(prot)); // does not show 'age', bacause enumerable is 'false';

delete prot.age ;

lg(prot) // can not delete bacause configurable is 'false'*/

// constractor Prototype Object of Any Constructor Function


function Person (aim){

    // Instance Members
this.aim = aim;
this.age = 23
//lg(this.aim)
}



Person.prototype ={

    // Prototype Members
    status: function (){
        lg('I want ' + this.aim)
    },
    toString: function (){
        lg('My aimi is ' + this.aim + this.age)
    }
}
Person.prototype.a = 23;
var p1 = new Person ('to be webdevoloper')
var p2 = new Person ('to be doctor');
var p3 = new Person ('to be artist');
lg(p2)



// Instance vs Prototype

// all isntance members has access in prototype members . And all prototype members has access in instancte members


// Iterate Object property and hasOwnProperty Methode
lg(p1.hasOwnProperty('status')); // it return 'false' bacause 'status' is a methode of parent property (prototype) , not its own property
lg(Object.keys(p1))// it does not return 'draw ' function 

// 'for in loop ' it returns all kind of property included instance and prototype prototype

for(var i in p1){
    //lg(i[p1])
//lg(i)
    lg( i + ':' + p1[i])
}










