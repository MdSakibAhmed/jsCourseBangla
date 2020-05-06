
var lg = console.log;

// extend function to reduce repeating code

function exten (parent , child){
    child.prototype = Object.create(parent.prototype);

// Reset Constructor Property After Inheritance
child.prototype.constructor = child;
}

function Common (){
this.location = 'Dhaka'
}

Common.prototype = {
    stutus : function (){
      lg(  'Hi I am commmon methode')
    }
}


function Person (name,age){

    // Supper call with call methode

 Common.call(this);

this.name = name;

this.age = age
this.AboutMe = function (){
  lg('My Name is ' + name +'.' + 'I am ' + age + ' years old')
}
}


// using extand function
exten(Common,Person)

Person.prototype. birthday=
    function (){

lg('my birthday is ' + (2020 - this.age))
}


var p1 = new Person('sakib ahmed' , 23)
var p2 = new Person('salman ahmed' , 25)
var p3 = new Person('rakib ahmed' , 18)
var p4 = new Person('ridwan ahmed' , 14)












function Student (name, rollNo){
    this.name = name;
    this.rollNo = rollNo
    this.aboutStudent = function (){
        lg('My name is ' + name +'.' + 'My roll is' + rollNo)
    }
}
// using extand function
exten(Common,Student);

// Methode Overriding

Student.prototype.stutus = function (){
    //Common.prototype.stutus.call(this)
    
    lg('I am different from person object')
}
Student.prototype.Announce =
     function (){
        lg( ' Every Student has to know  about his ' + this.rollNo)
    
}


var S1 = new Student('sakib ahmed' , 2)
var S2 = new Student('salman ahmed' , 3)
var S3 = new Student('rakib ahmed' , 4)
var S4 = new Student('ridwan ahmed' , 1)



Student.prototype.Announce('srsf',5)

// call Methode
function  ami (width){
    this.width = width;
    this.name = 'salllllllma'
}

var rafiq ={
    a :34,
    b:45
}

lg(ami.call(rafiq,20));
lg(rafiq)

// supper call 
function tumi (width){
    ami.call(this,width)
}

var she = new tumi (40)

lg(she)



// Polymorphism in javscript
var all = [S1,p1,S2]
for (var i of all){
    i.stutus()
}


p1.stutus()

// Instanceof Operator 

// we can cheackout the parent object of any object by using this operator

lg(p1 instanceof Student)


var ObjMaker = function() {this.a = 'first';};

ObjMaker.prototype.b = 'second'



