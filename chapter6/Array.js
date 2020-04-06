

var lg = console.log;
// Array can be decleared in two way like "string"

//  Literal Array

/*var Arr = [1, 3, 4, 5, 66, 4,];
var lg = console.log;


// Creat array and change array value
Arr[9] = 70;
// you dont need to mantain serial of array number .you can decleared array keeping some array as empty so that you  assigned value after.

Arr[4] = 50;
lg(Arr)
lg(Arr.length);//10

// Cnstructor Array
var Arr2 = Array(1, 3, 3, 3);
lg(Arr2)*/








// Array Travarsing (by for loop)

/*var lg = console.log;
var Student = [20, 23, 3, 41, 2, 90];
var sum = 0;
for (var i = 0; i < Student.length; i++){
    lg(Student[i]);
    Student[i] = Student[i] + 2;
    // Addition of all numbers
    sum += Student[i];
}
lg(Student)
lg(sum)
// cheack even or odd number by for loop
for (var i = 0; i < Student.length; i++){
    if (Student[i] % 2 === 0) {  
        lg(Student[i])
        sum += Student[i];
    }
}
lg(sum)







// Insert , Remove and Replace in An Array

var inSert = [1, 2, 3, 4, 5, 6, 7, 8];

// Insert element at the last of array
inSert.push(10)

// Delete element at the last of the array

inSert.pop()


// Insert element at the start of the array

inSert.unshift(67);

// Delete element at the start of the array 

inSert.shift()

// delete specefied element and isert element in their place

// inSert[2] = 5;

inSert.splice(2, 2, 70, 80);

// insert element in specefied place without replcing any element

 //inSert.splice(2,0,70,80)

lg(inSert);



// How to search Data from an array

var SeaDat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var find = 20;
// state varaible
var isFound = false;

for (var i = 0; i < SeaDat.length; i++) {
    if (SeaDat[i] === find) {
        lg('Data is  found  at ' + i + ' index number')
        isFound = true;
        
    }
}
//isFound === false
if (!isFound ) {
    lg('Data is not found')
}



// What is multidimensional Array

var doctor = [[80, 30, 70, 60], [79, 60,39, 37], [50, 59, 79, 45]];

lg(doctor);
lg(doctor[0][2])

for (var i = 0; i < doctor.length; i++){
    //lg(doctor[i])
    for (var j = 0; j < doctor[i].length; j++){

        lg('Element ' + i + ':' + doctor[i][j]);
        for (var k = 0; k < doctor[i].length; k++){
            lg(doctor[i][j][k])
        }
    }
}



// How to reverse an array 

var rvsArr = [1, 3, 4, 5, 6, 7, 8, 9, 10];
 
for (var i = 0; i < rvsArr.length / 2; i++)
{
    var temp = rvsArr[i];
    rvsArr[i] = rvsArr[rvsArr.length - 1 - i]
    rvsArr[rvsArr.length - 1 - i] = temp;
}
lg(rvsArr)

lg(rvsArr.reverse());




// Array Methods provided bu javascript

var arrMth = [1, 3, 4, 5, 6, 7, 75];
var arrMth2 = [12, 3, 34, 5, 6, 4];
// join methode
lg(arrMth.join(' , |'));
// fill methode
lg(arrMth.fill(1,2,5))
lg(arrMth.fill(false))

var arrMth2 = arrMth2.concat(arrMth);
lg(arrMth2)

// isArray methode
 lg(Array.isArray(arrMth2));

 // Array.from methode

var arrMth3 = Array.from(arrMth2);
//var arrrMth3 = arrMth2;
  // if you change in arrMth3 it will be changed in arrMth2. because it takes referencse except Array.from() it will not be changed in arrMth2;
lg(arrMth3);*/