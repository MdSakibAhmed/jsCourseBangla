var lg = console.log
function functionName (){
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
test(12,4,5)

