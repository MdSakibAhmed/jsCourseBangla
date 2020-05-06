

/// This Key word 

// The value of 'this' key word is not assined in creational passe but it is assigned in executional context. ' this' key word is will be assinged with 'undefined' in creational passe like varaible. It means that where you wirte this key word it will be assinged with of this property or window object . So if you call a methode in another object , 'this' key word associate with that methode is will not be with his own object but 'this' is will be assinged with the property you call the methode one. 

// example
var lg = console.log;
var ami ={
    Date:2020,
    birthDay:1997,
    calcaAge: function(){
         
console.log ( this.Date - this.birthDay )
    }
}
//ami.calcaAge()

var tumi={
    Date:2020,
    birthDay:2000,
    print:ami.calcaAge
}

tumi.print()

// There are two way of creating a class in js : 1 factory pattern 2 constrator pattarn;

// Factory pattern 

// var person = function (){}

var Person = function (){
    return {
        name : 'name ',
        age : 23,
        status: function (){
            console.log('He is no marriged')
        }
    }
}
var MyName = function (){
    
        this.name = 'name'
        this.age = 'age'
        this.status= function (){
            console.log('He is no marriged')
        
    }
}
 var yourName = new MyName();
 lg(MyName())// it exicutes undefined
 lg( yourName  )





var Person2 = Person();

//console.log(Person2('salman', 23))
console.log(Person()) // it outputs as a fucntion 

Person2.status()
console.log(Person2) // it outpts as a object . so there is no need to call it like function.




// Constractor Property

var rashid =  new Object()
rashid.a = 12
lg(rashid)

var rafid = new  String('salman');



lg( 'my string is ' + rafid)



 // Function is an object in javascript



 // Bind , call, apply are property of function that is an object.

 // call 

 function abc (u,y){
    lg(this)
    lg(this.r + this.m , u + y )
}

var uty={
    r:2,
    m :9
}
// made object
abc.call(uty,2,3)
// new object
abc.call({r:2,m:9},2,3)

// Apply

// apply and call are almoast same except  passing arguments with [] this difference


abc.apply(uty,[2,3])

// Bind 
// It is not called instantly . That is difference 

var io = abc.bind(uty,2,3)
io()
var io = abc.bind(uty)
// This way is perfect
io (4,5)


// Pass By value vs pass Reference- Mutable vs Immutable

// Function doees not change the premetieve data like var , bulian etc when passing the data as arguments  .But it changes the Object data 

var tr = 12;

var obj ={
    as : 23,
    ad : 20
}

function PassValue (tr){
    tr = 112
    lg(tr)

    //obj.as = 20
}


function PassValueobj (obj){
    

    obj.as = 20

}

PassValue(tr)
PassValueobj(obj)

lg(obj)
lg(tr)



// Hide Private Data as known as Abstraction
// In order to hide any function assign the function in a var , not to 'this' key word

function HidPrivate (age, status){

    var abullah = {
        x : 20,
        y : 30
    }
// 1 number way to get
    this.getAbdulla = function (){
        return abullah
    }

// 2 number way to get
    Object.defineProperty(this, 'getabdullah', {
        get:function(){
            return abullah
        },
        // setter
        set:function (value){
            abullah = value;
        }
    })

    var rahim = function (){
        lg( 'I am ' + age +'and ' + status +'marriged')
    }
this.age = age;
this.status = status;

this.all = function(){


   lg( this.age + this.status)

   function Naem (){
       lg(age - status)
   }

   this.she = function (){
       return Naem()
   

}
rahim()
}
}
var Hide2 = new HidPrivate(23,20)

Hide2.all()
Hide2.she()

// Getter And Setter in javascript
// There are two way
// 1 Number
lg(Hide2.getAbdulla())
var rahat = Hide2.getAbdulla()
lg(rahat.x)
// 2 NUmber

lg(Hide2.getabdullah)
lg(Hide2.getabdullah.x)

// Setter

Hide2.getabdullah = {
    x : 1,
    y :2
}

lg(Hide2.getabdullah.x)

lg(Hide2.getabdullah.y)








