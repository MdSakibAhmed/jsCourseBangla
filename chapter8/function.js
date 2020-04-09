var lg = console.log
/*function functionName (){
    console.log('function loop is started')
}
for (var i = 0; i < 18; i++){
functionName()
}

var c = [1,3,4,5,6];
var d = [1,3,4,5,7];

// calculation of aray element by function easily
 
function  functionOfArray (muhammad){
   var sum = 0;
    for( var i = 0; i < muhammad.length; i++){
        sum += muhammad[i];
       
    }
   lg(sum); 
}
 
functionOfArray(d);

// Argument object in function 
// It is a ammazing object provided by javascript language.

function test(q,w){
    //lg(arguments);
var sum = 0;
    for (var i = 0 ; i< arguments.length; i++ ){
lg(arguments[i]);

sum += arguments[i];
    }
    lg(sum)
}
test(12,4,5)*/



// function return 

function Person(email, Number) {
    var email = email;
    var Number = Number;
    //lg(email, Number);
    // return email + Number;
    // you can also return output like a object just like this.
    return {
        email: email,
        number: Number
    }
    // you can not write anything after writing return in function. so whatever you want to write in function is must be written before return.
} 

Person('sakibahmad99090@gmail.com', 1234757554
)
// you can not store a funuction in a var (so thate you use it for any purpose anywhere)  except you decleared returne in function. Indeed , Console.log does note returne anything 
var Miye = Person;
lg(Miye('sakibahmad99090@gmail.com', 1234757554
))

// function expresion and anonimous function

var bd = function (a,b) {
    return a + b;
    //lg(a+b)
}
lg(bd(12, 3));

setTimeout(function () {
    lg('I am a muslim person')
},3000)



var dc = bd;
lg(dc(34,45))

// Inner Function 

function something (great,name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }else{
            return ''
        }
    }
    var messeege = great + ' ' + getFirstName()
    lg(messeege)
}  something('Good morning'  );

// Function scoping 
// if you decleared a var anywhere like if statement and for loop while loop  or globaly etc you will have acces on it from anywhere . But if you decleare a var in function you will have access only in this function or its childe function.But there is access in pareant function on its child function. 